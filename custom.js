function isHomePage() {
    const url = window.location.pathname;
    return url === '/' || 
           url === '/tr/' || 
           url === '/tr' || 
           url === '/en/' || 
           url === '/en';
}

function removeCustomSections() {
    const existingSection1 = document.querySelector('.custom-section1');
    const existingSection2 = document.querySelector('.custom-section2');
    const existingSection3 = document.querySelector('.custom-section3');
    const existingBadges = document.querySelectorAll('.evabet-badge-link');
    const existingFooterHeader = document.querySelector('.footer-header-section');
    
    if (existingSection1) {
        existingSection1.remove();
    }
    
    if (existingSection2) {
        existingSection2.remove();
    }
    
    if (existingSection3) {
        existingSection3.remove();
    }
    
    if (existingFooterHeader) {
        existingFooterHeader.remove();
    }
    
    existingBadges.forEach(badge => badge.remove());
}

function spaNavigate(url) {
    history.pushState(null, null, url);
    window.dispatchEvent(new PopStateEvent('popstate', { state: null }));
    
    setTimeout(() => {
        removeCustomSections();
        setTimeout(() => {
            waitAndAddSections();
        }, 50);
    }, 100);
}

function addCustomSection1() {
    if (!isHomePage()) {
        return;
    }
    
    const sliderDiv = document.querySelector('.l2--top.top-banner-section');
    
    if (!sliderDiv) {
        return;
    }
    
    if (document.querySelector('.custom-section1')) {
        return;
    }
    
    const customSection1 = document.createElement('div');
    customSection1.className = 'custom-section1';
    
    const images = [
        { name: 'Para Yatır', url: 'https://raw.githubusercontent.com/allwaysapp/evabet-custom/refs/heads/main/para%20yat%C4%B1r%20kopya.webp', link: '/popup/cashier' },
        { name: 'Para Çek', url: 'https://raw.githubusercontent.com/allwaysapp/evabet-custom/refs/heads/main/para%20%C3%A7ek%20kopya.webp', link: '/popup/withdrawal' },
        { name: 'Canlı Maç', url: 'https://raw.githubusercontent.com/allwaysapp/evabet-custom/refs/heads/main/canl%C4%B1%20ma%C3%A7%20kopya.webp', link: '/sport/live' },
        { name: 'Canlı Casino', url: 'https://raw.githubusercontent.com/allwaysapp/evabet-custom/refs/heads/main/canl%C4%B1%20casino%20kopya.webp', link: '/livecasino/All/' },
        { name: 'En İyi Slotlar', url: 'https://raw.githubusercontent.com/allwaysapp/evabet-custom/refs/heads/main/en%20iyi%20slotlar%20kopya.webp', link: '/casino-lobby/All/' },
        { name: 'Eva Çark', url: 'https://raw.githubusercontent.com/allwaysapp/evabet-custom/refs/heads/main/eva%20%C3%A7ark%20kopya.webp', link: '/pages/eva-cark' },
        { name: 'Eva Promosyonlar', url: 'https://raw.githubusercontent.com/allwaysapp/evabet-custom/refs/heads/main/eva%20promosyonlar%20kopya.webp', link: '/promotions' },
        { name: 'Bonus Talep', url: 'https://raw.githubusercontent.com/allwaysapp/evabet-custom/refs/heads/main/bonus%20talep%20kopya.webp', link: '/pages/eva-bonus' }
    ];
    
    images.forEach(image => {
        const linkElement = document.createElement('a');
        linkElement.href = 'javascript:void(0)';
        linkElement.className = 'custom-section1-link';
        
        linkElement.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            
            if (image.link.startsWith('http')) {
                window.open(image.link, '_blank', 'noopener,noreferrer');
            } else {
                spaNavigate(image.link);
            }
        });
        
        const imgElement = document.createElement('img');
        imgElement.src = image.url;
        imgElement.alt = image.name;
        imgElement.className = 'custom-section1-item';
        
        linkElement.appendChild(imgElement);
        customSection1.appendChild(linkElement);
    });
    
    sliderDiv.insertAdjacentElement('afterend', customSection1);
}

