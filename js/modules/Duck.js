class Duck {

    constructor(rootElement, winScreen, gameStart, setIntervalId) {
        this.duck = document.createElement('div');
        this.rootElement = rootElement;
        this.winScreen = winScreen;
        this.duckScore = 0;
        this.gameStart = gameStart;
        this.setIntervalId = setIntervalId
    }

    init() {
        this.duck.className = "duck";
        this.liDuckElement = document.querySelector('.score_li_hunter');
        this.rootElement.appendChild(this.duck);

        this.clickOnDuck();

        const intervalId = setInterval(() => {
            const lastPosition = this.duck.getBoundingClientRect().left
            console.log((this.rootElement.offsetWidth - 50));
            const top = Math.floor(Math.random() * (this.rootElement.offsetHeight - 50)) + 1;
            const left = Math.floor(Math.random() * (this.rootElement.offsetWidth - 50)) + 1;
            this.duck.style.top = top + "px";
            this.duck.style.left = left + "px";
            if (lastPosition < left) {
                this.duck.classList.remove('duck_reverse');
            } else {
                this.duck.classList.add('duck_reverse');
            }
        }, 1000);

        setTimeout(() => {
            clearInterval(intervalId);
        }, 120000);

    };

    clickOnDuck() {
        this.duck.addEventListener('click', () => {
            console.log(this.gameStart);
            if (this.duckScore >= 9 && this.gameStart) {
                this.gameStart = false;
                this.winScreen.innerHTML = 'Hunter Win ! press esc for restart';
                this.rootElement.appendChild(this.winScreen);
            }

            this.duckScore += 1;
            this.liDuckElement.innerHTML = 'hunter Score : ' + this.duckScore;
        })

    };
}

export default Duck;