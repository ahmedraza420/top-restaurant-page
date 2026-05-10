
import createElement from "../../utils/createElement";
import { createPromotionsSection } from "../common/promotions";
import images from "../../assets/images";
import icons from "../../svgs/icons";
import menuData from "../../data/menuData";
// functions are modules, function expressions are helper functions for the modules above.

export function createHome(onNavigate) {
    const page = document.createDocumentFragment();

    page.append(
        createHeroSection(),
        createEstSection(),
        createValuesSection(),
        createGoToMenuSection(),
        createFeaturedSection(onNavigate),    
        createLocationAndMediaSection(),
        createOnlineSection(),   
        createPromotionsSection(),
    );

    return page;
}

function createHeroSection() {
    const slides = [];
    for (let i = 0; i < 3; i++) {
        slides.push(createElement('div', `slide ${i === 0 ? "active" : ""}`, {}, 
                    createElement('img', "", {"src" : images[`heroimage${i+1}`], "alt" : "Hero image"}, [])
                ))
    }

    const showSlide = (index) => {
        slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
        dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    }

    const dots = [];
    for (let i = 0; i < 3; i++) {
        const dot = createElement('button', `dot ${i == 0 ? "active": ""}`, {"data-index": i}, []) // data-index sort of useless now.
        dot.addEventListener('click', () =>  showSlide(i))
        dots.push(dot);
    }

    let current = 0;
    setInterval(() => {
        current = (current + 1) % slides.length;
        showSlide(current);
    }, 7000);

    return createElement('section', 'hero', {}, [
        createElement('div', "slider", {}, [
            ...slides
        ]),
        createElement('div', "dots", {}, [
            ...dots
        ]),
        createElement('div', "hero__main container", {}, [
            createElement('h1', "hero__title", {}, "FRANKFURT'S BEST BURGER"), // Needs to be animated
            createElement('p', "hero__subtitle", {}, "Homemade from Bonamen"),
            createElement('button', "hero__button cto", {}, "ORDER NOW"),
        ]),
        createElement('div', "hero__bottom container", {}, [
            createElement('button', "hero__call", {}, [
                icons['call'],
                createElement('span', "call__text", {}, "Call Us")
            ]),
            createElement('img', "disc", {src: images.disc}, ""),
        ])
    ])
}

function createEstSection() {
    return createElement('section', "est section-dark before", {}, [
        createElement('div', "container", {}, [
            createElement("h2", "est__title", {}, "BURGER AG DISASSEBLEES FRANKFURT"),
            createElement('p', "est__subtitle", {}, "Since 2012 from Bonames"),
            createElement('div', "gallery", {}, [
                createElement('img', "gallery__image", {"src": images.heroimage1, "alt":""}),
                createElement('img', "gallery__image", {"src": images.heroimage3, "alt":""}),
                createElement('img', "gallery__image", {"src": images.heroimage2, "alt":""}),
                createElement('img', "gallery__image", {"src": images.heroimage3, "alt":""}),
                createElement('img', "gallery__image", {"src": images.heroimage1, "alt":""}),
            ])
        ])
    ])
}

function createValuesSection() {
    return createElement('section', "values section-light before after", {}, [
        createElement('div', "container", {}, [
            createElement('div', "values__content", {}, [
                createElement('h2', "values__title", {}, [
                    "OUR VALUES, ",
                    createElement('span', "text-pink", {}, "FRANKFURT VALUES"),
                ]),
                createElement('div', "values__cards", {}, [
                    valuesCard("QUALITY", "At Burger AG, quality comes first. We use only the best and freshest locally sourced ingredients to ensure that every burger offers a unique taste experience."),
                    valuesCard("RICH IN TRADITION", "Burger AG is more than just a restaurant – we are part of the community. Since our opening in 2012, we have supported local initiatives and events in Frankfurt."),
                    valuesCard("FAMILY", "Bei Burger AG steht Qualität an erster Stelle. Wir verwenden nur die besten und frischesten Zutaten aus der Region, um sicherzustellen, dass jeder Burger ein einzigartiges Geschmackserlebnis bietet."),
                ])
            ]),
            createElement('div', "values-media", {}, [
                createElement('img', "floatingburger", {"src": images.floatingburger, "alt": ""})
            ])
        ])
    ]);
}

const valuesCard = (title, text) => {
    return createElement('div', "values__card", {}, [
        createElement('h3', "values__card__title", {}, title),
        createElement('p', "values__card__text", {}, text)
    ])
}

function createGoToMenuSection() {
    return createElement('section', "gotomenu section-dark", {}, [
        createElement('div', "container", {}, [
            createElement('h2', "gotomenu__title", {}, "CLICK HERE FOR OUR FOOD AND DRINKS"),
            createElement('button', "gotomenu__button", {}, "GO TO MENU")
        ])
    ]);
}

