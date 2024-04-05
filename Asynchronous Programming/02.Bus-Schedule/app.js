// 01
/* function solve() {
    const baseUrl = 'http://localhost:3030/jsonstore/bus/schedule';

    const departButtonElement = document.getElementById('depart');
    const arriveButtonElement = document.getElementById('arrive');
    const infoDivElement = document.getElementById('info');

    let stopId = 'depot';
    let stopName;

    function depart() {    
        fetch(`${baseUrl}/${stopId}`)
        .then((response) => response.json())
        .then((data) => {
            stopName = data.name;
            stopId = data.next;

            infoDivElement.textContent = `Next Stop ${stopName}`;
            departButtonElement.disabled = true;
            arriveButtonElement.disabled = false;
            
        })
        .catch((error) => {
            infoDivElement.textContent = 'Error';
            arriveButtonElement.disabled = true;
        }) 
    }

    async function arrive() {
        infoDivElement.textContent = `Arriving at ${stopName}`;
        departButtonElement.disabled = false;
        arriveButtonElement.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve(); */

// 02
function solve() {
    const baseUrl = 'http://localhost:3030/jsonstore/bus/schedule';

    const departButtonElement = document.getElementById('depart');
    const arriveButtonElement = document.getElementById('arrive');
    const infoDivElement = document.getElementById('info');

    let stopId = 'depot';
    let stopName;

    async function depart() {
        try {
            const response = await fetch(`${baseUrl}/${stopId}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            stopName = data.name;
            stopId = data.next;

            infoDivElement.textContent = `Next Stop ${stopName}`;
            departButtonElement.disabled = true;
            arriveButtonElement.disabled = false;
        } catch (error) {
            infoDivElement.textContent = 'Error';
            arriveButtonElement.disabled = true;
            console.error('Error fetching data:', error);
        }
    }

    function arrive() {
        infoDivElement.textContent = `Arriving at ${stopName}`;
        departButtonElement.disabled = false;
        arriveButtonElement.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
