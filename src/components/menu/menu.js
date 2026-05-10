import createElement from "../../utils/createElement";
import { createPromotionsSection } from "../common/promotions";
const currencySymbol = "€";

export function createMenu (menuData) {
    const page = document.createDocumentFragment();
    // const main = createElement('section', 'main', {}, );


    page.append(
        createElement('section', "hero menu__hero section-dark", {}, 
            createElement('h1', "menu__hero__title", {}, "MENU")
        ),
        createElement('section', "main", {}, [
            ...menuData.map((group, i) => {
                return !Object.hasOwn(group, 'subCats') ? createMenuSection1(group, i) : createMenuSection2(group, i)
            })
        ]),
        createPromotionsSection(),
    )
    return page;
}

const createMenuSection1 = (menuGroup, index) => {
    return createElement('div', `menu1__section before ${index % 2 == 0 ? 'section-dark' : 'section-light'}`, {}, [
        createElement('div', "container", {}, [
            createElement('h2', "menu1__title", {}, menuGroup.category),
            createElement('div', "menu1__items", {}, [
                ...menuGroup.items.map(item => {
                    return createElement('div', "menu1__item", {}, [
                        createElement('div', "menu1__media", {}, 
                            createElement('img', "menu1__img", {"src": item.image}, [])
                        ),
                        createElement('div', "menu1__details", {}, [
                            createElement('h3', "menu1__name", {}, item.name),
                            createElement('p', "menu1__description", {}, item.description),
                        ]),
                        createElement('div', "menu1__variants", {}, [
                            ...item.variants.map((variant) => {
                                return createElement('div', "menu1__variant", {}, [
                                    createElement('p', 'menu1__variant__label', {}, variant.label || ""),
                                    createElement('h4', 'menu1__variant__price', {}, variant.price + ` ${currencySymbol}`),
                                ])
                            })
                        ])
                    ])
                })
            ])
        ])
    ])
}


const createMenuSection2 = (menuGroup, index) => {
    return createElement('div', `menu2__section before ${index % 2 == 0 ? 'section-dark' : 'section-light'}`, {}, [
        createElement('div', "container", {}, [
            createElement('div', 'menu2__items', {}, [
                ...menuGroup.subCats.map((subCat) => {
                    return subCat.items.map(item => {
                        return createElement('div', 'menu2__item', {}, [
                            createElement('div', 'menu2__media', {},
                                createElement('img', 'menu2__img', {"src": item.image}, []),
                            ),
                            createElement('div', "menu2__details__wrapper", {}, 
                                createElement('div', "menu2__details", {}, [
                                    createElement('h2', "menu2__cat__name", {}, subCat.cat),
                                    createElement('h3', "menu2__name", {}, item.name),
                                    item.description !== "" ? createElement('p', "menu2__description", {}, item.description) :  null,
                                    createElement('div', "menu2__variants", {}, [
                                        ...item.variants.map(variant => {
                                            return createElement('div', "menu2__variant", {}, [
                                                createElement('p', "menu2__variant__label", {}, variant.label || ""),
                                                createElement('h4', "menu2__variant__price", {}, variant.price + ` ${currencySymbol}`),
                                            ])
                                        })
                                    ])
                                ]) 
                            )
                        ])
                    })
                })
            ])
        ])
    ])
}