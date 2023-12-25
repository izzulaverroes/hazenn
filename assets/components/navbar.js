const V = document.title;
const mappings = {
    "Home | CyberHazen™": {
        home: "#",
        about: "../about",
        product: "menu",
        news: "news",
        login: "login",
        cartVisibility: "disactive",
        profile: "profile"
    }
};

const {
    home,
    about,
    product,
    news,
    login,
    cartVisibility,
    profile
} = mappings[V] || {};

const navbarBox = document.querySelector('header');
let navbar = document.createElement('nav');
navbar.innerHTML =
    `
    <div
        class="container d-flex align-items-center justify-content-between justify-content-lg-center w-100 gap-lg-4">
        <a href="${home}">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="25" viewBox="0 0 21 25" fill="none">
                <path
                    d="M2 0C3.10457 4.82823e-08 4 0.895431 4 2L4 23C4 24.1046 3.10457 25 2 25C0.89543 25 -4.82823e-08 24.1046 0 23L9.17939e-07 2C9.66221e-07 0.89543 0.895431 -4.82823e-08 2 0Z"
                    fill="var(--white)" />
                <path
                    d="M19 0C20.1046 4.82823e-08 21 0.895431 21 2L21 23C21 24.1046 20.1046 25 19 25C17.8954 25 17 24.1046 17 23V2C17 0.89543 17.8954 -4.82823e-08 19 0Z"
                    fill="var(--white)" />
                <path
                    d="M9.4658 10.6773C8.33266 11.2579 7.88472 12.6471 8.46531 13.7802C9.0459 14.9134 10.4352 15.3613 11.5683 14.7807C12.7014 14.2001 13.1494 12.8109 12.5688 11.6777C11.9882 10.5446 10.5989 10.0967 9.4658 10.6773Z"
                    fill="var(--white)" />
            </svg>
        </a>
        <ul class=" d-flex gap-4 ">
            <li><a href="#" class="text-decoration-none nav-hover" animated>Home</a></li>
            <li><a href="../shop/" class="text-decoration-none nav-hover" animated>Store</a></li>
            <li><a href="../hbook/" class="text-decoration-none nav-hover" animated>HazenBook</a></li>
            <li><a href="../shop/" class="text-decoration-none nav-hover" animated>HPhone</a></li>
            <li><a href="../shop/" class="text-decoration-none nav-hover" animated>HTab</a></li>
            <li><a href="../shop/" class="text-decoration-none nav-hover" animated>HWatch</a></li>
            <li><a href="../shop/" class="text-decoration-none nav-hover" animated>HBuds</a></li>
            <li><a href="../shop/" class="text-decoration-none nav-hover" animated>Gaming Zone</a></li>
            <li><a href="../support/" class="text-decoration-none nav-hover" animated>Support</a></li>
            <li><a href="${about}" class="text-decoration-none nav-hover" animated>About</a></li>
            <li><a href="../auth/register/" class="text-decoration-none nav-hover" animated>Sign up</a></li>
        </ul>
        <div class="d-flex gap-3">
            <li><a href="../auth/register/" class="text-decoration-none nav-hover" animated><i
                        class="fa-regular fa-search"></i></a></li>
            <li><a href="../auth/register/" class="text-decoration-none nav-hover" animated><i
                        class="fa-regular fa-shopping-bag"></i></a></li>
        </div>
    </div>
`;
navbarBox.appendChild(navbar);
