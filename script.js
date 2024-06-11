const PI = 3.1415;
const radius = 5;
const minSpacePerPlant = 0.8;
const maxPlants = Math.floor(PI * radius * radius / minSpacePerPlant);

function predictPlantGrowth(weeks) {
    let plantCount = 20; // Starting with 20 plants
    const growthResultsElement = document.querySelector("#growthResults ul");
    growthResultsElement.innerHTML = ""; // Clear previous results

    for (let currentWeek = 1; currentWeek <= weeks; currentWeek++) {
        plantCount *= 2; // Plants double in number every week
        let message = "";

        if (plantCount > maxPlants * 0.8) {
            message = `Week ${currentWeek}: Prune the plants to control growth. Plant count: ${plantCount}`;
        } else if (plantCount >= maxPlants * 0.5 && plantCount <= maxPlants * 0.8) {
            message = `Week ${currentWeek}: Monitor the plant growth. Plant count: ${plantCount}`;
        } else {
            message = `Week ${currentWeek}: Plant more plants. Plant count: ${plantCount}`;
        }

        const listItem = document.createElement("li");
        listItem.textContent = message;
        growthResultsElement.appendChild(listItem);
    }
}

function calculateAdditionalSpaceAndRadius(weeks, initialPlantCount) {
    let plantCount = initialPlantCount;
    for (let i = 0; i < weeks; i++) {
        plantCount *= 2; // Plants double in number every week
    }

    const totalSpaceRequired = plantCount * minSpacePerPlant;
    const originalSpace = PI * radius * radius;
    const additionalSpaceRequired = totalSpaceRequired - originalSpace;
    const expandedRadius = Math.sqrt((originalSpace + additionalSpaceRequired) / PI);

    const additionalSpaceElement = document.querySelector("#additionalSpace p");
    const expandedRadiusElement = document.querySelector("#expandedRadius p");

    if (plantCount > maxPlants * 0.8) {
        additionalSpaceElement.textContent = "Prune the plants to control growth.";
        expandedRadiusElement.textContent = "N/A (exceeds garden capacity)";
    } else {
        additionalSpaceElement.textContent = `${additionalSpaceRequired.toFixed(2)} square meters`;
        expandedRadiusElement.textContent = `${expandedRadius.toFixed(2)} meters`;
    }
}

// Predict growth after 1, 2, and 3 weeks
predictPlantGrowth(3);

// Calculate additional space required and expanded garden radius after 10 weeks for 100 plants
calculateAdditionalSpaceAndRadius(10, 100);



// Function to calculate the maximum number of plants that can fit in the garden
function calculateMaxPlants(radius, minSpacePerPlant) {
    return Math.floor(PI * radius * radius / minSpacePerPlant);
}

try {
    // Original information
    const maxPlants = calculateMaxPlants(radius, minSpacePerPlant);
    let plantCount = 100; // Starting with 100 plants

    // Predict plant growth after a specific number of weeks
    function predictPlantGrowth(weeks) {
        const growthResultsElement = document.querySelector("#growthResults ul");
        growthResultsElement.innerHTML = ""; // Clear previous results

        for (let currentWeek = 1; currentWeek <= weeks; currentWeek++) {
            plantCount *= 2; // Plants double in number every week
            let message = "";

            if (plantCount > maxPlants * 0.8) {
                message = `Week ${currentWeek}: Prune the plants to control growth. Plant count: ${plantCount}`;
            } else if (plantCount >= maxPlants * 0.5 && plantCount <= maxPlants * 0.8) {
                message = `Week ${currentWeek}: Monitor the plant growth. Plant count: ${plantCount}`;
            } else {
                message = `Week ${currentWeek}: Plant more plants. Plant count: ${plantCount}`;
            }

            const listItem = document.createElement("li");
            listItem.textContent = message;
            growthResultsElement.appendChild(listItem);
        }
    }

    // Predict growth after 1, 2, and 3 weeks
    predictPlantGrowth(3);

    // Calculate additional space required and expanded garden radius after 10 weeks for 100 plants
    function calculateAdditionalSpaceAndRadius(weeks, initialPlantCount) {
        let plantCount = initialPlantCount;
        for (let i = 0; i < weeks; i++) {
            plantCount *= 2; // Plants double in number every week
        }

        const totalSpaceRequired = plantCount * minSpacePerPlant;
        const originalSpace = PI * radius * radius;
        const additionalSpaceRequired = totalSpaceRequired - originalSpace;
        const expandedRadius = Math.sqrt((originalSpace + additionalSpaceRequired) / PI);

        const additionalSpaceElement = document.querySelector("#additionalSpace p");
        const expandedRadiusElement = document.querySelector("#expandedRadius p");

        if (plantCount > maxPlants * 0.8) {
            throw new Error("The number of plants exceeds the capacity of the garden.");
        }

        additionalSpaceElement.textContent = `${additionalSpaceRequired.toFixed(2)} square meters`;
        expandedRadiusElement.textContent = `${expandedRadius.toFixed(2)} meters`;
    }

    // Calculate additional space required and expanded garden radius after 10 weeks for 100 plants
    calculateAdditionalSpaceAndRadius(10, 100);
} catch (error) {
    console.error("Error:", error.message);
}
