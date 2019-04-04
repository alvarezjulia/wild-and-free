let bg
class Game {
    constructor() {}

    setup() {
        this.savior = new Savior()
        this.animal = []
        this.canMove = []
        this.poacherArr = Array.from({ length: 5 }).map(x => new Poacher())
        this.arrInJail
        this.arrDeadAnimal
        bg = loadImage('./../assets/background.jpg')
        createCanvas(GAME_WIDTH, GAME_HEIGHT)
        this.poacherArr.forEach(el => el.setup())
        this.savior.setup()
        this.timeout = setTimeout(() => {
            this.animal = ANIMALS.map(
                animal =>
                    new Animal(animal.name, animal.posX, animal.posY, animal.imgUrl, animal.sizeScale)
            )
            this.animal.forEach(el => el.setup())
        }, 5000)
    }

    restart() {
        clearInterval(this.timeout)
        this.savior = new Savior()
        this.animal = []
        this.canMove = []
        this.poacherArr = Array.from({ length: 20 }).map(x => new Poacher())
        this.arrInJail
        this.arrDeadAnimal
        bg = loadImage('./../assets/background.jpg')
        this.poacherArr.forEach(el => el.setup())
        this.timeout = setTimeout(() => {
            this.animal = ANIMALS.map(
                animal =>
                    new Animal(animal.name, animal.posX, animal.posY, animal.imgUrl, animal.sizeScale)
            )
            this.animal.forEach(el => el.setup())
        }, 3000)
    }

    draw() {
        background(bg)
        this.animal.forEach(el => el.draw())
        this.poacherArr.forEach(el => el.draw())

        this.arrInJail = game.poacherArr.filter(el => el.inJail)

        this.arrDeadAnimal = game.animal.filter(el => el.dead)

        // fill(0, transparency)
        // rect(0, 0, GAME_WIDTH, GAME_HEIGHT)
        // transparency = transparency + 1

        // if (transparency === maxTransparency) console.log('Game over')

        this.savior.draw()

        this.setScore()
        this.setDeadCounter()

        if (keyIsDown(LEFT_ARROW)) {
            this.savior.angle -= 15 / (180 * Math.PI)
        }

        if (keyIsDown(RIGHT_ARROW)) {
            this.savior.angle += 15 / (180 * Math.PI)
        }

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

    setScore() {
        document.querySelector('h1').innerHTML = `POACHERS IN JAIL : ${this.arrInJail.length}`
    }
    setDeadCounter() {
        document.querySelector('h2').innerHTML = `DEAD ANIMALS : ${this.arrDeadAnimal.length}`
    }
}
