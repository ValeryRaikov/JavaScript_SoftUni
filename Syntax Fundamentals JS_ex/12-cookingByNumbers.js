function perform(numAsString, a1, a2, a3, a4, a5) {
    const operations = [a1, a2, a3, a4, a5];

    let number = Number(numAsString);

    for (let i = 0; i < 5; i++) {
        let currOperation = operations[i];

        switch (currOperation) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number += 1;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number *= 0.8;
                break;
            default:
                console.log('Error!');
        }

        console.log(number);
    }
}

// perform('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// perform('9', 'dice', 'spice', 'chop', 'bake', 'fillet');