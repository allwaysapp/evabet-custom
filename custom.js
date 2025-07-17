// Font Awesome yükle
if (!document.querySelector('link[href*="fontawesome"]')) {
    const faLink = document.createElement('link');
    faLink.rel = 'stylesheet';
    faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(faLink);
}

// Icon ekleme fonksiyonu
function addMenuIcons() {
    const spans = document.querySelectorAll('a.menu--block-item span.tb--menu-item_text');
    console.log('GitHub kodundan çalışıyor, span sayısı:', spans.length);
    
    spans.forEach(span => {
        if (!span.querySelector('i')) {
            const text = span.textContent.trim();
            if (text === 'BONUS TALEP') span.innerHTML = '<i class="fas fa-gift"></i> ' + text;
            if (text === 'EVA TV') span.innerHTML = '<i class="fas fa-tv"></i> ' + text;
            if (text === 'EVA ÇARK') span.innerHTML = '<i class="fas fa-dharmachakra"></i> ' + text;
            if (text === 'WHATSAPP') span.innerHTML = '<i class="fab fa-whatsapp"></i> ' + text;
        }
    });
}

// DOM hazır olana kadar bekle
function waitAndAdd() {
    const menuCount = document.querySelectorAll('a.menu--block-item').length;
    console.log('GitHub kodu çalışıyor, menu sayısı:', menuCount);
    
    if (menuCount > 0) {
        addMenuIcons();
    } else {
        setTimeout(waitAndAdd, 200);
    }
}

waitAndAdd();
