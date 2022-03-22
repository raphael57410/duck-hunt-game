class Hunter {

    constructor(rootElement, winScreen, time, hunterScore, gameStart, setIntervalId) {
        this.rootElement = rootElement;
        this.winScreen = winScreen;
        this.time = time;
        this.gameStart = gameStart;
        this.hunterScore = hunterScore;
        this.setIntervalId = setIntervalId
    }

    init() {
        this.liHunterElement = document.querySelector('.score_li_duck');

        this.clickHunter();

    };

    clickHunter() {
        this.rootElement.addEventListener('click', (event) => {
            if (event.target.className !== 'duck' && this.gameStart) {
                if (this.hunterScore >= 9) {
                    this.gameStart = false;
                    clearInterval(this.setIntervalId);
                    this.winScreen.innerHTML = 'Duck Win! press esc for restart';
                    this.rootElement.appendChild(this.winScreen);
                }

                this.hunterScore += 1;
                this.liHunterElement.innerHTML = 'Duck Score : ' + this.hunterScore;
            }
        })
    };

    /**
     * @param {(arg0: number) => void} newScore
     */
    set changeScore(newScore) {
        return this.hunterScore = newScore;
    }
}

export default Hunter;