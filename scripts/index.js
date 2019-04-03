const game = new Game()

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
