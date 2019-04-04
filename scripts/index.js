const game = new Game()
let transparency = 0
let maxTransparency = 255
let gameStart = false

function setup() {
    game.setup()
}

function draw() {
    clear()
    // if (this.gameStart) {
    game.draw()
    // }
}

function keyPressed() {
    if (keyCode === SHIFT) {
        game.poacherArr.forEach(el => el.goToJail())
    }
}

document.querySelector('button').addEventListener('click', () => {
    gameStart = !gameStart
    game.restart()
})

// function preload() {
//     mySound = loadSound('/game-over.wav')
//     mySecondSound = loadSound('/arc-hit.wav')
//     myBackgroundSound = loadSound('/background-sound.mp3')
// }
