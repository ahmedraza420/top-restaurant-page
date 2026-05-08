import icons from "../../svgs/icons";
import createElement from "../../utils/createElement";
import brandLogo from "../../assets/brandlogo.svg";

export function createFooter (onNavigate) {
    return createElement('footer', 'section-dark', {}, [
        createElement('div', "container", {}, [
            createElement('div', "footer__content", {}, [
                createSocialsCol(),
                createLinksCol(onNavigate),
                createTimingsCol(),
                createAddressCol()
            ]),
            createCopyrightEl()
        ])
    ])
}

function createSocialsCol () {
    return createElement('div', "footer__content__container footer__socials", {}, [
        createElement('div', "footer__socials__logo", {}, [
            createElement('img', "logo", {"src": brandLogo, "alt" : ""}),
        ]),
        createElement('div', "footer__socials__icons", {}, [
            createElement('a', "footer__socials__icon", {"href": ""}, [
                icons["instagram"]
            ]),
            createElement('a', "footer__socials__icon", {"href": ""}, [
                icons["twitter"]
            ]),
            createElement('a', "footer__socials__icon", {"href": ""}, [
                icons["facebook"]
            ]),
            createElement('a', "footer__socials__icon", {"href": ""}, [
                icons["youtube"]
            ]),
        ])
    ]);
}

function createLinksCol (onNavigate) {
    const homeLink = createElement('a', "quick__link path__link", {"href": ""}, "Home");
    const menuLink = createElement('a', "quick__link path__link", {"href": ""}, "Menu");
    const contactLink = createElement('a', "quick__link path__link", {"href": ""}, "Contact");

    homeLink.addEventListener('click', () => {
        onNavigate('home');
    });
    menuLink.addEventListener('click', () => {
        onNavigate('menu');
    });
    contactLink.addEventListener('click', () => {
        onNavigate('contact');
    });

    return createElement('div', "footer__content__container footer__links", {}, [
        createElement('h3', "", {}, "QUICK LINKS"),
        createElement('div', "quick__links", {}, [
            homeLink,
            menuLink,
            contactLink,
            createElement('a', "quick__link path__link", {"href": ""}, "Locations"),
            createElement('a', "quick__link path__link", {"href": ""}, "Team"),
        ])
    ]);
}

function createTimingsCol () {
    return createElement('div', "footer__content__container footer__timings", {}, [
        createElement("h3", "", {}, "OPENING HOURS"),
        createElement('div', "timings", {}, [
            createElement('p', "timing", {}, "Monday - Tuesday 12:00 PM - 10:00 PM"),
            createElement('p', "timing", {}, "Wednesday - Thursday 12:00 PM - 10:00 PM"),
            createElement('p', "timing", {}, "Friday 12:00 PM - 10:00 PM"),
            createElement('p', "timing", {}, "Saturday - Sunday 12:00 PM - 10:00 AM"),
        ])
    ]);
}

function createAddressCol () {
    return createElement('div', "footer__content__container footer__address", {}, [
        createElement('h3', "", {}, "ADDRESS"),
        createElement('div', "footer__contacts", {}, [
            createElement('div', "footer__contact", {}, [
                icons["email"],
                createElement('p', "", {}, "Homburger Landstrasse 78560437 Frankfurt am Main")
            ]),
            createElement('div', "footer__contact", {}, [
                icons["call2"],
                createElement('p', "", {}, "+49 (0) 12 / 123 123 12")
            ])
        ])
    ]);
}




function createCopyrightEl () {
    return createElement('div', "copyright", {}, [
                createElement('p', "copyright__text", {}, [
                    "Copyright 2026",
                    createElement('a', "copyright__link", {"href" : ""}, [
                        icons["github"],
                        "Ahmed Raza"
                    ]),
                    " | Privacy Policy - Legal Notice"
                ])
            ]);
}