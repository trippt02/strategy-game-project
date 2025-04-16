import React, { useState } from 'react';

// ./components/Buildings.js
export class Buildings {
    constructor(resources) {
        this.resources = resources; // Receive the Resources instance
        this.availableBuildings = [
            { name: 'Farm', cost: { wood: 20, stone: 10 } },
            { name: 'Mine', cost: { wood: 30, ore: 15 } },
        ];
        this.placedBuildings = [];
    }

    render() {
        const buildingsDiv = document.getElementById('buildings');
        if (buildingsDiv) {
            buildingsDiv.innerHTML = `<h3>Buildings</h3><ul>${this.availableBuildings.map(building => `<li>${building.name} (Wood: ${building.cost.wood}, Stone: ${building.cost.stone || 0}, Ore: ${building.cost.ore || 0}) <button class="build-button" data-building="${building.name}">Build</button></li>`).join('')}</ul>`;
            this.addEventListeners();
        }
    }

    addEventListeners() {
        const buildButtons = document.querySelectorAll('.build-button');
        buildButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const buildingName = event.target.dataset.building;
                this.attemptBuild(buildingName);
            });
        });
    }

    attemptBuild(buildingName) {
        const buildingData = this.availableBuildings.find(b => b.name === buildingName);
        if (buildingData && this.resources.wood >= buildingData.cost.wood && (buildingData.cost.stone ? this.resources.stone >= buildingData.cost.stone : true) && (buildingData.cost.ore ? this.resources.ore >= buildingData.cost.ore : true)) {
            console.log(`Attempting to build: ${buildingName}`);
            // Implement logic to place the building on the map
            this.resources.wood -= buildingData.cost.wood;
            if (buildingData.cost.stone) this.resources.stone -= buildingData.cost.stone;
            if (buildingData.cost.ore) this.resources.ore -= buildingData.cost.ore;
            this.resources.updateUI(); // Update resource display
            // ... logic to add the building to this.placedBuildings and update the map
        } else {
            console.log('Not enough resources to build:', buildingName);
            // Potentially display a message to the user
        }
    }

    update() {
        // Logic for building production or other updates
        this.render(); // Re-render to reflect updates
    }
}

// const Buildings = () => {
//     const [buildings, setBuildings] = useState([]);

//     const addBuilding = (buildingType) => {
//         setBuildings([...buildings, { type: buildingType, level: 1 }]);
//     };

//     const upgradeBuilding = (index) => {
//         const newBuildings = [...buildings];
//         newBuildings[index].level += 1;
//         setBuildings(newBuildings);
//     };

//     return (
//         <div>
//             <h2>Buildings</h2>
//             <ul>
//                 {buildings.map((building, index) => (
//                     <li key={index}>
//                         {building.type} - Level {building.level}
//                         <button onClick={() => upgradeBuilding(index)}>Upgrade</button>
//                     </li>
//                 ))}
//             </ul>
//             <button onClick={() => addBuilding('Farm')}>Add Farm</button>
//             <button onClick={() => addBuilding('Mine')}>Add Mine</button>
//             <button onClick={() => addBuilding('Barracks')}>Add Barracks</button>
//         </div>
//     );
// };

// export default Buildings;