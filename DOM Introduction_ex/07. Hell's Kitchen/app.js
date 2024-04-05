// 01 (Map solution but doesn't work...)
function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        const inputText = document.querySelector('#inputs > textarea').value;
        const bestRestaurantElement = document.querySelector('#bestRestaurant > p');
        const bestWorkersElement = document.querySelector('#workers > p');

        let restaurantsCollection = new Map();

        const restaurantsData = inputText.split(', ');
        for (const restaurantData of restaurantsData) {
            const [restaurantName, ...workersData] = restaurantData.split(' - ');
            const workers = new Map();

            for (const workerData of workersData) {
                const [workerName, salary] = workerData.split(' ');
                workers.set(workerName, Number(salary));
            }

            if (restaurantsCollection.has(restaurantName)) {
                const existingWorkers = restaurantsCollection.get(restaurantName).workers;
                for (const [workerName, salary] of workers) {
                    if (!existingWorkers.has(workerName)) {
                        existingWorkers.set(workerName, salary);
                    }
                }
            } else {
                restaurantsCollection.set(restaurantName, { workers });
            }
        }

        let bestRestaurant = '';
        let bestAvgSalary = -Number.MAX_SAFE_INTEGER;

        for (const [restaurantName, { workers }] of restaurantsCollection) {
            const avgSalary = Array.from(workers.values()).reduce((total, salary) => total + salary, 0) / workers.size;
            if (avgSalary > bestAvgSalary) {
                bestRestaurant = restaurantName;
                bestAvgSalary = avgSalary;
            }
        }

        const bestRestaurantData = restaurantsCollection.get(bestRestaurant);
        const bestSalary = Math.max(...bestRestaurantData.workers.values());

        const bestRestaurantOutput = `Name: ${bestRestaurant} Average Salary: ${bestAvgSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;
        const workersOutput = Array.from(bestRestaurantData.workers).map(([name, salary]) => `Name: ${name} With Salary: ${salary}`).join(' ');

        bestRestaurantElement.textContent = bestRestaurantOutput;
        bestWorkersElement.textContent = workersOutput;
    }
}
