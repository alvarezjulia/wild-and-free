class Savior {
    constructor() {
        this.rect1y = 30
        this.rect1x = 30
    }

    draw() {
        fill(0)
        rect(this.rect1x, this.rect1y, 55, 55, 0, 40, 65, 50)

        //Set canvas boundaries
        if (this.rect1x >= 600) {
            this.rect1x = 590
        } else if (this.rect1y >= 600) {
            this.rect1y = 590
        } else if (this.rect1y < 30) {
            this.rect1y = 30
        } else if (this.rect1x < 30) {
            this.rect1x = 30
        }

        //Check collision
        if (
            this.rect1x > game.animal.rect2x - 60 &&
            this.rect1x < game.animal.rect2x + 35 &&
            this.rect1y > game.animal.rect2y - 60 &&
            this.rect1y < game.animal.rect2y + 85
        ) {
            MOVE = MOVE * -1.5
        } else {
            MOVE = 5
        }

        //Savior moves with arrow keys
        if (keyIsDown(LEFT_ARROW)) {
            this.rect1x -= MOVE
        }

        if (keyIsDown(RIGHT_ARROW)) {
            this.rect1x += MOVE
        }

        if (keyIsDown(UP_ARROW)) {
            this.rect1y -= MOVE
        }

        if (keyIsDown(DOWN_ARROW)) {
            this.rect1y += MOVE
        }
    }
}
