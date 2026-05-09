import createElement from "../../utils/createElement";

export function createPromotionsSection() {
    

    return createElement('section', "promotions section-dark before", {}, [
        createElement('div', "container", {}, [
            createElement('h2', "promotions__title", {}, 
                [
                    "DON'T MISS OUT ON",
                    createElement('span', "text-pink", {}, " ANY PROMOTIONS")
                ]),
            createElement('div', "email__wrap", {}, [
                createElement('h3', "promotion__sub", {}, "SIGN UP FOR EXCLUSIVE OFFERS"),
                createElement('p', "promotion__text", {}, "and benefits from the latest deals"),
                createElement('form', "promotion__form", {}, [
                    createElement('input', "promotion__input", {"id":"email", "type": "input", "name": "email", "placeholder": "Email", "required": "true"}),
                    createElement('button', "promotion__btn btn-green-2", {}, "SIGN UP"),
                ])
            ])
        ])
    ])
}