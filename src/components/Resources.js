import React, { useState, useEffect } from 'react';

const Resources = () => {
    const [resources, setResources] = useState({
        wood: 0,
        stone: 0,
        ore: 0,
        grain: 0,
    });

    const collectResource = (type, amount) => {
        setResources(prevResources => ({
            ...prevResources,
            [type]: prevResources[type] + amount,
        }));
    };

    useEffect(() => {
        // Simulate resource collection over time
        const interval = setInterval(() => {
            collectResource('wood', 1);
            collectResource('stone', 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="resources">
            <h2>Resources</h2>
            <ul>
                <li>Wood: {resources.wood}</li>
                <li>Stone: {resources.stone}</li>
                <li>Ore: {resources.ore}</li>
                <li>Grain: {resources.grain}</li>
            </ul>
        </div>
    );
};

export default Resources;