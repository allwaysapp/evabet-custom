if (!document.querySelector('link[href*="fontawesome"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(link);
}

(function() {
    const menuLinks = document.querySelectorAll('a.menu--block-item');
    
    menuLinks.forEach(link => {
        const span = link.querySelector('span.tb--menu-item_text');
        if (span) {
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
})();
