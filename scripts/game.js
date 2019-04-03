let bg
class Game {
    constructor() {
        this.savior = new Savior()
        this.animal = []
        this.poacherArr = Array.from({ length: 20 }).map(x => new Poacher())
        this.arrInJail
        this.arrDeadAnimal
    }

    setup() {
        bg = loadImage('./../assets/background.jpg')
        createCanvas(GAME_WIDTH, GAME_HEIGHT)
        this.poacherArr.forEach(el => el.setup())
        setTimeout(() => {
            this.animal = ANIMALS.map(
                animal =>
                    new Animal(animal.name, animal.posX, animal.posY, animal.imgUrl, animal.sizeScale)
            )
            this.animal.forEach(el => el.setup())
        }, 5000)
    }

    draw() {
        background(bg)
        this.animal.forEach(el => el.draw())
        this.poacherArr.forEach(el => el.draw())

        this.arrInJail = game.poacherArr.filter(el => el.inJail)

        this.arrDeadAnimal = game.animal.filter(el => el.dead)

        fill(0, transparency)
        rect(0, 0, GAME_WIDTH, GAME_HEIGHT)
        transparency = (transparency + 1.5) % maxTransparency

        this.savior.draw()

        this.setScore()
        this.setDeadCounter()
    }

    setScore() {
        document.querySelector('h1').innerHTML = `POACHERS IN JAIL : ${this.arrInJail.length}`
    }
    setDeadCounter() {
        document.querySelector('h2').innerHTML = `DEAD ANIMALS : ${this.arrDeadAnimal.length}`
    }
}