function createFeaturedSection(onNavigate) {

    const featuredCategories = [
        {
            "name" : "burgers",
            "text" : "Burgers"
        },
        {
            "name" : "side",
            "text" : "Sides"
        },
        {
            "name" : "drink",
            "text" : "Drinks"
        },
    ]
    const featuredItemsContainer = createElement('div', "featured__items", {}, []);
    const menuDotsContainer = createElement('div', "menu__dots", {}, []);
    const controlBtns = [];
    controlBtns.push(createElement('button', "menu__prev btn-pink btn-h-w", {}, icons["previous"]));
    controlBtns.push(createElement('button', "menu__next btn-pink btn-h-w", {}, icons["next"]));
    const viewMenuBtn = createElement('button', "featured__button btn-green", {}, "VIEW ALL MENUS");

    const featuredCatBtns = featuredCategories.map((category) => {
        const btn = createElement("button", "category btn-green-30", {"data-name" : category.name}, category.text)
        btn.addEventListener("click", () => {
            featuredCatBtns.forEach(el => el.classList.remove('active'));
            btn.classList.add("active")
            handleCategoryChange(btn.dataset.name, featuredItemsContainer, menuDotsContainer, controlBtns);
        });
        return btn;
    });

    featuredCatBtns[0].click();

    // controlBtns.forEach(button => button.addEventListener('click', () => console.log("menu control clicked")));

    viewMenuBtn.addEventListener('click', () => onNavigate("menu"))


    return createElement('section', "featured section-dark before", {}, [
        createElement('div', "container", {}, [
            createElement('h2', "featured__title", {}, "FEATURED ITEMS"), 
            createElement('p', "featured__subtitle", {}, "Homemade Burger & co"),
            createElement('div', "featured__categories", {}, [
                createElement('div', 'indicator', {}, []),
                ...featuredCatBtns,

            ]),
            createElement('div', "featured__menu", {}, [
                createElement('div', "featured__viewport", {}, 
                    featuredItemsContainer,
                ),
                menuDotsContainer,
                
                
            ]),
            ...controlBtns,
            viewMenuBtn,
        ])
    ])
}

const handleCategoryChange = (category, menuContainer, menuDotsContainer, controls) => {
    const featuredItems = fetchFeaturedItems(category);

    initializeCarousel(featuredItems, menuContainer, menuDotsContainer, controls);
    // renderFeaturedItems(featuredItems, menuContainer);
    // renderMenuDots(menuContainer, menuDotsContainer)
}

const initializeCarousel = (items, menuContainer, dotsContainer, controls) => {
    menuContainer.replaceChildren();
    dotsContainer.replaceChildren();
    const cardsPerView = getCardsPerVeiw();
    const clonedStart = items.slice(-cardsPerView);
    const clonedEnd = items.slice(0, cardsPerView);
    let cards = [];

    const carouselItems = [
        ...clonedStart,
        ...items,
        ...clonedEnd
    ];

    carouselItems.forEach(item => {
        cards.push(createCard(item));
    });
    menuContainer.append(...cards);


    items.forEach((_, index) => {
        const dot = createElement('button', `menu__dot ${index === 0 ? 'active' : ''}`, {"data-index": index}, []);
        // console.log(dot)
        dot.addEventListener('click', () => {goToSlide(index)});
        dotsContainer.appendChild(dot);
    });

    // dotsContainer.append(...createMenuDots(items.length));

    let activeIndex = 0, currentIndex = cardsPerView;
    let [prevBtn, nextBtn] = controls;
    let cardwidth = 0, gap = 0, isAnimating = false;

    const updateMeasurements = () => {
        // console.log(cards)
        const fisrtCard = cards[cardsPerView] || cards[0];
        if (!fisrtCard) return;

        const styles = getComputedStyle(menuContainer);

        gap = parseFloat(styles.columnGap || styles.gap || 0);
        // console.log({gap});

        cardwidth = fisrtCard.offsetWidth + gap;
        moveCarousel(false);
    }

    const moveCarousel = (animate = true) => {
        menuContainer.style.transition =
        animate
            ? 'transform 0.45s ease'
            : 'none';
        menuContainer.style.willChange = 'transform';

        const offset = currentIndex * cardwidth;
        menuContainer.style.transform = `translateX(-${offset}px)`;
    }



    const updateDots = () => {
        [...dotsContainer.children].forEach((dot, i) => {
            dot.classList.toggle('active', i === activeIndex);
        })
    }

    const prevSlide = () => {
        if (isAnimating) return;

        isAnimating = true;

        currentIndex--; 
        activeIndex = (activeIndex - 1 + items.length) % items.length;
        
        moveCarousel();
        updateDots();
    }

    const nextSlide = () => {
        if (isAnimating) return;

        isAnimating = true;

        currentIndex++;
        activeIndex = (activeIndex + 1) % items.length;
        
        updateDots();
        moveCarousel();
    }

    const goToSlide = (index) => {
        if (isAnimating) return;

        isAnimating = true;

        activeIndex = index;
        currentIndex = cardsPerView + index;

        updateDots();
        moveCarousel();
    }


    const handleTransitionEnd = () => {
        /* reached cloned end */
        if (currentIndex >= items.length + cardsPerView) {
            currentIndex = cardsPerView;
            moveCarousel(false);
        }
    
        /* reached cloned start */
        else if (currentIndex < cardsPerView) {
            currentIndex = items.length + cardsPerView - 1;
            moveCarousel(false);
        }
    
        isAnimating = false;
    }
    menuContainer.removeEventListener('transitionend', handleTransitionEnd);
    menuContainer.addEventListener('transitionend', handleTransitionEnd);

    // remove old handlers first
    prevBtn.onclick = null;
    nextBtn.onclick = null;

    prevBtn.onclick = prevSlide;
    nextBtn.onclick = nextSlide;

    prevBtn.disabled = true;
    nextBtn.disabled = true;

    const enableControls = () => {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    };

    // on first load
    requestAnimationFrame(() => {
        updateMeasurements();
        moveCarousel(false);
        enableControls();
    });

    const carouselResizeHandler = () => {
        updateMeasurements();
    };

    window.addEventListener('resize', carouselResizeHandler);

    
}

