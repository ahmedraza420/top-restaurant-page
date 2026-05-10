import createElement from "../../utils/createElement.js"
// import brandlogo from "../../assets/brandlogo.svg";
import createSvgFromString from "../../utils/createSvgFromString.js";
import icons from "../../svgs/icons.js";
import images from "../../assets/images.js";


export function createNavbar(onNavigate, navElements) {

    const homeButton = createElement('button', "path__link nav__item", {'id': "home"}, "Home");
    const menuButton = createElement('button', "path__link nav__item", {'id': "menu"}, "Menu");
    const contactButton = createElement('button', "path__link nav__item", {'id': "contact"}, "Contact");

    const navToggleBtn = createElement('button', 'nav__toggle', {}, [icons["toggle"]]);
    const navbar = createElement('nav', 'nav', {'id': 'primary-nav'}, [
            createElement('div', 'nav__brand__logo', {}, [
                createElement('img', 'logo', {"src": images.brandlogo, 'alt': "Brand Logo"})
            ]),
            createElement('div', 'nav__group', {}, [
                homeButton,
                menuButton,
                contactButton,
            ]),
            createElement('button', "nav__item--border cto", {}, "ORDER NOW")
        ])


    navElements.home.push(homeButton);
    navElements.menu.push(menuButton);
    navElements.contact.push(contactButton);
    
    homeButton.addEventListener('click', () => {
        onNavigate('home');
    });
    menuButton.addEventListener('click', () => {
        onNavigate('menu');
    });
    contactButton.addEventListener('click', () => {
        onNavigate('contact');
    });

    navToggleBtn.addEventListener('click', () => navbar.classList.toggle('expanded'));

    return createElement('header', "", {}, [
        createElement('div', "navbar container", {}, [
            createElement('div', "brand__logo", {}, [
                createElement('img', "logo", {"src": images.brandlogo, "alt" : "Brand Logo"})
            ]),
            navToggleBtn,
            navbar,
            
        ])  
    ])
}