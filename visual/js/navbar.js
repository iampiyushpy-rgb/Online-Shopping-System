let mobileOpen = false;
let searchOpen = false;

function toggleSettings() {
    const panel = document.getElementById('settingsPanel');
    const button = document.getElementById('settingsBtn');
    if (!panel) return;
    const isOpen = !panel.classList.contains('open');
    panel.classList.toggle('open', isOpen);
    button?.classList.toggle('active', isOpen);
    if (isOpen) {
        closeMobile();
        closeSearch();
    }
}

function toggleSetting(id) {
    const element = document.getElementById('toggle-' + id);
    element?.classList.toggle('on');
}

function closeSettings() {
    document.getElementById('settingsPanel')?.classList.remove('open');
    document.getElementById('settingsBtn')?.classList.remove('active');
}

function toggleMobile() {
    const panel = document.getElementById('mobilePanel');
    const backdrop = document.getElementById('navBackdrop');
    if (!panel) return;
    mobileOpen = !mobileOpen;
    panel.classList.toggle('open', mobileOpen);
    backdrop?.classList.toggle('active', mobileOpen);
    if (mobileOpen) {
        closeSettings();
        closeSearch();
        panel.style.display = 'flex';
    } else {
        setTimeout(() => {
            if (!mobileOpen) panel.style.display = 'none';
        }, 350);
    }
}

function closeMobile() {
    const panel = document.getElementById('mobilePanel');
    const backdrop = document.getElementById('navBackdrop');
    mobileOpen = false;
    if (panel) panel.classList.remove('open');
    backdrop?.classList.remove('active');
    setTimeout(() => {
        if (!mobileOpen && panel) panel.style.display = 'none';
    }, 350);
}

function closeAll() {
    closeMobile();
    closeSettings();
    document.getElementById('navBackdrop')?.classList.remove('active');
}

function toggleSearch() {
    const overlay = document.getElementById('searchOverlay');
    const backdrop = document.getElementById('navBackdrop');
    if (!overlay) return;
    searchOpen = !searchOpen;
    overlay.classList.toggle('active', searchOpen);
    backdrop?.classList.toggle('active', searchOpen);
    if (searchOpen) {
        closeMobile();
        closeSettings();
        setTimeout(() => document.getElementById('searchInput')?.focus(), 300);
    }
}

function clearNavSearch() {
    const input = document.getElementById('navSearchInput');
    if (input) input.value = '';
    document.getElementById('navSearchClear')?.classList.remove('visible');
}

function updateSearchClear() {
    const input = document.getElementById('navSearchInput');
    const clearBtn = document.getElementById('navSearchClear');
    if (!input || !clearBtn) return;
    clearBtn.classList.toggle('visible', input.value.trim().length > 0);
}

function updateCatFades() {
    const catScroll = document.getElementById('category-filters');
    const catWrap = document.getElementById('catOverflowWrap');
    if (!catScroll || !catWrap) return;
    const { scrollLeft, scrollWidth, clientWidth } = catScroll;
    catWrap.classList.toggle('show-left', scrollLeft > 8);
    catWrap.classList.toggle('hide-right', scrollLeft + clientWidth >= scrollWidth - 8);
}

function updateNavbarAuthState() {
    const user = JSON.parse(localStorage.getItem('pbssd_user'));
    const loginNav = document.getElementById('login-nav-btn');
    const profileNav = document.getElementById('user-profile-btn');
    const loginNavMobile = document.getElementById('login-nav-btn-mobile');
    const profileNavMobile = document.getElementById('user-profile-btn-mobile');
    const nameDesktop = document.getElementById('user-nav-name');
    const nameMobile = document.getElementById('user-nav-name-mobile');
    const photo = document.getElementById('user-nav-photo');

    if (user) {
        loginNav?.classList.add('d-none');
        loginNavMobile?.classList.add('d-none');
        profileNav?.classList.remove('d-none');
        profileNavMobile?.classList.remove('d-none');
        if (nameDesktop) nameDesktop.innerText = user.name || 'Profile';
        if (nameMobile) nameMobile.innerText = user.name || 'Profile';
        if (photo && user.photo) {
            photo.src = user.photo;
            photo.style.display = 'inline-block';
        }
    } else {
        loginNav?.classList.remove('d-none');
        loginNavMobile?.classList.remove('d-none');
        profileNav?.classList.add('d-none');
        profileNavMobile?.classList.add('d-none');
        if (nameDesktop) nameDesktop.innerText = 'Profile';
        if (nameMobile) nameMobile.innerText = 'Profile';
        if (photo) photo.style.display = 'none';
    }
}

window.addEventListener('resize', updateCatFades);
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    const catBar = document.getElementById('categoryNavBar');
    if (!nav || !catBar) return;
    const navH = nav.getBoundingClientRect().height;
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
        catBar.classList.add('scrolled');
        catBar.style.top = `${navH - 10}px`;
    } else {
        nav.classList.remove('scrolled');
        catBar.classList.remove('scrolled');
        catBar.style.top = `${navH + 4}px`;
    }
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeAll();
});

window.addEventListener('storage', updateNavbarAuthState);
window.addEventListener('DOMContentLoaded', () => {
    updateCatFades();
    updateSearchClear();
    updateNavbarAuthState();
    const nav = document.querySelector('.navbar');
    const catBar = document.getElementById('categoryNavBar');
    if (nav && catBar) {
        catBar.style.top = `${nav.getBoundingClientRect().height + 4}px`;
    }
    document.getElementById('navSearchInput')?.addEventListener('input', updateSearchClear);
});
