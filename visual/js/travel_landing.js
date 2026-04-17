$(document).ready(function() {
    $('.marquee').marquee({
    duration: 20000,
    gap: 24,
    direction: 'left',
    duplicated: true,
    pauseOnHover: true
    });
});

document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    });
});

AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

window.addEventListener('load', () => {
const nav = document.querySelector('.navbar');
const catBar = document.getElementById('categoryNavBar');
const updatePos = () => {
    if (!nav || !catBar) return;
    const navH = nav.getBoundingClientRect().height;
    if (window.scrollY > 50) {
    nav.classList.add('scrolled'); catBar.classList.add('scrolled'); catBar.style.top = (navH - 10) + 'px';
    } else {
    nav.classList.remove('scrolled'); catBar.classList.remove('scrolled'); catBar.style.top = (navH + 4) + 'px';
    }
};
window.addEventListener('scroll', updatePos);
updatePos();
});

(function() {
      const fill = document.querySelector('.tp-progress-fill');
      let width = 0;
      
      const interval = setInterval(() => {
        width += Math.random() * 10 + 2; 
        if (width > 92) width = 92; 
        if (fill) fill.style.width = width + '%';
      }, 300);

      window.addEventListener('load', () => {
        clearInterval(interval);
        if (fill) fill.style.width = '100%'; 
        setTimeout(() => {
          const preloader = document.getElementById('triply-preloader');
          if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => { preloader.style.visibility = 'hidden'; }, 600);
          }
        }, 500); 
      });
    })();