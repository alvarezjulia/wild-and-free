let bg
class Game {
    constructor() {
        this.savior = new Savior()
        this.animal = ANIMALS.map(
            animal => new Animal(animal.name, animal.posX, animal.posY, animal.imgUrl, animal.sizeScale)
        )
        this.poacher = new Poacher()
    }

    setup() {
        bg = loadImage('./../assets/Background.jpg')
        createCanvas(GAME_WIDTH, GAME_HEIGHT)
        this.animal.forEach(el => el.setup())
        this.poacher.setup()
    }

    draw() {
        background(bg)
        this.animal.forEach(el => el.draw())
        this.savior.draw()
        this.poacher.draw()
    }
}
