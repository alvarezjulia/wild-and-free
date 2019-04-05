const game = new Game()
let transparency = 0
let maxTransparency = 255
let gameStart = false

function setup() {
    game.setup()
}

function draw() {
    clear()
    game.draw()
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

function preload() {
    mySound = loadSound('./assets/youwin.wav')
    mySecondSound = loadSound('./assets/gameover.mp3')
    backgroundSound = loadSound('./assets/background-music.mp3')
}
