
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


addMenuIcons();


const observer = new MutationObserver(() => {
    addMenuIcons();
});


observer.observe(document.body, {
    childList: true,
    subtree: true
});


window.addEventListener('load', addMenuIcons);