function addCustomSection2() {
    if (!isHomePage()) {
        return;
    }
    
    const section1 = document.querySelector('.custom-section1');
    
    if (!section1) {
        return;
    }
    
    if (document.querySelector('.custom-section2')) {
        return;
    }
    
    const customSection2 = document.createElement('div');
    customSection2.className = 'custom-section2';
    
    const socialImages = [
        { 
            name: 'Telegram', 
            url: 'https://raw.githubusercontent.com/allwaysapp/evabet-custom/refs/heads/main/telegram.webp', 
            link: 'https://t.me/evadestekresmi' 
        },
        { 
            name: 'WhatsApp', 
            url: 'https://raw.githubusercontent.com/allwaysapp/evabet-custom/refs/heads/main/whatsapp.webp', 
            link: 'https://wa.me/31626047998' 
        }
    ];
    
    socialImages.forEach(image => {
        const linkElement = document.createElement('a');
        linkElement.href = 'javascript:void(0)';
        linkElement.className = 'custom-section2-link';
        
        linkElement.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            window.open(image.link, '_blank', 'noopener,noreferrer');
        });
        
        const imgElement = document.createElement('img');
        imgElement.src = image.url;
        imgElement.alt = image.name;
        imgElement.className = 'custom-section2-item';
        
        linkElement.appendChild(imgElement);
        customSection2.appendChild(linkElement);
    });
    
    section1.insertAdjacentElement('afterend', customSection2);
}

function openComm100Chat() {
    if (!window.Comm100API) {
        var Comm100API = Comm100API || {chat_buttons: []};
        Comm100API.chat_buttons.push({
            code_plan: "bb5232ba-db0e-4331-b300-1238a842937f",
            div_id: "comm100-button-bb5232ba-db0e-4331-b300-1238a842937f"
        });
        
        window.Comm100API = Comm100API;
        
        if (!document.getElementById('comm100-button-bb5232ba-db0e-4331-b300-1238a842937f')) {
            const div = document.createElement('div');
            div.id = 'comm100-button-bb5232ba-db0e-4331-b300-1238a842937f';
            div.style.display = 'none';
            document.body.appendChild(div);
        }
    }
    
    setTimeout(() => {
        if (window.Comm100API && window.Comm100API.do) {
            window.Comm100API.do('livechat.button.click');
        }
    }, 500);
}

function addCustomSection3() {
    if (!isHomePage()) {
        return;
    }
    
    const footerContainer = document.querySelector('.footer-container');
    
    if (!footerContainer) {
        return;
    }
    
    if (document.querySelector('.custom-section3')) {
        return;
    }
    
    const customSection3 = document.createElement('div');
    customSection3.className = 'custom-section3';
    
    const bottomImages = [
        { name: 'Yatırım Çekim', url: 'https://raw.githubusercontent.com/allwaysapp/evabet-custom/refs/heads/main/yatirim-cekim-bottom.webp', link: '/popup/cashier' },
        { name: 'Yüksek Oran', url: 'https://raw.githubusercontent.com/allwaysapp/evabet-custom/refs/heads/main/yuksek-oran-bottom.webp', link: '/sport' },
        { name: 'Promosyonlar', url: 'https://raw.githubusercontent.com/allwaysapp/evabet-custom/refs/heads/main/promosyonlar-bottom.webp', link: '/promotions' },
        { name: 'Canlı Destek', url: 'https://raw.githubusercontent.com/allwaysapp/evabet-custom/refs/heads/main/canl%C4%B1-destek-bottom.webp', link: 'comm100-chat' }
    ];
    
    bottomImages.forEach(image => {
        const linkElement = document.createElement('a');
        linkElement.href = 'javascript:void(0)';
        linkElement.className = 'custom-section3-link';
        
        linkElement.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            
            if (image.link === 'comm100-chat') {
                openComm100Chat();
            } else if (image.link.startsWith('http')) {
                window.open(image.link, '_blank', 'noopener,noreferrer');
            } else {
                spaNavigate(image.link);
            }
        });
        
        const imgElement = document.createElement('img');
        imgElement.src = image.url;
        imgElement.alt = image.name;
        imgElement.className = 'custom-section3-item';
        
        linkElement.appendChild(imgElement);
        customSection3.appendChild(linkElement);
    });
    
    footerContainer.insertAdjacentElement('beforebegin', customSection3);
}

