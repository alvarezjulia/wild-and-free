class Savior {
    constructor() {
        this.saviorX = 50
        this.saviorY = 40
        this.bleftX = this.saviorX + 40 - 68
        this.bleftY = this.saviorY + 85 - 30
        this.brightX = this.saviorX + 96 - 68
        this.brightY = this.saviorY + 85 - 30
        this.angle = 0
    }

    draw() {
        fill('rgba(240,243,46, 0.80)')
        noStroke()
        push()
        translate(this.saviorX, this.saviorY)
        angleMode(DEGREES)
        rotate(this.angle)
        // rect(this.saviorX, this.saviorY, 55, 55, 0, 40, 65, 50)
        triangle(this.bleftX, this.bleftY, this.saviorX, this.saviorY, this.brightX, this.brightY)
        // arc(this.saviorX, this.saviorY, 56, 56, 0, PI)
        pop()

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
            translate(this.saviorX, this.saviorY)
            this.angle += 5
        }

        if (keyIsDown(RIGHT_ARROW)) {
            this.angle -= 5
        }

        if (keyIsDown(UP_ARROW)) {
            this.saviorY -= MOVE
            this.bleftY -= MOVE
            this.brightY -= MOVE
        }

        if (keyIsDown(DOWN_ARROW)) {
            this.saviorY += MOVE
            this.bleftY += MOVE
            this.brightY += MOVE
        }
    }
}
