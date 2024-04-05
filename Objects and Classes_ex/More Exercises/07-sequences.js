// 01
function storeSequences(input) {
    let sequences = {};
    
    for (const row of input) {
        const sequence = JSON.parse(row);
        const sortedSequence = sequence.sort((a, b) => b - a);

        if (sequences.hasOwnProperty(sortedSequence)) {
            delete sequences[sortedSequence];
        }

        sequences[sortedSequence] = sequence;
    }

    Object.values(sequences)
        .sort((a, b) => a.length - b.length)
        .forEach(sequence => console.log(`[${sequence.join(', ')}]`));
}

// 02
function storeSequences(input) {
    let sequencesMap = new Map();
    
    for (const row of input) {
        const sequence = JSON.parse(row);
        const sortedSequence = sequence.sort((a, b) => b - a);

        const key = JSON.stringify(sortedSequence);

        sequencesMap.set(key, sortedSequence);
    }

    Array.from(sequencesMap.values())
        .sort((a, b) => a.length - b.length)
        .forEach(sequence => console.log(`[${sequence.join(', ')}]`));
}

/* storeSequences([
    "[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"
]);

storeSequences([
    "[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"
]); */