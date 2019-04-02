class Poacher {
    constructor() {
        this.posX = Math.floor(Math.random() * GAME_WIDTH)
        this.posY = Math.floor(Math.random() * GAME_HEIGHT)
        this.poacherImg
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
}
