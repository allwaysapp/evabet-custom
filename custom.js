// Font Awesome yükle
if (!document.querySelector('link[href*="fontawesome"]')) {
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(fontAwesome);
}

// Icon ekleme fonksiyonu
function addMenuIcons() {
    const menuLinks = document.querySelectorAll('a.menu--block-item');
    
    menuLinks.forEach(link => {
        const span = link.querySelector('span.tb--menu-item_text');
        if (span && !span.querySelector('i')) { // Zaten icon varsa ekleme
            const text = span.textContent.trim();
            let icon = '';
            
            switch(text) {
                case 'BONUS TALEP':
                    icon = '<i class="fas fa-gift"></i> ';
                    break;
                case 'EVA TV':
                    icon = '<i class="fas fa-tv"></i> ';
                    break;
                case 'EVA ÇARK':
                    icon = '<i class="fas fa-dharmachakra"></i> ';
                    break;
                case 'WHATSAPP':
                    icon = '<i class="fab fa-whatsapp"></i> ';
                    break;
            }
            
            if (icon) {
                span.innerHTML = icon + text;
            }
        }
    });
}

// Hemen çalıştır
addMenuIcons();

// DOM değişikliklerini izle
const observer = new MutationObserver(() => {
    addMenuIcons();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Sayfa yüklendiğinde de çalıştır
window.addEventListener('load', addMenuIcons);

// Font Awesome yüklendikten sonra da çalıştır
setTimeout(addMenuIcons, 1000);
setTimeout(addMenuIcons, 2000);
