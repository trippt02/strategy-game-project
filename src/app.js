// src/app.js

import { Map } from './components/Map';
import { Resources } from './components/Resources';
import { Buildings } from './components/Buildings';
import { UI } from './components/UI';

class Game {
    constructor() {
        this.map = new Map();
        this.resources = new Resources();
        this.buildings = new Buildings();
        this.ui = new UI();
        this.gameLoop = this.gameLoop.bind(this);
    }

    init() {
        this.map.render();
        this.ui.render();
        this.gameLoop();
    }

    gameLoop() {
        this.update();
        this.render();
        requestAnimationFrame(this.gameLoop);
    }

    update() {
        this.resources.update();
        this.buildings.update();
        // Additional game state updates can be added here
    }

    render() {
        this.ui.update();
        // Additional rendering logic can be added here
    }
}

const game = new Game();
game.init();