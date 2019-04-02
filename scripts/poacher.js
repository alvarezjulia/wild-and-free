class Poacher {
    constructor() {
        this.posX = randomizer(GAME_WIDTH)
        this.posY = randomizer(GAME_HEIGHT)
        this.poacherImg
        this.startPathing()
    }
    setup() {
        this.poacherImg = loadImage('./../assets/Poacher.jpg')
    }

    draw() {
        image(
            this.poacherImg,
            this.posX,
            this.posY,
            this.poacherImg.width / 10,
            this.poacherImg.height / 10
        )
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
}

const randomizer = x => {
    return Math.floor(Math.random() * x)
}

const randomNumber = (x, y) => {
    return Math.floor(Math.random() * y) + x
}
