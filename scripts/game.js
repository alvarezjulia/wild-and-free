class Game {
    constructor() {
        this.savior = new Savior()
        this.animal = ANIMALS.map(
            animal =>
                new Animal(
                    animal.name,
                    animal.posX,
                    animal.posY,
                    animal.imgUrl,
                    animal.widthSize,
                    animal.heightSize
                )
        )
    }

    setup() {
        createCanvas(GAME_WIDTH, GAME_HEIGHT)
        this.animal.forEach(el => el.setup())
    }

    draw() {
        background(80, 180, 60)
        this.animal.forEach(el => el.draw())
        this.savior.draw()
    }
}
