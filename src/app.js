// src/app.js

import { Map } from './components/Map';
import { Resources } from './components/Resources';
import { Buildings } from './components/Buildings';
import { UI } from './components/UI';

app.get('/src/app.js', (req, res) => {
    res.set('Content-Type', 'application/javascript'); // Set the correct MIME type
    res.sendFile(__dirname + '/src/app.js'); // Or however you are serving the file
  });
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
        this.map.update();
        this.ui.update();
        // Additional game state updates can be added here
    }

    render() {
        this.ui.update();
        // Additional rendering logic can be added here
    }
}

const game = new Game();
game.init();