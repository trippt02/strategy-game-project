import React from 'react';

// ./components/UI.js
export class UI {
    constructor(map) {
        this.map = map; // Receive the Map instance
    }

    render() {
        const uiDiv = document.getElementById('ui');
        if (!uiDiv) {
            console.error('UI container not found');
            return;
        }
        uiDiv.innerHTML = ''; // Clear previous UI
        if (uiDiv) {
            uiDiv.innerHTML = `
                <h3>Actions</h3>
                <button id="explore-button">Explore New Land</button>
                `;

            this.addEventListeners();

        }
    }

    addEventListeners() {
        const exploreButton = document.getElementById('explore-button');
        if (exploreButton) {
            exploreButton.addEventListener('click', () => {
                this.map.expandMap(); // Call the expandMap method on the Map component
            });
        }
        // Add event listeners for other UI elements
    }

    update() {
        // Update any dynamic UI elements
        this.render(); // Re-render the UI to reflect any changes
    }

}

// class UI extends React.Component {
//     render() {
//         return (
//             <div className="ui-container">
//                 <div className="inventory">
//                     <h2>Inventory</h2>
//                     {/* Inventory items will be displayed here */}
//                 </div>
//                 <div className="resource-display">
//                     <h2>Resources</h2>
//                     {/* Resource counts will be displayed here */}
//                 </div>
//                 <div className="building-selection">
//                     <h2>Buildings</h2>
//                     {/* Building selection options will be displayed here */}
//                 </div>
//             </div>
//         );
//     }
// }

// export default UI;