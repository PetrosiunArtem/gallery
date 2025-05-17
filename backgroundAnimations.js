const svg = document.getElementById('game');
const consoles = ['🕹️', '🎮', '👾', '📺', '🏆'];
let items = [];

function spawn() {
    const x = Math.random() * window.innerWidth;
    const el = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    el.setAttribute('x', x);
    el.setAttribute('y', -30);
    el.setAttribute('fill', `hsl(${Math.random() * 360},100%,50%)`);
    el.setAttribute('font-size', 24);
    el.textContent = consoles[Math.random() * consoles.length | 0];
    svg.appendChild(el);

    items.push({
        el, x,
        y: -30,
        speed: 2 + Math.random() * 3
    });

    setTimeout(spawn, 300);
}

function update() {
    items.forEach(item => {

        item.y += item.speed;
        item.el.setAttribute('y', item.y);

        if (item.y > innerHeight) {
            svg.removeChild(item.el);
            items = items.filter(i => i !== item);
        }
    });
    requestAnimationFrame(update);
}

document.onmousemove = e => {
    const mx = e.clientX, my = e.clientY;
    items.forEach(item => {
        if (2 * item.y >= window.innerHeight) {
            console.log()
            const rect = item.el.getBoundingClientRect();
            if (mx > rect.left && mx < rect.right &&
                my > rect.top && my < rect.bottom) {
                item.y -= 15;
                item.el.setAttribute('fill', '#fff');
            }
        }
    });
};
spawn();
update();
