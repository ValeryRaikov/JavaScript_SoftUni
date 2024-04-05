function loadRepos() {
    fetch('https://api.github.com/users/testnakov/repos')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('res').textContent = data;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}