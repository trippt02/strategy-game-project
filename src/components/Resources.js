import React, { useState, useEffect } from 'react';

// ./components/Resources.js
export class Resources {
    constructor() {
        this.wood = 100;
        this.stone = 50;
        this.ore = 20;
        this.grain = 30;
    }

    collectResource(type, amount) {
        this[type] += amount;
        this.updateUI();
    }

    update() {
        this.updateUI(); // Call this in your game loop
    }

    updateUI() {
        const resourcesDiv = document.getElementById('resources');
        if (resourcesDiv) {
            resourcesDiv.innerHTML = `
                <h3>Resources</h3>
                <div>Wood: <span id="wood-count">${this.wood}</span></div>
                <div>Stone: <span id="stone-count">${this.stone}</span></div>
                <div>Ore: <span id="ore-count">${this.ore}</span></div>
                <div>Grain: <span id="grain-count">${this.grain}</span></div>
            `;
        }
    }
}

// const Resources = () => {
//     const [resources, setResources] = useState({
//         wood: 0,
//         stone: 0,
//         ore: 0,
//         grain: 0,
//     });

//     const collectResource = (type, amount) => {
//         setResources(prevResources => ({
//             ...prevResources,
//             [type]: prevResources[type] + amount,
//         }));
//     };

//     useEffect(() => {
//         // Simulate resource collection over time
//         const interval = setInterval(() => {
//             collectResource('wood', 1);
//             collectResource('stone', 1);
//         }, 1000);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="resources">
//             <h2>Resources</h2>
//             <ul>
//                 <li>Wood: {resources.wood}</li>
//                 <li>Stone: {resources.stone}</li>
//                 <li>Ore: {resources.ore}</li>
//                 <li>Grain: {resources.grain}</li>
//             </ul>
//         </div>
//     );
// };

// export default Resources;