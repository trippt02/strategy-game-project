import React, { useState } from 'react';

const Buildings = () => {
    const [buildings, setBuildings] = useState([]);

    const addBuilding = (buildingType) => {
        setBuildings([...buildings, { type: buildingType, level: 1 }]);
    };

    const upgradeBuilding = (index) => {
        const newBuildings = [...buildings];
        newBuildings[index].level += 1;
        setBuildings(newBuildings);
    };

    return (
        <div>
            <h2>Buildings</h2>
            <ul>
                {buildings.map((building, index) => (
                    <li key={index}>
                        {building.type} - Level {building.level}
                        <button onClick={() => upgradeBuilding(index)}>Upgrade</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => addBuilding('Farm')}>Add Farm</button>
            <button onClick={() => addBuilding('Mine')}>Add Mine</button>
            <button onClick={() => addBuilding('Barracks')}>Add Barracks</button>
        </div>
    );
};

export default Buildings;