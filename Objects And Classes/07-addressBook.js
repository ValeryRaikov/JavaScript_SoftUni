// 01
function storeAddress(input) {
    let addresses = {};

    for (const record of input) {
        const [name, address] = record.split(':');
        addresses[name] = address;
    }

    Object.entries(addresses).sort(
        (a, b) => a[0].localeCompare(b[0])
    ).forEach(([name, address]) => console.log(`${name} -> ${address}`));
}

/* storeAddress([
'Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd'
]); */