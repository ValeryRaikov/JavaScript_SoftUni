function loadRepos() {
    const usernameElement = document.getElementById('username');
    const reposListElement = document.getElementById('repos');

    reposListElement.textContent = '';

    const username = usernameElement.value;
    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            data.forEach(repo => {
                const listItemElement = document.createElement('li');
                const linkElement = document.createElement('a');
                linkElement.href = repo.html_url;
                linkElement.textContent = repo.full_name;
                listItemElement.appendChild(linkElement);
                reposListElement.appendChild(listItemElement);
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            const errorItemElement = document.createElement('li');
            errorItemElement.textContent = `Error: ${error.message}`;
            reposListElement.appendChild(errorItemElement);
        });

	usernameElement.value = '';
}
