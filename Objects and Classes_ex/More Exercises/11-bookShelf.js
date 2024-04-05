// 01
function storeBooks(input) {
    const shelves = {};

    for (const line of input) {
        if (line.includes('->')) {
            const [shelfId, shelfGenre] = line.split(' -> ');
            shelves[shelfId] = { genre: shelfGenre, books: [] };
        } else {
            const [title, author, genre] = line.split(/: |, /);
            const shelf = Object.values(shelves).find(shelf => shelf.genre === genre);
            if (shelf) {
                shelf.books.push({ title, author });
            }
        }
    }

    const sortedShelves = Object.entries(shelves)
        .sort((a, b) => b[1].books.length - a[1].books.length);

    for (const [shelfId, { genre, books }] of sortedShelves) {
        console.log(`${shelfId} ${genre}: ${books.length}`);
        books.sort((a, b) => a.title.localeCompare(b.title))
            .forEach(({ title, author }) => console.log(`--> ${title}: ${author}`));
    }
}

// storeBooks(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history']);