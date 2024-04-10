// 01 Async/Await syntax and easy syntax
function solve() {
    const baseUrl = 'http://localhost:3030/jsonstore/tasks';

    const listContainerElement = document.getElementById('list');

    const loadBtnElement = document.getElementById('load-meals');
    const addMealBtnElement = document.getElementById('add-meal');
    const editMealBtnElement = document.getElementById('edit-meal');

    const getInputFields = () => {
        const foodInputElement = document.getElementById('food');
        const timeInputElement = document.getElementById('time');
        const caloriesInputElement = document.getElementById('calories');

        return [foodInputElement, timeInputElement, caloriesInputElement];
    }

    const clearInputFields = (...inputElements) => {
        inputElements.forEach(inputElement => {
            inputElement.value = '';
        });
    }

    const getAllMeals = async function() {
        listContainerElement.innerHTML = '';

        try {
            const response = await fetch(baseUrl);
            if (!response.ok) {
                throw new Error('Error!');
            }

            const mealsData = await response.json();
            for (const meal of Object.values(mealsData)) {
                const changeBtnElement = document.createElement('button');
                changeBtnElement.textContent = 'Change';
                changeBtnElement.classList.add('change-meal');

                const deleteBtnElement = document.createElement('button');
                deleteBtnElement.textContent = 'Delete';
                deleteBtnElement.classList.add('delete-meal');

                const btnContainerElement = document.createElement('div');
                btnContainerElement.classList.add('meal-buttons');
                btnContainerElement.appendChild(changeBtnElement);
                btnContainerElement.appendChild(deleteBtnElement);

                const foodH2Element = document.createElement('h2');
                foodH2Element.textContent = meal.food;

                const timeH3Element = document.createElement('h3');
                timeH3Element.textContent = meal.time;

                const caloriesH3Element = document.createElement('h3');
                caloriesH3Element.textContent = meal.calories;

                const mealContainerElement = document.createElement('div');
                mealContainerElement.classList.add('meal');

                mealContainerElement.appendChild(foodH2Element);
                mealContainerElement.appendChild(timeH3Element);
                mealContainerElement.appendChild(caloriesH3Element);
                mealContainerElement.appendChild(btnContainerElement);

                listContainerElement.appendChild(mealContainerElement);

                editMealBtnElement.setAttribute('disabled', 'disabled');

                changeBtnElement.addEventListener('click', () => {
                    mealContainerElement.remove();

                    const [foodInputElement, timeInputElement, caloriesInputElement] = getInputFields();
                    foodInputElement.value = foodH2Element.textContent;
                    timeInputElement.value = timeH3Element.textContent;
                    caloriesInputElement.value = caloriesH3Element.textContent;

                    addMealBtnElement.setAttribute('disabled', 'disabled');
                    editMealBtnElement.removeAttribute('disabled', 'disabled');

                    editMealBtnElement.addEventListener('click', async function() {
                        listContainerElement.innerHTML = '';

                        try {
                            const response = await fetch(`${baseUrl}/${meal._id}`, {
                                method: 'PUT',
                                headers: {
                                    'content-type': 'application/json',
                                },
                                body: JSON.stringify({
                                    _id: meal.id,
                                    food: foodInputElement.value,
                                    time: timeInputElement.value,
                                    calories: caloriesInputElement.value,
                                }),
                            });
    
                            if (!response.ok) {
                                throw new Error('Error!');
                            }
    
                            addMealBtnElement.removeAttribute('disabled', 'disabled');
                            editMealBtnElement.setAttribute('disabled', 'disabled');
    
                            getAllMeals();
    
                            clearInputFields(foodInputElement, timeInputElement, caloriesInputElement);
                        } catch (err) {
                            console.error(err);
                        }
                    });
                });

                deleteBtnElement.addEventListener('click', async function() {
                    try {
                        const response = await fetch(`${baseUrl}/${meal._id}`, {
                            method: 'DELETE',
                        });

                        if (!response.ok) {
                            throw new Error('Error!');
                        }

                        mealContainerElement.remove();

                    } catch (err) {
                        console.error(err);
                    }
                });
            }
        } catch (err) {
            console.error(err);
        }
    }

    const addMeal = async function() {
        const [foodInputElement, timeInputElement, caloriesInputElement] = getInputFields();

        try {
            const response = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    food: foodInputElement.value,
                    time: timeInputElement.value,
                    calories: caloriesInputElement.value,
                }),
            });

            if (!response.ok) {
                throw new Error('Error!');
            }

            getAllMeals();
            clearInputFields(foodInputElement, timeInputElement, caloriesInputElement);
        } catch (err) {
            console.error(err);
        }
    }

    loadBtnElement.addEventListener('click', getAllMeals);
    addMealBtnElement.addEventListener('click', addMeal);
}

