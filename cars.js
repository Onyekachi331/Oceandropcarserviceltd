/* ------------------------------------------------------------------
   CAR STOCK: edit this list to match your real cars.
   image : path to the car photo, e.g. 'images/camry.jpg'.
           Put your photos in an "images" folder next to index.html.
           If the file is missing, a placeholder car is shown instead.
   images: (optional) extra photos of the same car. They play as a slideshow
           inside the car's picture box, e.g.
           images: ['images/camry-2.jpg', 'images/camry-3.jpg']
   make  : Toyota | Lexus | Honda | Mercedes-Benz  (add more if you like)
   type  : Sedan | SUV | Truck | Van
   price : number in Naira (no commas)
------------------------------------------------------------------- */
const CARS = [
    { make: 'Toyota', name: 'Toyota Camry 2019', image: 'toyota camry 2019.jpg', images: ['camry 1.jpg', 'camry 2.jpg'], type: 'Japan', trans: 'Automatic', cond: 'Foreign used', price: 75000000 },
    { make: 'Toyota', name: 'Toyota Hilux 2027', image: 'Toyota Hilux 2027.jpg', images: ['2027 hilux 3.jpg', '2027 hilux 4.jpg'], type: 'Brand New', trans: 'Manual', cond: 'Brand New', price: 65000000 },
    { make: 'Toyota', name: 'Toyota Landcruiser 2026', image: 'Toyota Landcruiser 2024.jpg', images: ['2026 landcruiser 1.jpg', '2026 landcruiser 2.jpg'], type: 'Twin Turbo', trans: 'VXR', cond: 'Foreign used', price: 124000000 },
    { make: 'Toyota', name: 'Toyota Prado 2026', image: 'toyota prado 2026.jpg', images: ['2026 prado 1.jpg', '2026 prado 2.jpg', '2026 prado 3.jpg'], type: 'Single Turbo', trans: '360 Camera Power Truck', cond: 'Brand New', price: 120000000 },
    { make: 'Toyota', name: 'Bullet Proof Toyota Landcruiser 2024', image: 'bulliet proof toyota landcruiser.jpg', images: ['2024 landcruiser 1.jpg', '2024 landcruiser 2.jpg', '2024 landcruiser 3.jpg'], type: 'VX.R', trans: 'Autobiography VIP', cond: 'Distress Sale', price: 200000000 },
    { make: 'Lexus', name: 'Lexus GX 550 2024', image: 'lexus gx550.jpg', images: ['lexus gx 1.jpg', 'lexus gx 2.jpg'], type: 'SUV', trans: 'Automatic', cond: 'Brand New', price: 172000000 },
    { make: 'Mercedes-Benz', name: 'Mercedes-Benz G-Wagon', image: 'mercedes benz g-wagon.jpg', images: ['g-wagon 1.jpg', 'g-wagon 2.jpg'], type: 'SUV', trans: 'Automatic', cond: 'Foreign used', price: 590000000 },
    { make: 'Mercedes-Benz', name: 'Mercedes Benz G-Class', image: 'mercedes benz g-class.jpg', images: ['g-class 1.jpg', 'g-class 2.jpg', 'g-class 3.jpg', 'g-class 4.jpg'], type: 'AMG', trans: 'Automatic', cond: 'Foreign used', price: 240000000 },
    { make: 'Toyota', name: 'Toyota Hilux 4x4', image: 'toyota hilux 4x4.jpg', images: ['hilux 4x4 1.jpg', 'hilux 4x4 2.jpg', 'hilux 4x4 3.jpg', 'hilux 4x4 4.jpg'], type: '4X4', trans: 'Double Cabin', cond: 'Nigerian used', price: 20000000 },
    { make: 'Rolls Royce', name: 'Rolls Royce Cullinan 2026', image: 'rolls royce.jpg', images: ['royce 1.jpg', 'images/royce 2.jpg', 'royce 3.jpg', 'royce 4.jpg', 'royce 5.jpg', 'royce 6.jpg', 'royce 7.jpg', 'royce 8.jpg'], type: 'Bullet Proof', trans: 'Automatic', cond: 'Brand New', price: 2300000000 },
    { make: 'Toyota', name: 'Toyota Camry Sedan 2025', image: 'toyota camry sedan.jpg', images: ['camry sedan 1.jpg', 'camry sedan 2.jpg', 'camry sedan 3.jpg', 'camry sedan 4.jpg'], type: 'Sedan', trans: 'Automatic', cond: 'Brand New', price: 35000000 },
    { make: 'Toyota', name: 'Toyota Hilux Revo 4x4', image: 'toyota hilux revo.jpg', images: ['hilux revo 1.jpg', 'hilux revo 2.jpg', 'hilux revo 3.jpg', 'hilux revo 4.jpg'], type: '4x4 Double Cabin', trans: 'Pickup', cond: 'Brand New', price: 76000000 },
    { make: 'Toyota', name: 'Toyota Urban Cruiser', image: 'toyota urban cruiser.jpg', images: ['urban cruiser 1.jpg', 'urban cruiser 2.jpg', 'urban cruiser 3.jpg', 'urban cruiser 4.jpg'], type: 'Compact SUV', trans: '4WD 2025', cond: 'Brand New', price: 57000000 },
    { make: 'Toyota', name: 'Toyota Coaster Bus', image: 'Toyota Coaster Bus.jpg', images: ['toyota coaster 1.jpg', 'toyota coaster 2.jpg', 'toyota coaster 3.jpg', 'toyota coaster 4.jpg'], type: 'Coaster Bus', trans: '2025/2026 Model', cond: 'Brand New', price: 130000000 },
    { make: 'Benz', name: 'Mercedes-Benz G900 Brabus', image: 'mercedes benz brabus.jpg', images: ['brabus 1.jpg', 'brabus 2.jpg', 'brabus 3.jpg', 'brabus 4.jpg'], type: 'Brabus Edition 2023', trans: 'G900', cond: 'Brand New', price: 320000000 },


];

