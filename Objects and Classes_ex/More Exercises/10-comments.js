// 01
function storeComments(input) {
    const users = new Set();
    const articles = new Set();
    const comments = {};

    for (const row of input) {
        if (row.startsWith('user')) {
            const [, username] = row.split(' ');
            users.add(username);
        } else if (row.startsWith('article')) {
            const [, article] = row.split(' ');
            articles.add(article);
        } else {
            const [, username, , article, comment] = row.split(' ');
            if (users.has(username) && articles.has(article)) {
                if (!comments.hasOwnProperty(article)) {
                    comments[article] = [];
                }
                comments[article].push({ username, comment });
            }
        }
    }

    const sortedArticles = Object.entries(comments)
        .sort((a, b) => b[1].length - a[1].length);

    for (const [article, commentList] of sortedArticles) {
        console.log(`Comments on ${article}`);

        commentList.sort((a, b) => a.username.localeCompare(b.username))
            .forEach(({ username, comment }) => console.log(`--- From user ${username}: ${comment}`));
    }
}

// storeComments(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much']);