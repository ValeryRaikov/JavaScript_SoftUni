// 01
function getInfo() {
    const baseUrl = 'http://localhost:3030/jsonstore/bus/businfo';

    const stopIdElement = document.getElementById('stopId');
    const stopNameElement = document.getElementById('stopName');
    const busesElement = document.getElementById('buses');

    const stopId = stopIdElement.value;
    fetch(`${baseUrl}/${stopId}`)
        .then(response => response.json())
        .then(data => {
            stopNameElement.textContent = data.name

            for (const busId in data.buses) {
                const liElement = document.createElement('li');
                liElement.textContent = `Bus ${busId} arrives in ${data.buses[busId]} minutes`
                busesElement.appendChild(liElement);
            }
        })
        .catch(() => {
            stopNameElement.textContent = 'Error';
            busesElement.textContent = '';
        });
}

// 02
function getInfo() {
    const baseUrl = 'http://localhost:3030/jsonstore/bus/businfo';

    const stopIdElement = document.querySelector('input[type=text]#stopId');
    const stopNameElement = document.querySelector('input[type=button]#submit');
    const busesElement = document.querySelector('ul#buses');

    const stopId = stopIdElement.value;
    fetch(`${baseUrl}/${stopId}`)
        .then(response => response.json())
        .then(data => {
            stopNameElement.textContent = data.name;

            Object.entries(data.buses).map(([busId, arrivalTime]) => {
                const liElement = document.createElement('li');
                liElement.textContent = `Bus ${busId} arrives in ${arrivalTime} minutes`;
                busesElement.appendChild(liElement);
            });
        })
        .catch(() => {
            stopNameElement.textContent = 'Error';
            busesElement.textContent = '';
        });
}

// 03
async function getInfo() {
    const baseUrl = 'http://localhost:3030/jsonstore/bus/businfo';

    const stopIdElement = document.querySelector('input[type=text]#stopId');
    const stopNameElement = document.querySelector('input[type=button]#submit');
    const busesElement = document.querySelector('ul#buses');

    const stopId = stopIdElement.value;
    try {
        const response = await fetch(`${baseUrl}/${stopId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        stopNameElement.textContent = data.name;

        for (const [busId, arrivalTime] of Object.entries(data.buses)) {
            const liElement = document.createElement('li');
            liElement.textContent = `Bus ${busId} arrives in ${arrivalTime} minutes`;
            busesElement.appendChild(liElement);
        }
    } catch (error) {
        stopNameElement.textContent = 'Error';
        busesElement.textContent = '';
    }
}