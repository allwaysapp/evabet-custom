
const fontAwesome = document.createElement('link');
fontAwesome.rel = 'stylesheet';
fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
document.head.appendChild(fontAwesome);


function addIcons() {
    document.querySelectorAll('a.menu--block-item span.tb--menu-item_text').forEach(span => {
        if (!span.querySelector('i')) {
            const text = span.textContent.trim();
            if (text === 'BONUS TALEP') span.innerHTML = '<i class="fas fa-gift"></i> ' + text;
            if (text === 'EVA TV') span.innerHTML = '<i class="fas fa-tv"></i> ' + text;
            if (text === 'EVA ÇARK') span.innerHTML = '<i class="fas fa-dharmachakra"></i> ' + text;
            if (text === 'WHATSAPP') span.innerHTML = '<i class="fab fa-whatsapp"></i> ' + text;
        }
    });
}


addIcons();


new MutationObserver(addIcons).observe(document.body, {childList: true, subtree: true});
