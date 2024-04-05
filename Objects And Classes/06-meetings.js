// 01
function scheduleMeetings(input) {
    let meetings = {}

    for (const record of input) {
        const [day, name] = record.split(' ');

        if (!meetings[day]) {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    Object.entries(meetings).forEach(([day, name]) => console.log(`${day} -> ${name}`));
}

// Other solutions are similar to this and the difference is only in the printing of the object using differenr for loop techniques

/* scheduleMeetings([
'Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George'
]); */