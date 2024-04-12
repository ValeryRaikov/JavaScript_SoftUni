window.addEventListener("load", solve);

function solve() {
    const addBtnElement = document.querySelector('#add-btn');
    const clearBtnElement = document.querySelector('.btn.clear');

    addBtnElement.addEventListener('click', () => {
        const sureListUlElement = document.querySelector('#sure-list');

        const playerNameInputElement = document.querySelector('#player');
        const scoreInputElement = document.querySelector('#score');
        const roundInputElement = document.querySelector('#round');

        const playerName = playerNameInputElement.value;
        const score = scoreInputElement.value;
        const round = roundInputElement.value;

        const playerNamePElement = document.createElement('p');
        playerNamePElement.textContent = playerName;

        const scorePElement = document.createElement('p');
        scorePElement.textContent = `Score: ${score}`;

        const roundPElement = document.createElement('p');
        roundPElement.textContent = `Round: ${round}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(playerNamePElement);
        articleElement.appendChild(scorePElement);
        articleElement.appendChild(roundPElement);

        const editBtnElement = document.createElement('button');
        editBtnElement.classList.add('btn', 'edit');
        editBtnElement.textContent = 'edit';

        const okBtnElement = document.createElement('button');
        okBtnElement.classList.add('btn', 'ok');
        okBtnElement.textContent = 'ok';

        const liElement = document.createElement('li');
        liElement.classList.add('dart-item');
        liElement.appendChild(articleElement);
        liElement.appendChild(editBtnElement);
        liElement.appendChild(okBtnElement);

        sureListUlElement.appendChild(liElement);

        addBtnElement.disabled = true;

        playerNameInputElement.value = '';
        scoreInputElement.value = '';
        roundInputElement.value = '';

        editBtnElement.addEventListener('click', () => {
            playerNameInputElement.value = playerName;
            scoreInputElement.value = score;
            roundInputElement.value = round;

            liElement.remove();

            addBtnElement.disabled = false;
        });

        okBtnElement.addEventListener('click', () => {
            const scoreboardListUlElement = document.querySelector('#scoreboard-list');

            liElement.removeChild(editBtnElement);
            liElement.removeChild(okBtnElement);

            scoreboardListUlElement.appendChild(liElement);

            sureListUlElement.removeChild(liElement);

            addBtnElement.disabled = false;
        });
    });

    clearBtnElement.addEventListener('click', () => {
        location.reload(true);
    });
}
  
solve();
