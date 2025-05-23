import React from 'react';

// ./components/Map.js
export class Map {
    constructor() {
        this.mapData = this.generateInitialMap(300, 300); // Example initial size
    }

    generateInitialMap(width, height) {
        const map = [];
        const biomes = ['forest', 'desert', 'plains', 'mountains', 'ocean'];

        for (let y = 0; y < height; y++) {
            map[y] = [];
            for (let x = 0; x < width; x++) {
                const biome = biomes[Math.floor(Math.random() * biomes.length)];
                let terrain;

                switch (biome) {
                    case 'forest':
                        terrain = Math.random() > 0.7 ? 'tree' : 'grass';
                        break;
                    case 'desert':
                        terrain = Math.random() > 0.8 ? 'cactus' : 'sand';
                        break;
                    case 'plains':
                        terrain = Math.random() > 0.9 ? 'flower' : 'grass';
                        break;
                    case 'mountains':
                        terrain = Math.random() > 0.6 ? 'rock' : 'grass';
                        break;
                    case 'ocean':
                        terrain = 'water';
                        break;
                    default:
                        terrain = 'grass';
                }

                map[y][x] = { biome, terrain, explored: y < 10 && x < 10 };
            }
        }
        return map;
    }

    render() {
        const mapContainer = document.getElementById('map');
        mapContainer.innerHTML = ''; // Clear previous map

        this.mapData.forEach((row, y) => {
            const rowElement = document.createElement('div');
            rowElement.classList.add('map-row');
            row.forEach((tile, x) => {
                const tileElement = document.createElement('div');
                tileElement.classList.add('map-tile', tile.terrain, tile.biome);
                if (!tile.explored) {
                    tileElement.classList.add('fog-of-war');
                }
                tileElement.dataset.x = x;
                tileElement.dataset.y = y;
                rowElement.appendChild(tileElement);
            });
            mapContainer.appendChild(rowElement);
        });
    }

    expandMap() {
        // Logic to add more rows/columns to this.mapData and re-render
        console.log('Expanding map...');
        // Example: Add a new row
        const newRow = Array(this.mapData[0].length).fill({ terrain: 'water', explored: false });
        this.mapData.push(newRow);
        this.render();
    }

    update() {
        // Logic to update the map, e.g., for events or changes
        this.render(); // Re-render to reflect updates
    }
}

// class Map extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             terrain: this.initializeTerrain(),
//             resources: this.initializeResources(),
//         };
//     }

//     initializeTerrain() {
//         // Logic to initialize the game map's terrain
//         return [
//             // Example terrain data structure
//             { type: 'forest', x: 0, y: 0 },
//             { type: 'mountain', x: 1, y: 0 },
//             { type: 'plain', x: 0, y: 1 },
//             // Add more terrain types as needed
//         ];
//     }

//     initializeResources() {
//         // Logic to initialize resource locations on the map
//         return [
//             // Example resource data structure
//             { type: 'wood', location: { x: 0, y: 0 } },
//             { type: 'stone', location: { x: 1, y: 0 } },
//             { type: 'ore', location: { x: 0, y: 1 } },
//             // Add more resources as needed
//         ];
//     }

//     render() {
//         return (
//             <div className="map">
//                 {this.state.terrain.map((tile, index) => (
//                     <div key={index} className={`tile ${tile.type}`}>
//                         {/* Render terrain and resources here */}
//                     </div>
//                 ))}
//             </div>
//         );
//     }
// }

// export default Map;