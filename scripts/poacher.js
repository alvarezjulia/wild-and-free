class Poacher {
    constructor() {
        this.posX = randomizer(GAME_WIDTH)
        this.posY = randomizer(GAME_HEIGHT)
        this.poacherImg
        this.startPathing()
        this.inJail = false
        // this.inJailCount = 0
    }
    setup() {
        this.poacherImg = loadImage('./../assets/Poacher.jpg')
    }

    draw() {
        this.setWidthAndHeight()
        if (this.inJail === false) {
            image(
                this.poacherImg,
                this.posX,
                this.posY,
                this.poacherImg.width / 10,
                this.poacherImg.height / 10
            )
            this.setScore()
        }

        //Set canvas boundaries
        if (this.posX >= GAME_WIDTH * 0.9) {
            this.posX = GAME_WIDTH * 0.89
        } else if (this.posY >= GAME_HEIGHT * 0.9) {
            this.posY = GAME_HEIGHT * 0.89
        } else if (this.posY < GAME_HEIGHT * 0.02) {
            this.posY = GAME_HEIGHT * 0.03
        } else if (this.posX < GAME_WIDTH * 0.02) {
            this.posX = GAME_WIDTH * 0.03
        }
    }
    setWidthAndHeight() {
        this.width = this.poacherImg.width / 10
        this.height = this.poacherImg.height / 10
    }

    startPathing() {
        setInterval(() => {
            this.makeRandomPath()
        }, 200)
    }

    makeRandomPath() {
        let rand = Math.random()
        return rand < 0.25
            ? (this.posX += randomNumber(3, 6))
            : rand < 0.5
            ? (this.posX -= randomNumber(3, 6))
            : rand < 0.75
            ? (this.posY += randomNumber(3, 6))
            : (this.posY -= randomNumber(3, 6))
    }

    goToJail() {
        if (
            collideRectRect(
                this.posX + this.width / 2,
                this.posY + this.height / 2,
                this.width - 15,
                this.height - 15,
                game.savior.saviorX,
                game.savior.saviorY,
                game.savior.width,
                game.savior.height
            )
        ) {
            this.inJail = true
            game.poachersInJail++
        }
    }

    setScore() {
        document.querySelector('h1').innerHTML = `POACHERS IN JAIL: ${game.poachersInJail}`
    }
}

const randomizer = x => {
    return Math.floor(Math.random() * x)
}

const randomNumber = (x, y) => {
    return Math.floor(Math.random() * y) + x
}
