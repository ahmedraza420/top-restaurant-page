export default function (svgString) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = svgString.trim();
    return wrapper.firstChild;
}