const MAKES = ['Toyota', 'Lexus', 'Rolls Royce', 'Mercedes-Benz'];
const naira = n => '₦' + n.toLocaleString('en-NG');
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// Shown automatically when a car's image file is missing or fails to load
const PLACEHOLDER = 'data:image/svg+xml;utf8,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 150">' +
    '<path d="M20 100c0-12 6-20 18-22l52-10 44-34c6-5 12-7 20-7h104c10 0 18 4 25 11l30 28 44 8c14 3 23 12 23 26v6c0 4-3 7-7 7H27c-4 0-7-3-7-7z" fill="#1fb5c9"/>' +
    '<path d="M146 40l-34 28h86V33h-30c-8 0-15 3-22 7zm70-7v35h92l-26-26c-5-6-11-9-19-9z" fill="#eef4f6" opacity=".9"/>' +
    '<circle cx="105" cy="112" r="26" fill="#071b28"/><circle cx="105" cy="112" r="11" fill="#9cb8c2"/>' +
    '<circle cx="305" cy="112" r="26" fill="#071b28"/><circle cx="305" cy="112" r="11" fill="#9cb8c2"/></svg>');

function inBudget(price, b) {
    if (b === 'under') return price < 30000000;
    if (b === 'mid') return price >= 30000000 && price <= 100000000;
    if (b === 'above') return price > 100000000;
    return true;
}

/* Photo slideshow for one car card */
const galleryOf = c => {
    const all = [...new Set([c.image].concat(c.images || []).filter(Boolean))];
    return all.length ? all : [PLACEHOLDER];
};
let slideTimers = [];

function setupCardSlides(card, idx) {
    const imgs = [...card.querySelectorAll('.pic img.slide')];
    const dots = [...card.querySelectorAll('.pic-dots span')];
    let cur = 0;
    const live = () => imgs.map((_, j) => j).filter(j => !imgs[j].dataset.broken);
    const show = k => {
        cur = k;
        imgs.forEach((im, j) => im.classList.toggle('active', j === k));
        dots.forEach((d, j) => d.classList.toggle('on', j === k));
    };
    const move = dir => {
        const v = live();
        if (v.length < 2) return;
        show(v[(v.indexOf(cur) + dir + v.length) % v.length]);
    };

    imgs.forEach((img, j) => img.addEventListener('error', () => {
        if (img.dataset.fallback) return;
        const others = imgs.filter(o => o !== img && !o.dataset.broken);
        if (!others.length) { // nothing else to show: placeholder car
            img.dataset.fallback = '1';
            img.classList.add('ph');
            img.src = PLACEHOLDER;
            return;
        }
        img.dataset.broken = '1'; // bad file: skip it in the slideshow
        if (dots[j]) dots[j].style.display = 'none';
        if (cur === j) move(1);
        if (others.length < 2) card.classList.add('single');
    }));

    const [prev, next] = card.querySelectorAll('.pic-btn');
    if (!prev || !next) return;
    prev.addEventListener('click', () => move(-1));
    next.addEventListener('click', () => move(1));

    // Autoplay (staggered so cards don't all change together); pauses on hover/touch
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let paused = false;
    ['mouseenter', 'focusin', 'touchstart'].forEach(ev => card.addEventListener(ev, () => { paused = true; }, { passive: true }));
    ['mouseleave', 'focusout'].forEach(ev => card.addEventListener(ev, () => { paused = false; }));
    card.addEventListener('touchend', () => setTimeout(() => { paused = false; }, 4000), { passive: true });
    const start = setTimeout(() => {
        slideTimers.push(setInterval(() => { if (!paused && !document.hidden) move(1); }, 3500));
    }, (idx % 6) * 500);
    slideTimers.push(start);
}