solve();

/* function solve() {
    const baseUrl = 'http://localhost:3030/jsonstore/tasks';

    const listContainerElement = document.getElementById('list');
    const loadBtnElement = document.getElementById('load-meals');
    const addMealBtnElement = document.getElementById('add-meal');
    const editMealBtnElement = document.getElementById('edit-meal');

    const getInputFields = () => {
        const foodInputElement = document.getElementById('food');
        const timeInputElement = document.getElementById('time');
        const caloriesInputElement = document.getElementById('calories');

        return [foodInputElement, timeInputElement, caloriesInputElement];
    }

    const clearInputFields = (...inputElements) => {
        inputElements.forEach(inputElement => {
            inputElement.value = '';
        });
    }

    const getAllMeals = async function() {
        listContainerElement.innerHTML = '';

        try {
            const response = await fetch(baseUrl);
            if (!response.ok) {
                throw new Error('Error fetching meals.');
            }

            const mealsData = await response.json();
            for (const meal of Object.values(mealsData)) {
                const changeBtnElement = document.createElement('button');
                changeBtnElement.textContent = 'Change';
                changeBtnElement.classList.add('change-meal');

                const deleteBtnElement = document.createElement('button');
                deleteBtnElement.textContent = 'Delete';
                deleteBtnElement.classList.add('delete-meal');

                const btnContainerElement = document.createElement('div');
                btnContainerElement.classList.add('meal-buttons');
                btnContainerElement.appendChild(changeBtnElement);
                btnContainerElement.appendChild(deleteBtnElement);

                const foodH2Element = document.createElement('h2');
                foodH2Element.textContent = meal.food;

                const timeH3Element = document.createElement('h3');
                timeH3Element.textContent = meal.time;

                const caloriesH3Element = document.createElement('h3');
                caloriesH3Element.textContent = meal.calories;

                const mealContainerElement = document.createElement('div');
                mealContainerElement.classList.add('meal');

                mealContainerElement.appendChild(foodH2Element);
                mealContainerElement.appendChild(timeH3Element);
                mealContainerElement.appendChild(caloriesH3Element);
                mealContainerElement.appendChild(btnContainerElement);

                listContainerElement.appendChild(mealContainerElement);

                editMealBtnElement.setAttribute('disabled', 'disabled');

                changeBtnElement.addEventListener('click', () => {
                    mealContainerElement.remove();

                    const [foodInputElement, timeInputElement, caloriesInputElement] = getInputFields();
                    foodInputElement.value = foodH2Element.textContent;
                    timeInputElement.value = timeH3Element.textContent;
                    caloriesInputElement.value = caloriesH3Element.textContent;

                    addMealBtnElement.setAttribute('disabled', 'disabled');
                    editMealBtnElement.removeAttribute('disabled', 'disabled');

                    editMealBtnElement.addEventListener('click', async function() {
                        listContainerElement.innerHTML = '';

                        try {
                            const response = await fetch(`${baseUrl}/${meal._id}`, {
                                method: 'PUT',
                                headers: {
                                    'content-type': 'application/json',
                                },
                                body: JSON.stringify({
                                    _id: meal.id,
                                    food: foodInputElement.value,
                                    time: timeInputElement.value,
                                    calories: caloriesInputElement.value,
                                }),
                            });

                            if (!response.ok) {
                                throw new Error('Failed to update the meal.');
                            }

                            addMealBtnElement.removeAttribute('disabled', 'disabled');
                            editMealBtnElement.setAttribute('disabled', 'disabled');

                            getAllMeals();

                            clearInputFields(foodInputElement, timeInputElement, caloriesInputElement);
                        } catch (err) {
                            console.error(err);
                        }
                    });

                    deleteBtnElement.addEventListener('click', function() {
                        fetch(`${baseUrl}/${meal._id}`, {
                            method: 'DELETE',
                        })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Failed to delete the meal.');
                            }
                            mealContainerElement.remove();
                        })
                        .catch(err => {
                            console.error(err);
                        });
                    });
                });
            }
        } catch (err) {
            console.error(err);
        }
    }

    const addMeal = async function() {
        const [foodInputElement, timeInputElement, caloriesInputElement] = getInputFields();

        try {
            const response = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    food: foodInputElement.value,
                    time: timeInputElement.value,
                    calories: caloriesInputElement.value,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to add the meal.');
            }

            getAllMeals();
            clearInputFields(foodInputElement, timeInputElement, caloriesInputElement);
        } catch (err) {
            console.error(err);
        }
    }

    loadBtnElement.addEventListener('click', getAllMeals);
    addMealBtnElement.addEventListener('click', addMeal);
}

solve(); */