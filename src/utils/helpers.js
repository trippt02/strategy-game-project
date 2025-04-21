// This file contains utility functions that assist with various tasks in the game.

export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function calculateResourceYield(resourceType, landType) {
    const yieldMap = {
        'Wood': { 'Forest': 5, 'Plain': 2 },
        'Stone': { 'Mountain': 4, 'Plain': 1 },
        'Ore': { 'Mountain': 6, 'Plain': 2 },
        'Wheat': { 'Field': 5, 'Plain': 3 }
    };
    return yieldMap[resourceType][landType] || 0;
}

export function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h ${minutes}m ${secs}s`;
}

export function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}