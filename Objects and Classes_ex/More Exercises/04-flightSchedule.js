// 01 (Store objects in array)
function scheduleFlights(input) {
    let flights = [];

    const allflightsData = input[0];

    for (const fligthData of allflightsData) {
        const [flightName, ...rest] = fligthData.split(' ');
        const destination = rest.join(' ');

        flights.push({
            flightName,
            destination,
            status: null,
        });
    }

    const changedFlightsData = input[1];
    
    for (const fligthData of changedFlightsData) {
        const [flightName, status] = fligthData.split(' ');

        const flightToChange = flights.find(fligth => fligth.flightName === flightName);

        if (flightToChange) {
            flightToChange.status = status;
        }
    }

    const displayStatus = input[2].join('');

    if (displayStatus !== 'Ready to fly') {
        for (const flight of flights) {
            if (flight.status === displayStatus) {
                console.log(`{ Destination: '${flight.destination}', Status: '${flight.status}' }`);
            }
        }
    } else {
        for (const flight of flights) {
            if (flight.status === null) {
                flight.status = 'Ready to fly';

                console.log(`{ Destination: '${flight.destination}', Status: '${flight.status}' }`);
            }
        }
    }
}

// 02 (Use object and subobjects) 
function scheduleFlights(input) {
    let flights = {};

    const allFlightsData = input[0];

    for (const flightData of allFlightsData) {
        const [flightName, ...rest] = flightData.split(' ');
        const destination = rest.join(' ');

        flights[flightName] = {
            destination, 
            status: null
        };
    }

    const changedFlightsData = input[1];

    for (const flightData of changedFlightsData) {
        const [flightName, status] = flightData.split(' ');
        if (flights.hasOwnProperty(flightName)) {
            flights[flightName].status = status;
        }
    }

    const displayStatus = input[2].join('');
    if (displayStatus === 'Ready to fly') {
        for (const flightName in flights) {
            if (flights.hasOwnProperty(flightName) && flights[flightName].status === null) {
                flights[flightName].status = 'Ready to fly';
                console.log(`{ Destination: '${flights[flightName].destination}', Status: 'Ready to fly' }`);
            }
        }
    } else {
        for (const flightName in flights) {
            if (flights.hasOwnProperty(flightName) && flights[flightName].status === displayStatus) {
                console.log(`{ Destination: '${flights[flightName].destination}', Status: '${displayStatus}' }`);
            }
        }
    }
}

// 03 (Using Map)
function scheduleFlights(input) {
    const flights = new Map();

    const allFlightsData = input[0];

    allFlightsData.forEach(flightData => {
        const [flightName, ...rest] = flightData.split(' ');
        const destination = rest.join(' ');

        flights.set(flightName, { destination, status: null });
    });

    const changedFlightsData = input[1];

    changedFlightsData.forEach(flightData => {
        const [flightName, status] = flightData.split(' ');
        if (flights.has(flightName)) {
            const flight = flights.get(flightName);
            flight.status = status;
            flights.set(flightName, flight);
        }
    });

    const displayStatus = input[2].join('');

    if (displayStatus === 'Ready to fly') {
        flights.forEach((flight, flightName) => {
            if (flight.status === null) {
                flight.status = 'Ready to fly';
                console.log(`{ Destination: '${flight.destination}', Status: 'Ready to fly' }`);
            }
        });
    } else {
        flights.forEach((flight, flightName) => {
            if (flight.status === displayStatus) {
                console.log(`{ Destination: '${flight.destination}', Status: '${displayStatus}' }`);
            }
        });
    }
}


/* scheduleFlights([
    ['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
    ['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
    ['Cancelled']
]); */

scheduleFlights([
    ['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
    ['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'],
    ['Ready to fly']
]);