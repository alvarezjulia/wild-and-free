class Savior {
    constructor() {
        this.saviorY = 600
        this.saviorX = 100
    }

    draw() {
        fill(0)
        rect(this.saviorX, this.saviorY, 55, 55, 0, 40, 65, 50)

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

        //Check collision Giraffe
        if (
            this.saviorX > game.animal.giraffeX - 60 &&
            this.saviorX < game.animal.giraffeX + 45 &&
            this.saviorY > game.animal.giraffeY - 65 &&
            this.saviorY < game.animal.giraffeY + 100
        ) {
            MOVE = MOVE * -1.5
        } else {
            MOVE = 5
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
