class Game {
    constructor() {
        this.savior = new Savior()
        this.animal = new Animal()
    }

    setup() {
        createCanvas(GAME_WIDTH, GAME_HEIGHT)
        background(80, 180, 60)
        this.animal.setup()
    }

    draw() {
        this.animal.draw()
        this.savior.draw()
    }
}
