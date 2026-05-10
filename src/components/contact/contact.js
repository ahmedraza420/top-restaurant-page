import icons from "../../svgs/icons";
import createElement from "../../utils/createElement";

export function createContact() {
    const page = document.createDocumentFragment();

    page.append(
        createElement('section', "hero contact__hero section-dark", {}, 
                    createElement('h1', "contact__hero__title", {}, "GET IN TOUCH")
        ),
        createElement('section', 'contact-section section-light before', {}, [
            createElement('div', "container", {}, [
                createContactInfo(),
                createContactForm(),
            ])
        ]) 
    )
    
    return page;
}

const createContactInfo = () => {
    const createSocialLink = (name) => {
        return createElement('a', 'social', {'href': ''}, [ 
            icons[name],
            name.charAt(0).toUpperCase() + name.slice(1),
        ])
    }

    return createElement('div', 'info', {}, [
        createElement('div', 'titleWrap', {}, [
            createElement('h2', "title", {}, "Let's Talk"),
            createElement('p', "sub", {}, "Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help")
        ]),
        createElement('div', 'emailWrap', {}, [
            createElement('h3', "", {}, "Email"),
            createElement('a', "", {'href' : "mailto:name@example.com"}, "name@example.com"),
        ]),
        createElement('div', 'socials', {}, [
            createSocialLink('instagram'),
            createSocialLink('twitter'),
            createSocialLink('facebook'),
            createSocialLink('youtube'),
        ])
    ])
}
    // THE ACTIVE CLASS IN THE FIELDSETS IS NOW UNNECESSARY, BUT I'M STILL KEEPING IT.
const createContactForm = () => {
    
    const submitBtn = createElement('button', 'contact-btn btn-green-3', {}, "Send");

    const generalSet = createElement('fieldset', 'conditional active', {"data-type": "general"}, [
        createElement('label', 'general-message', {}, [
            createElement('span', 'label', {}, "Message"),
            createElement('div', 'input-wrapper', {}, [
                createElement('textarea', '', {'name':'message', 'rows': 4, 'placeholder': "You guys should sell Mom's Spaghetti...", 'required': true}, '')
            ]),
        ])
    ]);

    const reservationSet = createElement('fieldset', 'conditional active', {"data-type": "reservation"}, [
        createElement('label', 'reservation-date', {}, [
            createElement('span', 'label', {}, "Date"),
            createElement('div', 'input-wrapper', {}, [
                createElement('input', '', {'name':'res_date', 'type': 'date', 'placeholder': "", 'required': true}, '')
            ]),
        ]),
        createElement('label', 'reservation-time', {}, [
            createElement('span', 'label', {}, "Time"),
            createElement('div', 'input-wrapper', {}, [
                createElement('input', '', {'name':'res_time', 'type': 'time', 'placeholder': "", 'required': true}, '')
            ]),
        ]),
        createElement('label', 'reservation-diners', {}, [
            createElement('span', 'label', {}, "Diners"),
            createElement('div', 'input-wrapper', {}, [
                createElement('input', '', {'name':'res_diners', 'type': 'number', 'value': 1, 'min': 1, 'required': true}, '')
            ]),
        ]),
        createElement('label', 'reservation-notes', {}, [
            createElement('span', 'label', {}, "Special Requests"),
            createElement('div', 'input-wrapper', {}, [
                createElement('textarea', '', {'name':'res_notes', 'rows': 4, 'placeholder': "E.g., Window seat, high chair, Anniversary, Birthday...", 'required': true}, '')
            ]),
        ]),
    ]);

    const eventSet = createElement('fieldset', 'conditional active', {"data-type": "event"}, [
        createElement('label', 'event-type', {}, [
            createElement('span', 'label', {}, "Event Type"),
            createElement('div', 'input-wrapper', {}, [
                createElement('input', '', {'name':'event_type', 'type': 'text', 'placeholder': "Birthday, Wedding, Party...", 'required': true}, '')
            ]),
        ]),
         createElement('label', 'event-date', {}, [
            createElement('span', 'label', {}, "Event Date"),
            createElement('div', 'input-wrapper', {}, [
                createElement('input', '', {'name':'event_date', 'type': 'date', 'placeholder': "", 'required': true}, '')
            ]),
        ]),
        createElement('label', 'event-guests', {}, [
            createElement('span', 'label', {}, "Guest Count"),
            createElement('div', 'input-wrapper', {}, [
                createElement('input', '', {'name':'event_guests', 'type': 'number', 'value': 1, 'min': 1, 'required': true}, '')
            ]),
        ]),
        createElement('label', 'event-detail', {}, [
            createElement('span', 'label', {}, "Event Details"),
            createElement('div', 'input-wrapper', {}, [
                createElement('textarea', '', {'name':'event_details', 'rows': 4, 'placeholder': "E.g., Corporate lunch for 30, buffet style, vegetarian options needed...", 'required': true}, '')
            ]),
        ]),
    ]);

    const feedbackSet = createElement('fieldset', 'conditional active', {"data-type": "feedback"}, [
        createElement('label', 'feedback-message', {}, [
            createElement('span', 'label', {}, "Feedback / Complaint"),
            createElement('div', 'input-wrapper', {}, [
                createElement('textarea', '', {'name':'feedback_mesage', 'rows': 4, 'placeholder': "The spaghetti was too short...", 'required': true}, '')
            ]),
        ]),
    ]);

    const inquiryGroups = {
        general : generalSet,
        reservation : reservationSet,
        event : eventSet,
        feedback : feedbackSet,
    }

    const inquirySelect = createElement('select', '', {"id": "inquiryType", "name": "type", "required": true}, [
            createElement('option', "", {'value': 'general'}, "General Inquiry"),
            createElement('option', "", {'value': 'reservation'}, "Reservation Request"),
            createElement('option', "", {'value': 'event'}, "Private Event / Catering"),
            createElement('option', "", {'value': 'feedback'}, "Feedback / Complaint"),
        ]);

    const handleChangeInquiryType = (groupName) => {
        return inquiryGroups[groupName]
    }

    const conditionalWrapper = createElement('div', 'conditional-wrapper', {}, inquiryGroups[inquirySelect.value]);

    inquirySelect.addEventListener('change', () => {
        conditionalWrapper.replaceChildren(inquiryGroups[inquirySelect.value])
    })

    return createElement('form', 'contact-form', {"id": "contactForm"}, [
        createElement('fieldset', 'basic', {}, [
            createElement('label', 'name', {}, [
                createElement("span", 'label', {}, "Full Name"),
                createElement('div', 'input-wrapper', {}, [
                    createElement('input', '', {"type": "text", "name": "name", "placeholder": "John Doe", "required": true}, []),
                ]),
            ]),
            createElement('label', 'email', {}, [
                createElement("span", 'label', {}, "Email"),
                createElement('div', 'input-wrapper', {}, [
                    createElement('input', '', {"type": "email", "name": "email", "placeholder": "name@example.com", "required": true}, []),
                ]),
            ]),
            createElement('label', 'phone', {}, [
                createElement("span", 'label', {}, "Phone"),
                createElement('div', 'input-wrapper', {}, [
                    createElement('input', '', {"type": "tel", "name": "phone", "placeholder": "01234567890", "required": true}, []),
                ]),
            ]),
            createElement('label', 'inquiry-type', {}, [
                createElement('span', 'label', {}, "Inquiry Type"),
                createElement('div', 'input-wrapper', {}, [
                    inquirySelect,
                ]),
            ]),
        ]),
        conditionalWrapper,
        
        submitBtn,
    ])
}