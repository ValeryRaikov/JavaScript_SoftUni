// 01
function operateMovies(input) {
    const addMovieCmd = 'addMovie';
    const directedByCmd = 'directedBy';
    const onDateCmd = 'onDate';

    let movies = [];

    for (const row of input) {
        if (row.includes(addMovieCmd)) {
            const movieName = row.substring(addMovieCmd.length + 1);

            movies.push({
                name: movieName,
            });            
        } else if (row.includes(directedByCmd)) {
            const [movieName, director] = row.split(` ${directedByCmd} `);

            for (const movie of movies) {
                if (movie.name === movieName) {
                   movie.director = director;
                }
            }
        } else {
            const [movieName, date] = row.split(` ${onDateCmd} `);

            for (const movie of movies) {
                if (movie.name === movieName) {
                    movie.date = date;
                }
            }
        }
    }

    movies
        .filter(movie => movie.director && movie.date)
        .forEach(movie => console.log(JSON.stringify(movie)));
}

// 02
function solve(input) {
    const movies = [];

    for (const row of input) {
        const addMovieCommand = 'addMovie';
        const directedByCommand = 'directedBy';
        const onDateCommand = 'onDate';

        if (row.includes(addMovieCommand)) {
            const movie = {
                name: row.substring(addMovieCommand.length + 1),
            };

            movies.push(movie);
        } else if (row.includes(directedByCommand)) {
            const [movieName, director] = row.split(` ${directedByCommand} `);
            const movie = movies.find(movie => movie.name === movieName);

            if (movie) {
                movie.director = director;
            }
        } else if (row.includes(onDateCommand)) {
            const [movieName, date] = row.split(` ${onDateCommand} `);
            const movie = movies.find(movie => movie.name === movieName);

            if (movie) {
                movie.date = date;
            }
        }
    }

    movies
        .filter(movie => movie.director && movie.date)
        .forEach(movie => console.log(JSON.stringify(movie)));
}

/* operateMovies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]); */