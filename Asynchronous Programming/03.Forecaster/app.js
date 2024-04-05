function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/forecaster';
    const weatherButtonElement = document.getElementById('submit');
    const locationInputElement = document.getElementById('location');
    const mainForecastDivElement = document.getElementById('forecast');

    let locationCode, location, lowT, highT, condition;

    const symbols = {
        'Sunny': '&#x2600;',
        'Partly sunny': '&#x26C5;',
        'Overcast': '&#x2601;',
        'Rain': '&#x2614;',
        'Degrees': '&#176;'
    };

    const displayError = () => {
        mainForecastDivElement.style.display = 'block';
        mainForecastDivElement.textContent = 'Error';
    };

    weatherButtonElement.addEventListener('click', () => {
        mainForecastDivElement.style.display = 'block';

        fetch(`${baseUrl}/locations`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(locationArray => {
                const locationObj = locationArray.find(obj => obj.name === locationInputElement.value);
                if (!locationObj) {
                    throw new Error('Location not found');
                }
                locationCode = locationObj.code;
                location = locationObj.name;
                
                return Promise.all([
                    fetch(`${baseUrl}/today/${locationCode}`).then(response => response.json()),
                    fetch(`${baseUrl}/upcoming/${locationCode}`).then(response => response.json())
                ]);
            })
            .then(([todayData, upcomingData]) => {
                [location, lowT, highT, condition] = [todayData.name, todayData.forecast.low, todayData.forecast.high, todayData.forecast.condition];

                const currentDiv = document.getElementById('current');
                const forecastsDiv = document.createElement('div');
                forecastsDiv.className = 'forecasts';

                const spanSymb = document.createElement('span');
                spanSymb.className = 'condition symbol';
                spanSymb.innerHTML = symbols[condition];

                const spanMainCond = document.createElement('span');
                spanMainCond.className = 'condition';

                const spanLoc = document.createElement('span');
                spanLoc.className = 'forecast-data';
                spanLoc.textContent = location; 
                const spanTemp = document.createElement('span');
                spanTemp.className = 'forecast-data';
                spanTemp.innerHTML = `${lowT}${symbols['Degrees']}/${highT}${symbols['Degrees']}`; 
                const spanCond = document.createElement('span');
                spanCond.className = 'forecast-data';
                spanCond.textContent = condition;

                spanMainCond.appendChild(spanLoc);
                spanMainCond.appendChild(spanTemp);
                spanMainCond.appendChild(spanCond);

                forecastsDiv.appendChild(spanSymb);
                forecastsDiv.appendChild(spanMainCond);
                currentDiv.appendChild(forecastsDiv);

                const upcomingDiv = document.getElementById('upcoming');
                const forecastInfoDiv = document.createElement('div');
                forecastInfoDiv.className = 'forecast-info';

                for (const oneDay of upcomingData.forecast) {  
                    [lowT, highT, condition] = [oneDay.low, oneDay.high, oneDay.condition];
                    const spanUpcoming = document.createElement('span');
                    spanUpcoming.className ='upcoming';

                    const symbolSpan = document.createElement('span');
                    symbolSpan.className = 'symbol';
                    symbolSpan.innerHTML = symbols[condition];
                    spanUpcoming.appendChild(symbolSpan);

                    const spanTemp = document.createElement('span');
                    spanTemp.className = 'forecast-data';
                    spanTemp.innerHTML = `${lowT}${symbols['Degrees']}/${highT}${symbols['Degrees']}`;
                    spanUpcoming.appendChild(spanTemp);

                    const spanCond = document.createElement('span');
                    spanCond.className = 'forecast-data';
                    spanCond.textContent = condition;
                    spanUpcoming.appendChild(spanCond);

                    forecastInfoDiv.appendChild(spanUpcoming);
                }
                
                upcomingDiv.appendChild(forecastInfoDiv);
            })
            .catch(error => {
                console.error('Error:', error);
                displayError();
            });
    });
}

attachEvents();
