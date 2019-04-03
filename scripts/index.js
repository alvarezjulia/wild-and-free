const game = new Game()
let transparency = 0
let maxTransparency = 255

// window.onload = function() {
//     let canvas = document.querySelector('#defaultCanvas0')
//     let ctx = canvas.getContext('2d')
// }

function setup() {
    game.setup()
}

function draw() {
    clear()
    game.draw()

    // ctx.beginPath()
    // ctx.moveTo(0, 0)
    // ctx.lineTo(40, 20)
    // ctx.arc(0, 20, 40, 0, Math.PI, false)
    // ctx.fillStyle = 'black'
    // ctx.fill()
}

function keyPressed() {
    if (keyCode === ENTER) {
        game.poacherArr.forEach(el => el.goToJail())
    }
}
