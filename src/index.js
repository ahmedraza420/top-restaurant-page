import "./style.css";
import menuData from './data/menuData.js';
import { createNavbar } from './components/layout/header.js';
import { createFooter } from './components/layout/footer.js';
import { createHome } from './components/home/home.js';
import { createMenu } from './components/menu/menu.js';
import { createContact } from './components/contact/contact.js';

const routes = {
    // the values would be callbacks imported from the the page components.
    home: createHome,
    menu: createMenu,
    contact: createContact,
}
const routePaths = {
    home: '/',
    menu: '/menu',
    contact: '/contact',
}
const navElements =  {}
Object.keys(routes).forEach((route => navElements[route] = []));

const root = document.querySelector('#root');
let mainContainer;
let currentPage = getPageFromPath(window.location.pathname);

function getPageFromPath(pathname) {
    const match = Object.entries(routePaths)
        .find(([_, path]) => path === pathname);

    return match ? match[0] : "home";
}


function renderApp() {
    root.replaceChildren();

    const { layout, main } = createLayout(handleNavigation, navElements);

    mainContainer = main;

    root.appendChild(layout);

    updateActiveNav(currentPage);

    renderPage(currentPage, mainContainer);
}

function updateActiveNav (pagename) {
    Object.entries(navElements).forEach(([page, elements]) => {
        elements.forEach(el => {
            el.classList.toggle('active', page === pagename)
        });
    })
}

function handleNavigation(pageName) {
    currentPage = pageName;
    history.pushState({}, "", routePaths[pageName]);
    updateActiveNav(currentPage);
    renderPage(currentPage, mainContainer);
    window.scrollTo(0, 0);
}


// for back/forward buttons of the browser
window.addEventListener("popstate", () => {
    currentPage = getPageFromPath(window.location.pathname);

    updateActiveNav(currentPage);

    renderPage(currentPage, mainContainer);
    window.scrollTo(0, 0);
});

function createLayout(onNavigate, navElements) {
    const layout = document.createElement('div');

    const header = createNavbar(onNavigate, navElements);
    const main = document.createElement('main');
    const footer = createFooter(onNavigate, navElements);

    layout.append(header, main, footer);

    return {layout, main};
}

function renderPage(pageName, main) {
    main.innerHTML = "";

    const pageFunc = routes[pageName];

    if(!pageFunc) return;
    const page = pageName == "menu" ? pageFunc(menuData) : pageName == "home" ? pageFunc(handleNavigation) : pageFunc();

    main.appendChild(page);
}


renderApp();