const game = new Game()
let transparency = 0
let maxTransparency = 255

function setup() {
    game.setup()
}

function draw() {
    clear()
    game.draw()
}

function keyPressed() {
    if (keyCode === ENTER) {
        game.poacherArr.forEach(el => el.goToJail())
    }
}
