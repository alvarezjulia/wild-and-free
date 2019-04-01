class Savior {
    constructor() {
        this.saviorX = 50
        this.saviorY = 40
    }

    draw() {
        fill('rgba(240,243,46, 0.80)')
        noStroke()
        // rect(this.saviorX, this.saviorY, 55, 55, 0, 40, 65, 50)
        triangle(
            this.saviorX + 40,
            this.saviorY + 85,
            this.saviorX + 68,
            this.saviorY + 30,
            this.saviorX + 96,
            this.saviorY + 85
        )
        arc(this.saviorX + 68, this.saviorY + 85, 56, 56, 0, PI)

        // beginShape(TRIANGLES)
        // vertex(this.saviorX + 60, this.saviorY + 20)
        // vertex(this.saviorX + 70, this.saviorY + 75)
        // vertex(this.saviorX + 80, this.saviorY + 20)
        // endShape()

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
            this.saviorX -= MOVE
        }

        if (keyIsDown(RIGHT_ARROW)) {
            this.saviorX += MOVE
        }

        if (keyIsDown(UP_ARROW)) {
            this.saviorY -= MOVE
        }

        if (keyIsDown(DOWN_ARROW)) {
            this.saviorY += MOVE
        }
    }
}
