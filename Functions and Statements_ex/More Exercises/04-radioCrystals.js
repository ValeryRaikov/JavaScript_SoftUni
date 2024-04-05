// 01 This solution is not working!!!
function crystalOperations(inputChunks) {
    const targetThickness = inputChunks.shift();
    
    for (let crystal of inputChunks) {
        console.log(`Processing chunk ${crystal} microns`);

        while (crystal > targetThickness) {
            if (crystal / 4 >= targetThickness) {
                crystal /= 4;
                console.log('Cut');
            } else if (crystal * 0.8 >= targetThickness) {
                crystal *= 0.8;
                console.log('Lap');
            } else if (crystal - 20 >= targetThickness) {
                crystal -= 20;
                console.log('Grind');
            } else if (crystal - 2 >= targetThickness) {
                crystal -= 2;
                console.log('Etch');
            } else {
                crystal++;
                console.log('X-ray');
            }
        }

        if (crystal < targetThickness) {
            crystal = Math.floor(crystal);
            console.log('Transporting and washing');
        }

        console.log(`Finished crystal ${crystal} microns`);
    }
}

// crystalOperations([1375, 50000]);
// crystalOperations([1000, 4000, 8100]);