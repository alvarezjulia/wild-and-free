let bg
class Game {
    constructor() {
        this.savior = new Savior()
        this.animal = ANIMALS.map(
            animal => new Animal(animal.name, animal.posX, animal.posY, animal.imgUrl, animal.sizeScale)
        )
        this.poacherArr = [new Poacher(), new Poacher(), new Poacher(), new Poacher(), new Poacher()]
        this.poachersInJail = 0
    }

    setup() {
        bg = loadImage('./../assets/Background.jpg')
        createCanvas(GAME_WIDTH, GAME_HEIGHT)
        this.animal.forEach(el => el.setup())
        this.poacherArr.forEach(el => el.setup())
    }

    draw() {
        background(bg)
        this.animal.forEach(el => el.draw())
        this.savior.draw()
        this.poacherArr.forEach(el => el.draw())
    }
}
