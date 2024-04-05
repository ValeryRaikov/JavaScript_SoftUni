// 01
function attachEventsListeners() {
    const convertButton = document.querySelector('#convert');
    const inputDistance = document.querySelector('#inputDistance');
    const outputDistance = document.querySelector('#outputDistance');
    const inputUnits = document.querySelector('#inputUnits');
    const outputUnits = document.querySelector('#outputUnits');

    const conversionConstants = {
        0: 1000,
        1: 1,
        2: 0.01,
        3: 0.001,
        4: 1609.34,
        5: 0.9144,
        6: 0.3048,
        7: 0.0254
    };

    convertButton.addEventListener('click', () => {
        const inputIndex = inputUnits.selectedIndex;
        const outputIndex = outputUnits.selectedIndex;

        const inputValue = parseFloat(inputDistance.value);
        const conversionFactor = conversionConstants[inputIndex] / conversionConstants[outputIndex];

        outputDistance.value = inputValue * conversionFactor;
    });
}