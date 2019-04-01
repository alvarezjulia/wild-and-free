class Game {
    constructor() {
        this.savior = new Savior()
        this.animal = new Animal()
    }

    setup() {
        createCanvas(GAME_WIDTH, GAME_HEIGHT)
        this.animal.setup()
    }

    draw() {
        background(80, 180, 60)
        this.animal.draw()
        this.savior.draw()
    }
}
