const V = document.title;
const mappings = {
    "Hazen": {
        home: "#",
        about: "../about",
        product: "../menu",
        news: "../news",
        login: "../login",
        cartVisibility: "../disactive",
        profile: "../profile"
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

const navbarBox = document.querySelector('nav');
let navbar = document.createElement('div');
navbar.innerHTML =
    ` 
    <div class="burger">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <ul class="nav-items list-none mt-4 text-center" style="font-size: 1.2rem;" burger-item>
        <li class="mb-3 ">
            <a href="#">
                <i class="fa-regular fa-house d-inline mx-2" burger-nav-name="Home."></i>
            </a>
        </li>
        <li class="mb-3 ">
            <a href="#">
                <i class="fa-regular fa-store d-inline mx-2" burger-nav-name="Store."></i>
            </a>
        </li>
        <li class="mb-3 ">
            <a href="#">
                <i class="fa-regular fa-laptop d-inline mx-2" burger-nav-name="HazenBook."></i>
            </a>
        </li>
        <li class="mb-3 ">
            <a href="#">
                <i class="fa-regular fa-mobile d-inline mx-2" burger-nav-name="HPhone."></i>
            </a>
        </li>
        <li class="mb-3 ">
            <a href="#">
                <i class="fa-regular fa-tablet d-inline mx-2" burger-nav-name="HTab."></i>
            </a>
        </li>
        <li class="mb-3 ">
            <a href="#">
                <i class="fa-regular fa-watch-apple d-inline mx-2" burger-nav-name="HWatch."></i>
            </a>
        </li>
        <li class="mb-3 ">
            <a href="#">
                <i class="fa-regular fa-headset d-inline mx-2" burger-nav-name="HBuds."></i>
            </a>
        </li>
        <li class="mb-3 ">
            <a href="#">
                <i class="fa-regular fa-gamepad d-inline mx-2" burger-nav-name="GamingZone."></i>
            </a>
        </li>
        <li class="mb-3 ">
            <a href="#">
                <i class="fa-regular fa-comments-question d-inline mx-2" burger-nav-name="Supports."></i>
            </a>
        </li>
        <li class="mb-3 ">
            <a href="#">
                <i class="fa-regular fa-circle-info d-inline mx-2" burger-nav-name="About."></i>
            </a>
        </li>
        <li class="mb-3 ">
            <a href="#">
                <i class="fa-regular fa-user-plus d-inline mx-2" burger-nav-name="Sign In."></i>
            </a>
        </li>
    </ul>
`;
navbarBox.appendChild(navbar);