const getCardsPerVeiw = () => {
    if (window.innerWidth >= 1280) return 4;
    else if (window.innerWidth >= 768) return 3;
    else return 2;
}

const fetchFeaturedItems = (catName) => {
    if (typeof catName !== 'string') return;
    const category = catName.toLowerCase();
    const matchingCategories = menuData.filter(data => data.category.toLowerCase() == category || data.type.toLowerCase() == category || data.subCats?.cat?.toLowerCase() == category)
    const featuredItems = [];
    matchingCategories.forEach(match => {
        // console.log(match);
        if (Object.hasOwn(match, "subCats")) {
            match.subCats.forEach(subCat => {featuredItems.push(...subCat.items.filter(item => item.featured))});
            // continue;
        }
        else {
            featuredItems.push(...match.items.filter(item => item.featured));
        }
    })
    return featuredItems;
}

const createCard = (menuItem) => {
    return createElement('div', "featured__item", {}, [
        createElement('div', "featured__item__img", {}, 
            createElement('img', "featuredImg", {"src": menuItem.image, "alt":`Image of ${menuItem.name}`}, [])
        ),
        createElement('h4', "featured__item__title", {}, menuItem.name),
        createElement('p', "featured__item__details", {}, menuItem.description),
    ])
}

function createLocationAndMediaSection() {
    return createElement('section', "locandmed before after section-light", {}, [
        createElement("div", "container", {}, [
            createElement("div", "locations", {}, [
                createElement("img", "locations__img", {"src": images.location, "alt": "image of burger ag restaurant"}),
                createElement('div', "locations__title__wrap", {}, [
                    createElement("h2", "locations__title", {}, "OUR LOCATIONS"),
                    createElement('p', "locations__sub", {}, "Come visit us")
                ]),
                createElement("div", "branch", {}, [
                    createElement("h3", "branch__name", {}, "FRANKFURT"),
                    createElement('p', "branch__address", {}, "Delighting the entire north of Frankfurt ever since"),
                    createElement("div", "timings", {}, [
                        createElement("p", "timing", {}, "Monday - Tuesday 12:00 PM - 10:00 PM"),
                        createElement("p", "timing", {}, "Wednesday - Thursday 12:00 PM - 10:00 PM"),
                        createElement("p", "timing", {}, "Friday 12:00 PM - 10:00 PM"),
                        createElement("p", "timing", {}, "Saturday - Sunday 12:00 PM - 10:00 AM"),
                    ])
                ])
            ]),
            createElement("div", "socialsection", {}, [
                createElement('div', "socialsection__title__wrap", {}, [
                    createElement('h2', "socialsection__title", {}, [
                        "WE'RE SHOWING GERMANY ",
                        createElement('span', "text-pink", {}, "HOW IT'S DONE")
                    ]),
                    createElement('p', "socialsection__sub", {}, "Follow us on Social Media")
                ]),
                createElement("div", "socials__wrap", {}, [
                    createElement('div', "socials", {}, [
                        createElement('a', "social", {"href": ""}, [
                            icons["instagram"],
                            "Instagram"
                        ]),
                        createElement('a', "social", {"href": ""}, [
                            icons["twitter"],
                            "Twitter"
                        ]),
                        createElement('a', "social", {"href": ""}, [
                            icons["facebook"],
                            "Facebook"
                        ]),
                        createElement('a', "social", {"href": ""}, [
                            icons["youtube"],
                            "Youtube"
                        ]),
                    ])
                ])
            ])
        ])
    ])
}

function createOnlineSection() {
    return createElement('section', "online section-dark", {}, [
        createElement('div', "container", {}, [
            createElement("h2", "online__title", {}, [
                "YOU CAN ALSO ",
                createElement('span', "text-pink", {}, "ORDER ONLINE")
            ]),
            createElement('p', "online__sub", {}, "Only in Frankfurt and surrounding areas"),
            createElement('button', "online__button btn-green", {}, "GO TO MENU"),
        ])
    ])
}