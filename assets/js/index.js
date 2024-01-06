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

let links = document.querySelectorAll('a');
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

const burgerNavElements = document.querySelectorAll('[burger-nav-name]');
const modal = document.getElementById('modal');

// Function to update the modal text based on the custom attribute
function updateModalText(event) {
    const burgerNavName = event.target.getAttribute('burger-nav-name');
    modal.textContent = burgerNavName;
    modal.classList.add('burger-nav-active')
    
}

// Function to hide the modal when the user stops hovering
function hideModal() {
    modal.classList.remove('burger-nav-active')
}

// Attach event listeners to each burger nav element
burgerNavElements.forEach(element => {
    element.addEventListener('mouseover', updateModalText);
    element.addEventListener('mouseout', hideModal);
});

// Loading
window.addEventListener('load', () => {
    document.querySelector('.loader').classList.add('d-none');

    document.querySelector('.loader').addEventListener('transitionend', () => {
        document.body.removeChild(document.querySelector('.loader'))
    })
})