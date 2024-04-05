// 01
function attachGradientEvents() {
    const divGradientElement = document.getElementById('gradient');
    const resultElement = document.getElementById('result');

    divGradientElement.addEventListener('mousemove', (e) => {
        const currentWidth = e.offsetX;
        const elementWidth = e.target.clientWidth;
        const progress = Math.floor((currentWidth / elementWidth) * 100) 

        resultElement.textContent = `${progress}%`;
    });
}

// 02
function attachGradientEvents() {
    const divGradientElement = document.getElementById('gradient');
    const resultElement = document.getElementById('result');

    divGradientElement.addEventListener('mouseenter', () => {
        divGradientElement.addEventListener('mousemove', updateProgress);
    });

    function updateProgress(e) {
        const currentWidth = e.offsetX;
        const elementWidth = e.target.clientWidth;
        const progress = Math.floor((currentWidth / elementWidth) * 100);

        resultElement.textContent = `${progress}%`;
    }
}
