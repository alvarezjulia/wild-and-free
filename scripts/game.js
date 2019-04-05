let bg
class Game {
    constructor() {}

    setup() {
        this.savior = new Savior()
        this.savior.setup()

        this.animal = []
        this.canMove = []

        this.poacherArr = Array.from({ length: 5 }).map(x => new Poacher())
        this.poacherArr.forEach(el => el.setup())

        this.arrInJail
        this.arrDeadAnimal = []

        this.soundHasPlayed = false
        this.secondSoundHasPlayed = false
        this.backgroundSoundHasPlayed = false

        bg = loadImage('./assets/background.jpg')
        createCanvas(GAME_WIDTH, GAME_HEIGHT)

        this.timeout = setTimeout(() => {
            this.animal = ANIMALS.map(
                animal =>
                    new Animal(animal.name, animal.posX, animal.posY, animal.imgUrl, animal.sizeScale)
            )
            this.animal.forEach(el => el.setup())
        }, 2000)
    }

    //Restart function accessed when restart button is pressed
    restart() {
        clearInterval(this.timeout)
        transparency = 0
        this.savior = new Savior()
        this.savior.setup()

        this.gameOver = false
        this.youWon = false

        this.soundHasPlayed = false
        this.secondSoundHasPlayed = false
        this.backgroundSoundHasPlayed = false

        this.animal = []
        this.canMove = []

        this.poacherArr = Array.from({ length: 5 }).map(x => new Poacher())
        this.arrInJail
        this.arrDeadAnimal = []
        bg = loadImage('./assets/background.jpg')
        this.poacherArr.forEach(el => el.setup())

        //Set timeout for animals to appear on screen
        this.timeout = setTimeout(() => {
            this.animal = ANIMALS.map(
                animal =>
                    new Animal(animal.name, animal.posX, animal.posY, animal.imgUrl, animal.sizeScale)
            )
            this.animal.forEach(el => el.setup())
        }, 2000)
    }

    draw() {
        //Picture wild background
        background(bg)

        if (!this.backgroundSoundHasPlayed) {
            backgroundSound.play()
            this.backgroundSoundHasPlayed = true
        }

        //Draw animals and poachers
        this.animal.forEach(el => el.draw())
        this.poacherArr.forEach(el => el.draw())

        //Dead animals + Poachers in jail
        this.arrInJail = game.poacherArr.filter(el => el.inJail)
        this.arrDeadAnimal = game.animal.filter(el => el.dead)

        //Black background fading
        fill(0, transparency)
        rect(0, 0, GAME_WIDTH, GAME_HEIGHT)
        transparency = transparency + 1.2

        //If complete darkness => game over displayed
        if (transparency > maxTransparency && this.arrInJail.length !== this.poacherArr.length) {
            this.gameOver = true
        }

        if (this.gameOver) {
            // if the sound hasnt played yet => play the sound
            if (!this.secondSoundHasPlayed) {
                mySecondSound.play()
                backgroundSound.stop()
                this.secondSoundHasPlayed = true
                setTimeout(() => {
                    mySecondSound.stop()
                }, 2500)
            }

            clear()
            background(0)
            textSize(100)
            fill('rgb(33, 139, 22)')
            textFont('Poppins')
            text('GAME OVER', GAME_WIDTH / 7, GAME_HEIGHT / 2)
        }

        //Change inner HTML to set score and dead counter
        if (this.gameOver) {
            document.querySelector('.container').innerHTML = '<h1>You lost!</h1>'
        } else if (!this.youWon && !this.gameOver) {
            document.querySelector('.container').innerHTML = `<h1>POACHERS IN JAIL : ${
                this.arrInJail.length
            }</h1><h2>DEAD ANIMALS : ${this.arrDeadAnimal.length}</h2>`
        } else if (this.youWon) {
            if (!this.soundHasPlayed) {
                mySound.play()
                backgroundSound.stop()
                this.soundHasPlayed = true
            }

            document.querySelector('.container').innerHTML = '<h1>You won!</h1>'
            clear()
            background(0)
            textSize(20)
            fill('rgb(33, 139, 22)')
            textFont('Poppins')
            text('All poachers are in jail! YAY!', GAME_WIDTH / 3, GAME_HEIGHT / 2)
        }

        //If all poachers are in jail => you won displayed
        if (this.arrInJail.length == this.poacherArr.length) this.youWon = true

        //Draw savior
        this.savior.draw()

        //MOVE CURSORS

        //When pressing left arrow - left rotation
        if (keyIsDown(LEFT_ARROW)) {
            this.savior.angle -= 15 / (180 * Math.PI)
        }

        //When pressing right arrow - right rotation
        if (keyIsDown(RIGHT_ARROW)) {
            this.savior.angle += 15 / (180 * Math.PI)
        }

        //When pressing up arrow - vector translation forward
        //+ prevention to run over animals
        if (keyIsDown(UP_ARROW)) {
            this.animal.forEach(animal => {
                this.canMove.push(
                    collidePointRect(
                        this.savior.saviorX + -MOVE * Math.sin(this.savior.angle),
                        this.savior.saviorY + MOVE * Math.cos(this.savior.angle),
                        animal.posX,
                        animal.posY,
                        animal.width,
                        animal.height
                    )
                )
            })

            if (!this.canMove.includes(true)) {
                this.savior.saviorY += MOVE * Math.cos(this.savior.angle)
                this.savior.saviorX += -MOVE * Math.sin(this.savior.angle)
            }
            this.canMove = []
        }

        //When pressing down arrow - vector translation backward
        //+ prevention to run over animals
        if (keyIsDown(DOWN_ARROW)) {
            this.animal.forEach(animal => {
                this.canMove.push(
                    collidePointRect(
                        this.savior.saviorX - -MOVE * Math.sin(this.savior.angle),
                        this.savior.saviorY - MOVE * Math.cos(this.savior.angle),
                        animal.posX,
                        animal.posY,
                        animal.width,
                        animal.height
                    )
                )
            })

            if (!this.canMove.includes(true)) {
                this.savior.saviorY -= MOVE * Math.cos(this.savior.angle)
                this.savior.saviorX -= -MOVE * Math.sin(this.savior.angle)
            }
            this.canMove = []
        }
    }
}
