const baseUrl = 'http://localhost:3030/jsonstore/tasks';

const loadHistoryBtnElement = document.getElementById('load-history');
const addWeatherBtnElement = document.getElementById('add-weather');
const editWeatherBtnElement = document.getElementById('edit-weather');

const locationInputElement = document.getElementById('location');
const temperatureInputElement = document.getElementById('temperature');
const dateInputElement = document.getElementById('date');

const clearInputFields = function(...fields) {
    fields.forEach(field => field.value = '');
}

const loadHistory = function() {
    const listDivElement = document.getElementById('list');

    listDivElement.innerHTML = '';

    fetch(baseUrl)
        .then(res => {
            if (!res.ok) {
                return console.error('Something went wrong!');
            }

            return res.json();
        })
        .then(weatherData => {
            Object.values(weatherData).forEach(weather => {
                const locationH2Element = document.createElement('h2');
                locationH2Element.textContent = weather.location;
                const dateH3Element = document.createElement('h3');
                dateH3Element.textContent = weather.date;
                const tempH3Element = document.createElement('h3');
                tempH3Element.classList.add('celsius');
                tempH3Element.textContent = weather.temperature;

                const changeBtnElement = document.createElement('button');
                changeBtnElement.classList.add('change-btn');
                changeBtnElement.textContent = 'Change';

                const deleteBtnElement = document.createElement('button');
                deleteBtnElement.classList.add('delete-btn');
                deleteBtnElement.textContent = 'Delete';

                const btnContainerElement = document.createElement('div');
                btnContainerElement.classList.add('buttons-container');
                btnContainerElement.appendChild(changeBtnElement);
                btnContainerElement.appendChild(deleteBtnElement);

                const containerElement = document.createElement('div');
                containerElement.classList.add('container');
                containerElement.appendChild(locationH2Element);
                containerElement.appendChild(dateH3Element);
                containerElement.appendChild(tempH3Element);
                containerElement.appendChild(btnContainerElement);

                const docFragment = document.createDocumentFragment();
                docFragment.appendChild(containerElement);

                listDivElement.appendChild(docFragment);

                editWeatherBtnElement.setAttribute('disabled', 'disabled');

                const changeWeather = function() {
                    locationInputElement.value = weather.location;
                    temperatureInputElement.value = weather.temperature;
                    dateInputElement.value = weather.date;

                    containerElement.remove();

                    addWeatherBtnElement.setAttribute('disabled', 'disabled');
                    editWeatherBtnElement.removeAttribute('disabled');
                }

                const editWeather = function() {
                    fetch(`${baseUrl}/${weather._id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            location: locationInputElement.value,
                            temperature: temperatureInputElement.value,
                            date: dateInputElement.value,
                        }),
                    })
                        .then(res => {
                            if (!res.ok) {
                                return console.error('Something went wrong!');
                            }
                        });

                    addWeatherBtnElement.removeAttribute('disabled');
                    editWeatherBtnElement.setAttribute('disabled', 'disabled');

                    loadHistory();
                }

                const deleteWeather = function() {
                    fetch(`${baseUrl}/${weather._id}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    })
                        .then(res => {
                            if (!res.ok) {
                                return console.error('Something went wrong!');
                            }
                        });

                    loadHistory();
                }

                changeBtnElement.addEventListener('click', changeWeather);
                editWeatherBtnElement.addEventListener('click', editWeather);
                deleteBtnElement.addEventListener('click', deleteWeather);
            });
        });
}

const addWeather = function() {
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            location: locationInputElement.value,
            temperature: temperatureInputElement.value,
            date: dateInputElement.value,
        }),
    })
        .then(res => {
            if (!res.ok) {
                return console.error('Something went wrong!');
            }
        });

        loadHistory();
        clearInputFields(locationInputElement, temperatureInputElement, dateInputElement);
}

loadHistoryBtnElement.addEventListener('click', loadHistory);
addWeatherBtnElement.addEventListener('click', addWeather);