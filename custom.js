// Anasayfa kontrolü
function isHomePage() {
    const url = window.location.pathname;
    return url === '/' || 
           url === '/tr/' || 
           url === '/tr' || 
           url === '/en/' || 
           url === '/en';
}

// Custom section'ları kaldırma fonksiyonu
function removeCustomSections() {
    const existingSection1 = document.querySelector('.custom-section1');
    const existingSection2 = document.querySelector('.custom-section2');
    
    if (existingSection1) {
        existingSection1.remove();
        console.log('Custom section1 kaldırıldı');
    }
    
    if (existingSection2) {
        existingSection2.remove();
        console.log('Custom section2 kaldırıldı');
    }
}

// Custom Section 1 Ekleme Fonksiyonu (8 görsel)
function addCustomSection1() {
    // Anasayfa değilse çık
    if (!isHomePage()) {
        removeCustomSections();
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
        console.log('Custom section1 zaten var');
        return;
    }
    
    // Yeni div oluştur
    const customSection1 = document.createElement('div');
    customSection1.className = 'custom-section1';
    
    // 8 görsel ekle
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
        customSection1.appendChild(linkElement);
    });
    
    // Slider'ın altına ekle
    sliderDiv.insertAdjacentElement('afterend', customSection1);
    console.log('Custom section1 anasayfaya eklendi!');
}

// Custom Section 2 Ekleme Fonksiyonu (2 görsel - Telegram & WhatsApp)
function addCustomSection2() {
    // Anasayfa değilse çık
    if (!isHomePage()) {
        return;
    }
    
    // Section1'i bul
    const section1 = document.querySelector('.custom-section1');
    
    if (!section1) {
        console.log('Section1 bulunamadı, section2 eklenemiyor');
        return;
    }
    
    // Zaten eklenmiş mi kontrol et
    if (document.querySelector('.custom-section2')) {
        console.log('Custom section2 zaten var');
        return;
    }
    
    // Yeni div oluştur
    const customSection2 = document.createElement('div');
    customSection2.className = 'custom-section2';
    
    // 2 görsel ekle (Telegram & WhatsApp)
    const socialImages = [
        { 
            name: 'Telegram', 
            url: 'https://raw.githubusercontent.com/allwaysapp/evabet-custom/refs/heads/main/telegram.webp', 
            link: 'https://t.me/evabetduyuru' 
        },
        { 
            name: 'WhatsApp', 
            url: 'https://raw.githubusercontent.com/allwaysapp/evabet-custom/refs/heads/main/whatsapp.webp', 
            link: 'https://www.whatsapp.com/channel/0029Vb6SHSyHwXbHFL6Nnd2n' 
        }
    ];
    
    // Görselleri ekle
    socialImages.forEach(image => {
        // Link container oluştur
        const linkElement = document.createElement('a');
        linkElement.href = image.link;
        linkElement.className = 'custom-section2-link';
        linkElement.target = '_blank';
        linkElement.rel = 'noopener noreferrer';
        
        // Görsel oluştur
        const imgElement = document.createElement('img');
        imgElement.src = image.url;
        imgElement.alt = image.name;
        imgElement.className = 'custom-section2-item';
        
        // Görseli link içine koy
        linkElement.appendChild(imgElement);
        customSection2.appendChild(linkElement);
    });
    
    // Section1'in altına ekle
    section1.insertAdjacentElement('afterend', customSection2);
    console.log('Custom section2 eklendi!');
}

// Tüm custom section'ları ekleme fonksiyonu
function addCustomSections() {
    // Anasayfa değilse çık
    if (!isHomePage()) {
        removeCustomSections();
        return;
    }
    
    addCustomSection1();
    addCustomSection2();
}

// Sayfa değişikliklerini izle
function handlePageChange() {
    // ÖNCE kaldır
    removeCustomSections();
    
    // Sonra anasayfaysa ekle
    if (isHomePage()) {
        setTimeout(() => {
            waitAndAddSections();
        }, 100);
    }
}

// Link tıklamalarını yakala (anında kaldırmak için)
document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (link && link.href && link.href.startsWith(window.location.origin)) {
        // Site içi link tıklandı - anında kaldır
        removeCustomSections();
    }
});

// DOM hazır olduğunda çalıştır
function waitAndAddSections() {
    if (!isHomePage()) {
        removeCustomSections();
        return;
    }
    
    const sliderDiv = document.querySelector('.l2--top.top-banner-section');
    
    if (sliderDiv) {
        addCustomSections();
    } else {
        setTimeout(waitAndAddSections, 500);
    }
}

// İlk yükleme
waitAndAddSections();

// URL değişikliklerini izle (SPA için)
window.addEventListener('popstate', handlePageChange);

// History API değişikliklerini izle
const originalPushState = history.pushState;
history.pushState = function() {
    removeCustomSections(); // Önce kaldır
    originalPushState.apply(this, arguments);
    setTimeout(handlePageChange, 50);
};

const originalReplaceState = history.replaceState;
history.replaceState = function() {
    removeCustomSections(); // Önce kaldır
    originalReplaceState.apply(this, arguments);
    setTimeout(handlePageChange, 50);
};
