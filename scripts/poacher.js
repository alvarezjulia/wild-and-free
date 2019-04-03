class Poacher {
    constructor() {
        this.posX = randomizer(GAME_WIDTH)
        this.posY = randomizer(GAME_HEIGHT)
        this.poacherImg
        this.startPathing()
        this.inJail = false
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
                this.posX + 20,
                this.posY,
                40,
                this.height,
                game.savior.saviorX - 28,
                game.savior.saviorY,
                game.savior.width,
                game.savior.height
            )
        ) {
            this.inJail = true
            transparency = 0
        }
    }
}

const randomizer = x => {
    return Math.floor(Math.random() * x)
}

const randomNumber = (x, y) => {
    return Math.floor(Math.random() * y) + x
}
