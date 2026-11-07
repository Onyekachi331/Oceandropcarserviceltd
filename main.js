// Shared car drawing (used by every page)
document.body.insertAdjacentHTML('afterbegin', `
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="car" viewBox="0 0 400 150">
    <path d="M20 100c0-12 6-20 18-22l52-10 44-34c6-5 12-7 20-7h104c10 0 18 4 25 11l30 28 44 8c14 3 23 12 23 26v6c0 4-3 7-7 7H27c-4 0-7-3-7-7z" fill="#1fb5c9"/>
    <path d="M146 40l-34 28h86V33h-30c-8 0-15 3-22 7zm70-7v35h92l-26-26c-5-6-11-9-19-9z" fill="#eef4f6" opacity=".9"/>
    <g class="wheel"><circle cx="105" cy="112" r="26" fill="#071b28"/><circle cx="105" cy="112" r="11" fill="#9cb8c2"/></g>
    <g class="wheel"><circle cx="305" cy="112" r="26" fill="#071b28"/><circle cx="305" cy="112" r="11" fill="#9cb8c2"/></g>
  </symbol>
</svg>`);

// Header turns solid on scroll
const header = document.getElementById('top');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu
const btn = document.querySelector('.menu-btn'),
    menu = document.getElementById('menu');
btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', false);
}));

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
        }
    });
}, { threshold: .15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

const yr = document.getElementById('yr');
if (yr) yr.textContent = new Date().getFullYear();

// Loading screen: show the logo for 4 seconds, then reveal the page
(function() {
    const pl = document.getElementById('preloader');
    if (!pl) return;
    document.body.classList.add('is-loading');
    setTimeout(() => {
        pl.classList.add('hide');
        document.body.classList.remove('is-loading');
        setTimeout(() => pl.remove(), 400);
    }, 2000);
})();

// Light / dark theme toggle (choice is remembered in the browser)
(function() {
    const root = document.documentElement;
    const tbtn = document.querySelector('.theme-btn');
    if (!tbtn) return;
    const label = () => {
        const txt = root.getAttribute('data-theme') === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
        tbtn.setAttribute('aria-label', txt);
        tbtn.title = txt;
    };
    label();
    tbtn.addEventListener('click', () => {
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.classList.add('theme-anim');
        root.setAttribute('data-theme', next);
        try { localStorage.setItem('theme', next); } catch (e) {}
        label();
        setTimeout(() => root.classList.remove('theme-anim'), 450);
    });
})();

// Welcome greeting based on the visitor's local time
(function() {
    const h = new Date().getHours();
    let g = 'Good evening',
        icon = '\u{1F319}';
    if (h >= 5 && h < 12) { g = 'Good morning'; icon = '\u2600\uFE0F'; }
    else if (h >= 12 && h < 17) { g = 'Good afternoon'; icon = '\u{1F324}\uFE0F'; }
    document.querySelectorAll('[data-greeting]').forEach(el => { el.textContent = 'Welcome, ' + g + ' ' + icon; });
})();
