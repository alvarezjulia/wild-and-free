class Savior {
    constructor() {
        this.saviorX = 200
        this.saviorY = 500
        this.angle = 0
    }

    draw() {
        fill('rgba(240,243,46, 0.80)')
        noStroke()
        push()

        translate(this.saviorX, this.saviorY)
        rotate(this.angle)

        triangle(-28, 75, 0, 0, 28, 75)
        arc(0, 75, 56, 56, 0, PI)
        pop()

        //Set canvas boundaries
        if (this.saviorX >= GAME_WIDTH * 0.9) {
            this.saviorX = GAME_WIDTH * 0.89
        } else if (this.saviorY >= GAME_HEIGHT * 0.9) {
            this.saviorY = GAME_HEIGHT * 0.89
        } else if (this.saviorY < GAME_HEIGHT * 0.02) {
            this.saviorY = GAME_HEIGHT * 0.03
        } else if (this.saviorX < GAME_WIDTH * 0.02) {
            this.saviorX = GAME_WIDTH * 0.03
        }

        //Savior moves with arrow keys
        if (keyIsDown(LEFT_ARROW)) {
            this.angle -= 10 / (180 * PI)
        }

        if (keyIsDown(RIGHT_ARROW)) {
            this.angle += 10 / (180 * PI)
        }

        if (keyIsDown(UP_ARROW)) {
            this.saviorY += MOVE * Math.cos(this.angle)
            this.saviorX += -MOVE * Math.sin(this.angle)
        }

        if (keyIsDown(DOWN_ARROW)) {
            this.saviorY -= MOVE * Math.cos(this.angle)
            this.saviorX -= -MOVE * Math.sin(this.angle)
        }
    }
}
