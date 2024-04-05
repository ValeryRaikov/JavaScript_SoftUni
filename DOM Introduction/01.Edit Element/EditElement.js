// 01
function editElement(reference, match, replacer) {
    while (reference.textContent.includes(match)) {
        reference.textContent = reference.textContent.replace(match, replacer);
    }
}

// 02 (Not working in Judge)
function editElement(reference, match, replacer) {
    reference.textContent = reference.textContent.replaceAll(match, replacer);
}

// 03
function editElement(reference, match, replacer) {
    reference.textContent = reference.textContent.replaceAll(new RegExp(match, 'g'), replacer);
}