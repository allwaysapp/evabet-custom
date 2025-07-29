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
    const existingBadges = document.querySelectorAll('.evabet-badge-link');
    const existingProvider = document.querySelector('.provider-image-section');
    const existingFooterHeader = document.querySelector('.footer-header-section');
    
    if (existingSection1) {
        existingSection1.remove();
    }
    
    if (existingSection2) {
        existingSection2.remove();
    }
    
    if (existingProvider) {
        existingProvider.remove();
    }
    
    if (existingFooterHeader) {
        existingFooterHeader.remove();
    }
    
    existingBadges.forEach(badge => badge.remove());
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
        { name: 'Eva Çark', url: 'https://raw.githubusercontent.com/allwaysapp/evabet-custom/refs/heads/main/eva%20%C3%A7ark%20kopya.webp', link: 'https://evacark.com/' },
        { name: 'Eva Promosyonlar', url: 'https://raw.githubusercontent.com/allwaysapp/evabet-custom/refs/heads/main/eva%20promosyonlar%20kopya.webp', link: '/promotions' },
        { name: 'Bonus Talep', url: 'https://raw.githubusercontent.com/allwaysapp/evabet-custom/refs/heads/main/bonus%20talep%20kopya.webp', link: 'https://www.evabonus.com/' }
    ];
    
    images.forEach(image => {
        const linkElement = document.createElement('a');
        linkElement.href = image.link;
        linkElement.className = 'custom-section1-link';
        
        if (image.link.startsWith('http')) {
            linkElement.target = '_blank';
            linkElement.rel = 'noopener noreferrer';
        }
        
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
        linkElement.href = image.link;
        linkElement.className = 'custom-section2-link';
        linkElement.target = '_blank';
        linkElement.rel = 'noopener noreferrer';
        
        const imgElement = document.createElement('img');
        imgElement.src = image.url;
        imgElement.alt = image.name;
        imgElement.className = 'custom-section2-item';
        
        linkElement.appendChild(imgElement);
        customSection2.appendChild(linkElement);
    });
    
    section1.insertAdjacentElement('afterend', customSection2);
}

function addBadgesToSeal() {
    const anjDiv = document.querySelector('#anj-0258d931-1563-4a3b-a522-851c1c24e41e');
    
    if (!anjDiv) {
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

function addProviderImage() {
    const footerMenuBlock = document.querySelector('.footer-menu-block.f-row');
    
    if (!footerMenuBlock) {
        return;
    }
    
    if (document.querySelector('.provider-image-section')) {
        return;
    }
    
    const providerContainer = document.createElement('div');
    providerContainer.className = 'provider-image-section';
    
    const providerImg = document.createElement('img');
    providerImg.src = 'https://raw.githubusercontent.com/allwaysapp/evabet-custom/refs/heads/main/providers.webp';
    providerImg.alt = 'Game Providers';
    providerImg.className = 'provider-image-item';
    
    providerContainer.appendChild(providerImg);
    footerMenuBlock.insertAdjacentElement('afterend', providerContainer);
}

function addFooterHeader() {
    const footerDiv = document.querySelector('.footer');
    
    if (!footerDiv) {
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

function addCustomSections() {
    if (isHomePage()) {
        addCustomSection1();
        addCustomSection2();
    }
    
    addBadgesToSeal();
    addProviderImage();
    addFooterHeader();
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
        addProviderImage();
        addFooterHeader();
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
    originalReplaceState.apply(this, arguments);
    setTimeout(handlePageChange, 50);
};