function addBadgesToSeal(retryCount = 0) {
    const maxRetries = 15;
    
    if (retryCount >= maxRetries) {
        return;
    }
    
    const anjDiv = document.querySelector('#anj-0258d931-1563-4a3b-a522-851c1c24e41e');
    
    if (!anjDiv) {
        setTimeout(() => addBadgesToSeal(retryCount + 1), 200);
        return;
    }
    
    const checkLicenseLoaded = () => {
        const licenseImg = anjDiv.querySelector('img');
        
        if (!licenseImg || !licenseImg.complete) {
            setTimeout(checkLicenseLoaded, 200);
            return;
        }
        
        if (document.querySelector('.evabet-badge-link')) {
            return;
        }
        
        const dmcaBadge = {
            name: 'DMCA Badge',
            url: 'https://raw.githubusercontent.com/allwaysapp/evabet-custom/refs/heads/main/dmca-badge.png',
            link: 'https://www.dmca.com/'
        };
        
        const dmcaLinkElement = document.createElement('a');
        dmcaLinkElement.href = dmcaBadge.link;
        dmcaLinkElement.className = 'evabet-badge-link';
        dmcaLinkElement.target = '_blank';
        dmcaLinkElement.rel = 'noopener noreferrer';
        
        const dmcaImgElement = document.createElement('img');
        dmcaImgElement.src = dmcaBadge.url;
        dmcaImgElement.alt = dmcaBadge.name;
        dmcaImgElement.className = 'evabet-badge-item';
        
        dmcaLinkElement.appendChild(dmcaImgElement);
        anjDiv.insertBefore(dmcaLinkElement, anjDiv.firstChild);
        
        const begambleBadge = {
            name: 'BeGamble Badge',
            url: 'https://raw.githubusercontent.com/allwaysapp/evabet-custom/refs/heads/main/begamble.png',
            link: 'https://www.begambleaware.org/'
        };
        
        const begambleLinkElement = document.createElement('a');
        begambleLinkElement.href = begambleBadge.link;
        begambleLinkElement.className = 'evabet-badge-link';
        begambleLinkElement.target = '_blank';
        begambleLinkElement.rel = 'noopener noreferrer';
        
        const begambleImgElement = document.createElement('img');
        begambleImgElement.src = begambleBadge.url;
        begambleImgElement.alt = begambleBadge.name;
        begambleImgElement.className = 'evabet-badge-item';
        
        begambleLinkElement.appendChild(begambleImgElement);
        anjDiv.appendChild(begambleLinkElement);
    };
    
    checkLicenseLoaded();
}

function addFooterHeader(retryCount = 0) {
    const maxRetries = 15;
    
    if (retryCount >= maxRetries) {
        return;
    }
    
    const footerDiv = document.querySelector('.footer');
    
    if (!footerDiv) {
        setTimeout(() => addFooterHeader(retryCount + 1), 200);
        return;
    }
    
    if (document.querySelector('.footer-header-section')) {
        return;
    }
    
    const footerHeaderContainer = document.createElement('div');
    footerHeaderContainer.className = 'footer-header-section';
    
    const footerHeaderImg = document.createElement('img');
    footerHeaderImg.src = 'https://github.com/allwaysapp/evabet-custom/blob/main/footer-rewards.png?raw=true';
    footerHeaderImg.alt = 'Footer Rewards';
    footerHeaderImg.className = 'footer-header-item';
    
    footerHeaderContainer.appendChild(footerHeaderImg);
    footerDiv.insertBefore(footerHeaderContainer, footerDiv.firstChild);
}

function fixGridLayout(retryCount = 0) {
    const maxRetries = 15;
    
    if (retryCount >= maxRetries) {
        return;
    }
    
    const widgetContainer = document.querySelector('.tb--widget-container');
    
    if (!widgetContainer) {
        setTimeout(() => fixGridLayout(retryCount + 1), 200);
        return;
    }
    
    const gridDiv = widgetContainer.firstElementChild;
    
    if (!gridDiv) {
        setTimeout(() => fixGridLayout(retryCount + 1), 200);
        return;
    }
    
    gridDiv.style.display = 'flex';
    gridDiv.style.flexDirection = 'column';
    gridDiv.style.gap = '12px';
    gridDiv.style.gridTemplateColumns = '';
    gridDiv.style.gridTemplateRows = '';
}

function addCustomSections() {
    if (isHomePage()) {
        addCustomSection1();
        addCustomSection2();
        addCustomSection3();
    }
    
    addBadgesToSeal();
    addFooterHeader();
    fixGridLayout();
}

function handlePageChange() {
    removeCustomSections();
    setTimeout(() => {
        waitAndAddSections();
    }, 100);
}

document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (link && link.href && link.href.startsWith(window.location.origin)) {
        removeCustomSections();
    }
});

function waitAndAddSections() {
    if (isHomePage()) {
        const sliderDiv = document.querySelector('.l2--top.top-banner-section');
        if (sliderDiv) {
            addCustomSections();
        } else {
            setTimeout(waitAndAddSections, 500);
        }
    } else {
        addBadgesToSeal();
        addFooterHeader();
        fixGridLayout();
    }
}

waitAndAddSections();

window.addEventListener('popstate', handlePageChange);

const originalPushState = history.pushState;
history.pushState = function() {
    removeCustomSections();
    originalPushState.apply(this, arguments);
    setTimeout(handlePageChange, 50);
};

const originalReplaceState = history.replaceState;
history.replaceState = function() {
    removeCustomSections();
    originalPushState.apply(this, arguments);
    setTimeout(handlePageChange, 50);
};
