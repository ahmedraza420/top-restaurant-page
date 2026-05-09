export default function (element, classes = "", attrs = {}, content = []) {
    const el = document.createElement(element);

    // const classNames = Array.isArray(classes) ? classes : [classes];
    // if (classNames.length > 0) el.classList.add(...classNames);
    if (classes !== "") {
        const classNames = Array.isArray(classes) ? classes : classes.trim().split(" ");
        classNames.forEach(className => el.classList.add(className));
    }


    for (const key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
    
    const children = Array.isArray(content) ? content : [content]; 

    children.forEach(child => {
        appendChild(el, child);
    })

    return el;
}

function appendChild(parent, child) {
    // console.log(parent, child);
    if (child == null || child == false) return;

    if (typeof child == "string" || typeof child == "number") {
        parent.appendChild(document.createTextNode(child));
        return
    }

    if (child instanceof Node) {
        parent.appendChild(child);
        return;
    }

    if (Array.isArray(child)) {
        child.forEach(item => appendChild(parent, item));
        return;
    }
}