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

const root = document.querySelector('#root');
let mainContainer;
let currentPage = "home";

function renderApp() {
    root.replaceChildren();

    const { layout, main } = createLayout(handleNavigation);

    mainContainer = main;

    root.appendChild(layout);
    renderPage(currentPage, mainContainer);
}

function handleNavigation(pageName) {
    currentPage = pageName;
    renderPage(currentPage, mainContainer)
}

function createLayout(onNavigate) {
    const layout = document.createElement('div');

    const header = createNavbar(onNavigate);
    const main = document.createElement('main');
    const footer = createFooter(onNavigate);

    layout.append(header, main, footer);

    return {layout, main};
}

function renderPage(pageName, main) {
    main.innerHTML = "";

    const pageFunc = routes[pageName];

    if(!pageFunc) return;
    const page = pageName == "menu" ? pageFunc(menuData) : pageFunc();

    main.appendChild(page);
}


renderApp();