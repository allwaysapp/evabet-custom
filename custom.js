// Anasayfa kontrolü
function isHomePage() {
    const url = window.location.pathname;
    return url === '/' || 
           url === '/tr/' || 
           url === '/tr' || 
           url === '/en/' || 
           url === '/en';
}

// Custom section'ı kaldırma fonksiyonu
function removeCustomSection() {
    const existingSection = document.querySelector('.custom-section1');
    if (existingSection) {
        existingSection.remove();
        console.log('Custom section kaldırıldı');
    }
}

// Custom Section Ekleme Fonksiyonu
function addCustomSection() {
    // Anasayfa değilse çık
    if (!isHomePage()) {
        removeCustomSection();
        return;
    }
    
    // Slider div'i bul
    const sliderDiv = document.querySelector('.l2--top.top-banner-section');
    
    if (!sliderDiv) {
        console.log('Slider div bulunamadı');
        return;
    }
    
    // Zaten eklenmiş mi kontrol et
    if (document.querySelector('.custom-section1')) {
        console.log('Custom section zaten var');
        return;
    }
    
    // Yeni div oluştur
    const customSection = document.createElement('div');
    customSection.className = 'custom-section1';
    
    // 8 görsel ekle (yeni sıralama ile)
    const images = [
        { name: 'Para Yatır', url: 'https://raw.githubusercontent.com/allwaysapp/evabet-custom/refs/heads/main/para%20yat%C4%B1r%20kopya.webp', link: '/popup/cashier' },
        { name: 'Para Çek', url: 'https://raw.githubusercontent.com/allwaysapp/evabet-custom/refs/heads/main/para%20%C3%A7ek%20kopya.webp', link: '/popup/withdrawal' },
        { name: 'Canlı Maç', url: 'https://raw.githubusercontent.com/allwaysapp/evabet-custom/refs/heads/main/canl%C4%B1%20ma%C3%A7%20kopya.webp', link: '/sport/live' },
        { name: 'Canlı Casino', url: 'https://raw.githubusercontent.com/allwaysapp/evabet-custom/refs/heads/main/canl%C4%B1%20casino%20kopya.webp', link: '/livecasino/All/' },
        { name: 'En İyi Slotlar', url: 'https://raw.githubusercontent.com/allwaysapp/evabet-custom/refs/heads/main/en%20iyi%20slotlar%20kopya.webp', link: '/casino-lobby/All/' },
        { name: 'Eva Çark', url: 'https://raw.githubusercontent.com/allwaysapp/evabet-custom/refs/heads/main/eva%20%C3%A7ark%20kopya.webp', link: 'https://evacark.com/' },
        { name: 'Eva Promosyonlar', url: 'https://raw.githubusercontent.com/allwaysapp/evabet-custom/refs/heads/main/eva%20promosyonlar%20kopya.webp', link: '/promotions' },
        { name: 'Bonus Talep', url: 'https://raw.githubusercontent.com/allwaysapp/evabet-custom/refs/heads/main/bonus%20talep%20kopya.webp', link: 'https://www.evabonus.com/' }
    ];
    
    // Görselleri ekle
    images.forEach(image => {
        // Link container oluştur
        const linkElement = document.createElement('a');
        linkElement.href = image.link;
        linkElement.className = 'custom-section1-link';
        
        // Dış linkler için target="_blank"
        if (image.link.startsWith('http')) {
            linkElement.target = '_blank';
            linkElement.rel = 'noopener noreferrer';
        }
        
        // Görsel oluştur
        const imgElement = document.createElement('img');
        imgElement.src = image.url;
        imgElement.alt = image.name;
        imgElement.className = 'custom-section1-item';
        
        // Görseli link içine koy
        linkElement.appendChild(imgElement);
        customSection.appendChild(linkElement);
    });
    
    // Slider'ın altına ekle
    sliderDiv.insertAdjacentElement('afterend', customSection);
    console.log('Custom section anasayfaya eklendi!');
}

// Sayfa değişikliklerini izle
function handlePageChange() {
    // ÖNCE kaldır
    removeCustomSection();
    
    // Sonra anasayfaysa ekle
    if (isHomePage()) {
        setTimeout(() => {
            waitAndAddSection();
        }, 100);
    }
}

// Link tıklamalarını yakala (anında kaldırmak için)
document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (link && link.href && link.href.startsWith(window.location.origin)) {
        // Site içi link tıklandı - anında kaldır
        removeCustomSection();
    }
});

// DOM hazır olduğunda çalıştır
function waitAndAddSection() {
    if (!isHomePage()) {
        removeCustomSection();
        return;
    }
    
    const sliderDiv = document.querySelector('.l2--top.top-banner-section');
    
    if (sliderDiv) {
        addCustomSection();
    } else {
        setTimeout(waitAndAddSection, 500);
    }
}

// İlk yükleme
waitAndAddSection();

// URL değişikliklerini izle (SPA için)
window.addEventListener('popstate', handlePageChange);

// History API değişikliklerini izle
const originalPushState = history.pushState;
history.pushState = function() {
    removeCustomSection(); // Önce kaldır
    originalPushState.apply(this, arguments);
    setTimeout(handlePageChange, 50);
};

const originalReplaceState = history.replaceState;
history.replaceState = function() {
    removeCustomSection(); // Önce kaldır
    originalReplaceState.apply(this, arguments);
    setTimeout(handlePageChange, 50);
};
