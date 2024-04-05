/*
function speedLimit(speed, area) {
    let motorwaySpeed = 130;
    let interstateSpeed = 90;
    let citySpeed = 50;
    let residentialSpeed = 20;

    let speedingDiff;
    let status;

    switch (area) {
        case 'motorway':
            if (speed <= motorwaySpeed) {
                console.log(`Driving ${speed} km/h in a ${motorwaySpeed} zone`);
            } else {
                speedingDiff = speed - motorwaySpeed;
                checkSpeeding(speedingDiff);
            }
            break;
        case 'interstate':
            if (speed <= interstateSpeed) {
                console.log(`Driving ${speed} km/h in a ${interstateSpeed} zone`);
            } else {
                speedingDiff = speed - interstateSpeed;
                checkSpeeding(speedingDiff);
            }
            break;
        case 'city':
            if (speed <= citySpeed) {
                console.log(`Driving ${speed} km/h in a ${citySpeed} zone`);
            } else {
                speedingDiff = speed - citySpeed;
                checkSpeeding(speedingDiff);
            }
            break;
        default:
            if (speed <= residentialSpeed) {
                console.log(`Driving ${speed} km/h in a ${residentialSpeed} zone`);
            } else {
                speedingDiff = speed - residentialSpeed;
                checkSpeeding(speedingDiff);
            }
            break;
    }

    function checkSpeeding(diff) {
        if (diff <= 20) {
            status = 'speeding';
        } else if (diff <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${diff} km/h faster than the allowed speed - ${status}`);
    }
}

speedLimit(40, 'city');
speedLimit(21, 'residential');
speedLimit(120, 'interstate');
*/

function speedLimit(speed, area) {
    let motorwaySpeed = 130;
    let interstateSpeed = 90;
    let citySpeed = 50;
    let residentialSpeed  = 20;

    let speedingDiff;
    let status;

    if (area == 'motorway') {
        if (speed <= motorwaySpeed) {
            console.log(`Driving ${speed} km/h in a ${motorwaySpeed} zone`);
        } else {
            speedingDiff = speed - motorwaySpeed;

            if (speedingDiff <= 20) {
                status = 'speeding';
            } else if (speedingDiff <= 40) {
                status = 'excessive speeding'
            } else {
                status = 'reckless driving'
            }

            console.log(`The speed is ${speedingDiff} km/h faster than the allowed speed of ${motorwaySpeed} - ${status}`);
        }
    } else if (area == 'interstate') {
        if (speed <= interstateSpeed) {
            console.log(`Driving ${speed} km/h in a ${interstateSpeed} zone`);
        } else {
            speedingDiff = speed - interstateSpeed;

            if (speedingDiff <= 20) {
                status = 'speeding';
            } else if (speedingDiff <= 40) {
                status = 'excessive speeding'
            } else {
                status = 'reckless driving'
            }

            console.log(`The speed is ${speedingDiff} km/h faster than the allowed speed of ${interstateSpeed} - ${status}`);
        }
    } else if (area == 'city') {
        if (speed <= citySpeed ) {
            console.log(`Driving ${speed} km/h in a ${citySpeed} zone`);
        } else {
            speedingDiff = speed - citySpeed;

            if (speedingDiff <= 20) {
                status = 'speeding';
            } else if (speedingDiff <= 40) {
                status = 'excessive speeding'
            } else {
                status = 'reckless driving'
            }

            console.log(`The speed is ${speedingDiff} km/h faster than the allowed speed of ${citySpeed} - ${status}`);
        }
    } else {
        if (speed <= residentialSpeed) {
            console.log(`Driving ${speed} km/h in a ${residentialSpeed} zone`);
        } else {
            speedingDiff = speed - residentialSpeed;

            if (speedingDiff <= 20) {
                status = 'speeding';
            } else if (speedingDiff <= 40) {
                status = 'excessive speeding'
            } else {
                status = 'reckless driving'
            }

            console.log(`The speed is ${speedingDiff} km/h faster than the allowed speed of ${residentialSpeed} - ${status}`);
        }
    }
}