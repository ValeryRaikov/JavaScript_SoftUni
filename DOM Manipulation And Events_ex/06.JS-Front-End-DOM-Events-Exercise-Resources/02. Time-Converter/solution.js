// 01
function attachEventsListeners() {
    const daysInputElement = document.getElementById('days');
    const hoursInputElement = document.getElementById('hours');
    const minutesInputElement = document.getElementById('minutes');
    const secondsInputElement = document.getElementById('seconds');

    const daysButtonElement = document.getElementById('daysBtn');
    const hoursButtonElement = document.getElementById('hoursBtn');
    const minutesButtonElement = document.getElementById('minutesBtn');
    const secondsButtonElement = document.getElementById('secondsBtn');

    daysButtonElement.addEventListener('click', () => {
        hoursInputElement.value = Number(daysInputElement.value) * 24;
        minutesInputElement.value = Number(daysInputElement.value) * 24 * 60;
        secondsInputElement.value = Number(daysInputElement.value) * 24 * 60 * 60;
    });

    hoursButtonElement.addEventListener('click', () => {
        daysInputElement.value = Number(hoursInputElement.value) / 24;
        minutesInputElement.value = Number(hoursInputElement.value) * 60;
        secondsInputElement.value = Number(hoursInputElement.value) * 60 * 60;
    });

    minutesButtonElement.addEventListener('click', () => {
        daysInputElement.value = Number(minutesInputElement.value) / 24 / 60;
        hoursInputElement.value = Number(minutesInputElement.value) / 60;
        secondsInputElement.value = Number(minutesInputElement.value) * 60;
    });

    secondsButtonElement.addEventListener('click', () => {
        daysInputElement.value = Number(secondsInputElement.value) / 24 / 60 / 60;
        hoursInputElement.value = Number(secondsInputElement.value) / 60 / 60;
        minutesInputElement.value = Number(secondsInputElement.value) / 60;
    });
}

// 02
function attachEventsListeners() {
    const inputElements = document.querySelectorAll('input[type=text]');
    const convertButtonElements = document.querySelectorAll('input[type=button][value=Convert]');

    const toSeconds = (value, unit) => {
        switch (unit) {
            case 'days':
                return value * 24 * 60 * 60;
            case 'hours':
                return value * 60 * 60;
            case 'minutes':
                return value * 60;
            case 'seconds':
                return value;
        }
    };

    const converters = {
        days(seconds) {
            return seconds / 60 / 60 / 24;
        },
        hours(seconds) {
            return seconds / 60 / 60;
        },
        minutes(seconds) {
            return seconds / 60;
        },
        seconds(seconds) {
            return seconds;
        },
    }

    for (const buttonElement of convertButtonElements) {
        buttonElement.addEventListener('click', (e) => {
            const currentInputElement = e.currentTarget.previousElementSibling;
            
            for (const inputElement of inputElements) {
                const seconds = toSeconds(Number(currentInputElement.value), currentInputElement.id);
                inputElement.value = converters[inputElement.id](seconds);
            }
        });
    }
}

// 03
function attachEventsListeners() {
    const inputElements = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    };

    const buttonElements = {
        daysBtn: document.getElementById('daysBtn'),
        hoursBtn: document.getElementById('hoursBtn'),
        minutesBtn: document.getElementById('minutesBtn'),
        secondsBtn: document.getElementById('secondsBtn')
    };

    const conversions = {
        days: {
            hours: (days) => days * 24,
            minutes: (days) => days * 24 * 60,
            seconds: (days) => days * 24 * 60 * 60
        },
        hours: {
            days: (hours) => hours / 24,
            minutes: (hours) => hours * 60,
            seconds: (hours) => hours * 60 * 60
        },
        minutes: {
            days: (minutes) => minutes / 24 / 60,
            hours: (minutes) => minutes / 60,
            seconds: (minutes) => minutes * 60
        },
        seconds: {
            days: (seconds) => seconds / 24 / 60 / 60,
            hours: (seconds) => seconds / 60 / 60,
            minutes: (seconds) => seconds / 60
        }
    };

    for (const [sourceUnit, targets] of Object.entries(conversions)) {
        for (const [targetUnit, conversionFn] of Object.entries(targets)) {
            buttonElements[`${sourceUnit}Btn`].addEventListener('click', () => {
                inputElements[targetUnit].value = conversionFn(Number(inputElements[sourceUnit].value));
            });
        }
    }
}