/* Builds the make tabs + car grid inside #cars-app.
   opts.limit : max cars shown when nothing is filtered (index page) */
function initCatalog(opts = {}) {
    const grid = document.getElementById('car-grid');
    const tabsBox = document.getElementById('make-tabs');
    const note = document.getElementById('result-note');
    const more = document.getElementById('more-link');
    const selMake = document.getElementById('make');
    const selType = document.getElementById('type');
    const selBudget = document.getElementById('budget');
    if (!grid) return;

    const state = { make: 'all', type: 'all', budget: 'all' };

    // Tabs: one per make, with a count
    const tabDefs = [
        ['all', 'All cars', CARS.length]
    ].concat(
        MAKES.map(m => [m, m, CARS.filter(c => c.make === m).length]));
    tabsBox.innerHTML = tabDefs.map(([v, l, n]) =>
        `<button type="button" class="tab" data-make="${esc(v)}" aria-pressed="false">${esc(l)} <small>${n}</small></button>`).join('');

    function render() {
        slideTimers.forEach(t => {
            clearTimeout(t);
            clearInterval(t);
        });
        slideTimers = [];
        const list = CARS.filter(c =>
            (state.make === 'all' || c.make === state.make) &&
            (state.type === 'all' || c.type === state.type) &&
            inBudget(c.price, state.budget));
        const filtered = state.make !== 'all' || state.type !== 'all' || state.budget !== 'all';
        const shown = (opts.limit && !filtered) ? list.slice(0, opts.limit) : list;

        tabsBox.querySelectorAll('.tab').forEach(t =>
            t.setAttribute('aria-pressed', t.dataset.make === state.make));
        if (selMake) selMake.value = state.make;
        if (selType) selType.value = state.type;
        if (selBudget) selBudget.value = state.budget;

        if (!shown.length) {
            grid.innerHTML = `<div class="empty"><h3>No cars match that search</h3>
        <p>Try another make, body type or budget, or <a href="contact.html" style="text-decoration:underline">tell us what you want</a> and we will look for it.</p></div>`;
        } else {
            grid.innerHTML = shown.map((c, i) => `
        <article class="car${galleryOf(c).length < 2 ? ' single' : ''}" style="animation-delay:${i*60}ms">
          <div class="pic"><span class="badge">${esc(c.make)}</span>
            ${galleryOf(c).map((src, k, a) => `<img class="slide${k === 0 ? ' active' : ''}${src === PLACEHOLDER ? ' ph' : ''}" src="${esc(src)}" alt="${esc(c.name)}${a.length > 1 ? ' (photo ' + (k + 1) + ' of ' + a.length + ')' : ''}" width="400" height="260" loading="lazy">`).join('')}
            ${galleryOf(c).length > 1 ? `<button type="button" class="pic-btn prev" aria-label="Previous photo">&#8249;</button><button type="button" class="pic-btn next" aria-label="Next photo">&#8250;</button><div class="pic-dots" aria-hidden="true">${galleryOf(c).map((_, k) => `<span class="${k === 0 ? 'on' : ''}"></span>`).join('')}</div>` : ''}</div>
          <div class="info"><h3>${esc(c.name)}</h3>
            <p class="meta">${esc(c.type)} · ${esc(c.trans)} · ${esc(c.cond)}</p>
            <div class="row"><span class="price">${naira(c.price)}</span>
              <a href="contact.html?car=${encodeURIComponent(c.name)}#form">Enquire</a></div></div>
        </article>`).join('');
            // Start each card's photo slideshow (missing files fall back to a placeholder car)
            grid.querySelectorAll('.car').forEach((card, i) => setupCardSlides(card, i));
        }
        const label = state.make === 'all' ? 'cars' : state.make + ' cars';
        note.textContent = `Showing ${shown.length} of ${list.length} ${label}`;
        if (more) more.style.display = opts.limit ? '' : 'none';
    }

    tabsBox.addEventListener('click', e => {
        const b = e.target.closest('.tab');
        if (!b) return;
        state.make = b.dataset.make;
        render();
    });
    if (selMake) selMake.addEventListener('change', () => {
        state.make = selMake.value;
        render();
    });
    if (selType) selType.addEventListener('change', () => {
        state.type = selType.value;
        render();
    });
    if (selBudget) selBudget.addEventListener('change', () => {
        state.budget = selBudget.value;
        render();
    });

    const form = document.getElementById('finder-form');
    if (form) form.addEventListener('submit', e => {
        e.preventDefault();
        render();
        document.getElementById('cars').scrollIntoView({ behavior: 'smooth' });
    });

    // Allow links like menu.html?make=Lexus
    const q = new URLSearchParams(location.search);
    const qm = q.get('make');
    if (qm && MAKES.includes(qm)) state.make = qm;
    render();
}
