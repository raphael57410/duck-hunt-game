import Duck from "./Duck.js";
import Hunter from "./Hunter.js";


class Game {
    constructor() {
        this.time;
        this.hunterScore;
        this.gameStart = false;
        this.duck;
        this.hunter;
        this.rootElement = document.querySelector('#root');
        this.startScreen = document.createElement('div');
        this.winScreen = document.createElement('div');
        this.looseScreen = document.createElement('div');
        this.liTimeElement = document.querySelector('.score_li_time');
        this.liDuckElement = document.querySelector('.score_li_duck');
        this.liHunterElement = document.querySelector('.score_li_hunter');

    }

    init() {
        this.time = 0;
        this.hunterScore = 0;
        this.gameStart = false;

        //### Start Screen
        this.startScreen.className = 'start_screen';
        this.startScreen.innerHTML = 'PRESS ENTER TO START !'
        this.rootElement.appendChild(this.startScreen);
        //###

        //### win screen
        this.winScreen.className = "win_screen";
        if (this.winScreen) this.winScreen.remove();
        //###

        //### loose screen
        this.looseScreen.className = "loose_screen";
        if (this.looseScreen) this.looseScreen.remove();

        if (this.duck) this.duck.duck.remove();

        this.liTimeElement.innerHTML = 'time : ' + this.time;
        this.liDuckElement.innerHTML = 'Duck Score : ' + 0;
        this.liHunterElement.innerHTML = 'Hunter Score : ' + 0;

        this.clickHandle(this.startScreen);

    }

    start() {
        this.gameStart = true;
        this.duck = new Duck(
            this.rootElement,
            this.winScreen,
            this.gameStart,
            this.setIntervalId
        );
        this.hunter = new Hunter(
            this.rootElement,
            this.winScreen,
            this.time,
            this.hunterScore,
            this.gameStart,
            this.setIntervalId
        );

        if (this.gameStart) {
            const setIntervalId = setInterval(() => {
                this.time += 1;
                this.liTimeElement.innerHTML = 'time : ' + this.time
                if (this.time > 100) this.liTimeElement.style.color = 'red';

                if (this.time === 9) this.hunter.changeScore = 10;

            }, 1000);

            setTimeout(() => {
                this.looseScreen.innerText = "Vous avez perdu ! press esc "
                this.rootElement.appendChild(this.looseScreen);
                clearInterval(setIntervalId);
            }, 120000);

            this.clickHandle(this.startScreen, setIntervalId);

        }

        this.duck.init();
        this.hunter.init();
    };

    clickHandle(startScreen, setIntervalId) {
        document.addEventListener('keydown', (event) => {

            if (event.key === "Enter" && !this.gameStart) {
                this.start();
                startScreen.remove();
            }

            if (event.key === "Escape") {
                clearInterval(setIntervalId);
                this.init();
            }
        })
    };

}

export default Game;