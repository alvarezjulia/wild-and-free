class Savior {
    constructor() {
        this.saviorX = 200
        this.saviorY = 500
        this.height = 131
        this.angle = 0
        this.width = 56
    }

    setup() {
        this.saviorImg = loadImage('./../assets/flashlight.jpg')
    }

    draw() {
        // push()
        fill('rgba(240,243,46, 0.80)')
        noStroke()
        translate(this.saviorX, this.saviorY)
        rotate(this.angle)
        triangle(-28, 75, 0, 0, 28, 75)
        arc(0, 75, 56, 56, 0, PI)
        image(this.saviorImg, -30, -25, this.saviorImg.width / 5, this.saviorImg.height / 5)
        // pop()

        //Set canvas boundaries
        if (this.saviorX >= GAME_WIDTH * 0.96) {
            this.saviorX = GAME_WIDTH * 0.95
        } else if (this.saviorY >= GAME_HEIGHT * 0.96) {
            this.saviorY = GAME_HEIGHT * 0.95
        } else if (this.saviorY < GAME_HEIGHT * 0.02) {
            this.saviorY = GAME_HEIGHT * 0.03
        } else if (this.saviorX < GAME_WIDTH * 0.02) {
            this.saviorX = GAME_WIDTH * 0.03
        }
    }
}
