const baseUrl = 'http://localhost:3030/jsonstore/games';

const loadGamesBtnElement = document.getElementById('load-games');
const addGameBtnElement = document.getElementById('add-game');
const editGameBtnElement = document.getElementById('edit-game');

const gameNameInputElement = document.getElementById('g-name');
const typeInputElement = document.getElementById('type');
const playersInputElement = document.getElementById('players');

const clearInputFields = function (...fields) {
    fields.forEach(field => field.value = '');
}

const loadAllGames = async function () {
    const gamesListDivElement = document.getElementById('games-list');
    gamesListDivElement.innerHTML = '';

    try {
        const res = await fetch(baseUrl);

        if (!res.ok) {
            throw new Error();
        }

        const gamesData = await res.json();

        for (const game of Object.values(gamesData)) {
            const gameNamePElement = document.createElement('p');
            gameNamePElement.textContent = game.name;
            const playersPElement = document.createElement('p');
            playersPElement.textContent = game.players;
            const typePElement = document.createElement('p');
            typePElement.textContent = game.type;

            const contentDivElement = document.createElement('div');
            contentDivElement.classList.add('content');
            contentDivElement.appendChild(gameNamePElement);
            contentDivElement.appendChild(playersPElement);
            contentDivElement.appendChild(typePElement);

            const changeBtnElement = document.createElement('button');
            changeBtnElement.classList.add('change-btn');
            changeBtnElement.textContent = 'Change';
            const deleteBtnElement = document.createElement('button');
            deleteBtnElement.classList.add('delete-btn');
            deleteBtnElement.textContent = 'Delete';

            const buttonDivElement = document.createElement('div');
            buttonDivElement.classList.add('buttons-container');
            buttonDivElement.appendChild(changeBtnElement);
            buttonDivElement.appendChild(deleteBtnElement);

            const boardGameDivElement = document.createElement('div');
            boardGameDivElement.classList.add('board-game');
            boardGameDivElement.appendChild(contentDivElement);
            boardGameDivElement.appendChild(buttonDivElement);

            gamesListDivElement.appendChild(boardGameDivElement);

            editGameBtnElement.setAttribute('disabled', 'disabled');

            changeBtnElement.addEventListener('click', () => {
                gameNameInputElement.value = game.name;
                typeInputElement.value = game.type;
                playersInputElement.value = game.players;

                boardGameDivElement.remove();

                editGameBtnElement.removeAttribute('disabled');
                addGameBtnElement.setAttribute('disabled', 'disabled');
            });

            editGameBtnElement.addEventListener('click', async () => {
                const gamesListDivElement = document.getElementById('games-list');
                gamesListDivElement.innerHTML = '';

                try {
                    const res = await fetch(`${baseUrl}/${game._id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            name: gameNameInputElement.value,
                            type: typeInputElement.value,
                            players: playersInputElement.value,
                            _id: game._id,
                        }),
                    });

                    if (!res.ok) {
                        throw new Error();
                    }

                    editGameBtnElement.setAttribute('disabled', 'disabled');
                    addGameBtnElement.removeAttribute('disabled');

                    await loadAllGames();
                    clearInputFields(gameNameInputElement, typeInputElement, playersInputElement);
                } catch (err) {
                    console.error('Failed to edit game information!');
                }
            });

            deleteBtnElement.addEventListener('click', async () => {
                try {
                    const res = await fetch(`${baseUrl}/${game._id}`, {
                        method: 'DELETE',
                    });

                    if (!res.ok) {
                        throw new Error();
                    }

                    await loadAllGames();
                } catch (err) {
                    console.error('Failed to delete game!');
                }
            });
        }
    } catch (err) {
        console.error('Failed to fetch data!');
    }
}

const addGame = async function () {
    try {
        const res = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: gameNameInputElement.value,
                type: typeInputElement.value,
                players:playersInputElement.value,
            }),
        });

        if (!res.ok) {
            throw new Error();
        }
        clearInputFields(gameNameInputElement, typeInputElement, playersInputElement);
        await loadAllGames();
    } catch (err) {
        console.error('Failed to add game to the server!');
    }
}

loadGamesBtnElement.addEventListener('click', loadAllGames);
addGameBtnElement.addEventListener('click', addGame);