function loadCommits() {
    const usernameElement = document.getElementById('username');
    const repoElement = document.getElementById('repo');
    const commitsListElement = document.getElementById('commits');

    commitsListElement.textContent = '';

    const username = usernameElement.value;
    const repo = repoElement.value;
    fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status} (${response.statusText})`);
            }
            return response.json();
        })
        .then(commits => {
            commits.forEach(commit => {
                const listItemElement = document.createElement('li');
                listItemElement.textContent = `${commit.commit.author.name}: ${commit.commit.message}`;
                commitsListElement.appendChild(listItemElement);
            });
        })
        .catch(error => {
            console.error('Error loading commits:', error);
            const errorListItemElement = document.createElement('li');
            errorListItemElement.textContent = `Error: ${error.status} (Not found)`;
            commitsListElement.appendChild(errorListItemElement);
        });
}
