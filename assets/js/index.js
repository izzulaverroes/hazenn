document.querySelectorAll('[animation]').forEach(element => {
    const animation = element.getAttribute('animation');
    element.style.setProperty('--animation-custom', animation);
});
document.querySelectorAll('[vh]').forEach(element => {
    const height = element.getAttribute('vh');
    element.style.setProperty('--custom-vh', height);
});
document.querySelectorAll('[fs]').forEach(element => {
    const size = element.getAttribute('fs');
    element.style.setProperty('--custom-fs', size);
});
document.querySelectorAll('[hover]').forEach(element => {
    const color = element.getAttribute('hover');
    element.style.setProperty('--custom-hover', color);
});

let links = document.querySelectorAll('[type=link]');
let cursor = document.querySelector('.cursor');
let cursorO = document.querySelector('.cursor-outline');
window.addEventListener('mousemove', (e) => {

    const posX = e.clientX;
    const posY = e.clientY;

    cursor.style.left = `${posX}px`;
    cursor.style.top = `${posY}px`;

    cursorO.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 700, fill: "forwards" })

    links.forEach(link => {
        link.addEventListener("mouseenter", () => {
            cursor.classList.add("hover");
            cursorO.classList.add("hoverO");
        })
        link.addEventListener("mouseleave", () => {
            cursor.classList.remove("hover");
            cursorO.classList.remove("hoverO");
        })
    })
})
