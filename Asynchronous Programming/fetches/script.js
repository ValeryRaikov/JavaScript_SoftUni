// The purpose of this file is to play with the fetch API while running a local server on the same machine.
// The main idea is to get used to the fetch API methods

// GET method

const busUrl = 'http://localhost:3030/jsonstore/bus';

// 01
fetch(`${busUrl}`)
    .then(res => res.json())
    .then(data => console.log(data.businfo))
    .catch(err => console.log('Something bad happened!!!'));

fetch(`${busUrl}/businfo`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

// 02
fetch(`${busUrl}/businfo/1308/`)
    .then(res => res.json())
    .then(data => {
        // console.log(data.buses);
        Object.entries(data.buses).forEach(([busId, arrivalTime]) => console.log(`Bus ${busId}: ${arrivalTime} minutes`));
        console.log(data.name);
    })
    .catch(err => console.log(err));


const blogUrl = 'http://localhost:3030/jsonstore/blog';

// 01
fetch(`${blogUrl}`)
    .then(res => res.json())
    .then(data => console.log(data.posts))
    .catch(err => console.log(err));

// 02
fetch(`${blogUrl}/posts/-MSbz99qxklK-5rZWGmt`)
    .then(res => res.json())
    .then(data => {
        console.log(data.body);
        console.log(data.id);
        console.log(data.title);
    })
    .catch(err => console.log(err));

fetch(`${blogUrl}/posts/`)
    .then(res => res.json())
    .then(data => {
        const blog = data['-MSbz99qxklK-5rZWGmt']
        console.log(blog);
        console.log(`Blog body: ${blog.body}\nblog id: ${blog.id}\nblog title: ${blog.title}`);
    })
    .catch(err => console.log(err));

// POST method
const bookUrl = 'http://localhost:3030/jsonstore/books';

// 01
fetch(bookUrl, {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Chronicles of Narnia',
        author: 'C.S.Lewis',
    })
})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

const studentUrl = 'http://localhost:3030/jsonstore/students';

// 02
fetch(studentUrl, {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({
        firstName: 'Valery',
        lastName: 'Raikov',
        facultyNumber: '121222139',
        grade: 5.50,
    })
})
    .then(res => res.json())
    .then(data => {
        console.log(data.firstName);
        console.log(data.lastName);
        console.log(data.facultyNumber);
        console.log(data.grade);
    })
    .catch(err => console.log(err));

// 03
const phonebookUrl = 'http://localhost:3030/jsonstore/phonebook';

fetch(phonebookUrl, {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({
        person: 'Magdalena',
        phone: '+359887123456'
    })
})
    .then(res => res.json())
    .then(data => console.log(`Fetched person ${data.person} with phone ${data.phone}.`))
    .catch(err => console.log(err))
    .finally(console.log('This is just to demonstrate finally state is executed always!'));

// EDIT method
// 01
fetch(`${bookUrl}/2d962e2b-d44d-4955-9382-154aee108d02`, {
    method: 'PUT',
    headers: {
        'content-type': 'application/json',
    },
    body: JSON.stringify({
        title: 'Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
        'author': 'C.S.Lewis',
        '_id': '2d962e2b-d44d-4955-9382-154aee108d02'
    })
});

// 02
fetch(`${studentUrl}/c915fffe-d71b-4498-b273-365afd54dd91`, {
    method: 'PUT',
    headers: {
        'content-type': 'application/json',
    },
    body: JSON.stringify({
        'firstName': 'Valentin',
        'lastName': 'Vasilev',
        'facultyNumber': '121222142',
        'grade': 3.85,
        '_id': 'c915fffe-d71b-4498-b273-365afd54dd91'
    })
});

// DELETE method
// 01
fetch(`${bookUrl}/3e6669e7-e0b4-401a-aa38-cefd20346480`, {
    method: 'DELETE'
})
    .fetch(res => console.log(res))
    .catch(err => console.log(err));

// 02
fetch(`${phonebookUrl}/6012c542-38e1-4660-ba40-1b109c40cb2f`, {
    method: 'DELETE'
})
    .fetch(res => console.log(res))
    .catch(err => console.log(err));