class Animal {
    constructor(name, posX, posY, imgUrl, sizeScale) {
        this.name = name
        this.posX = posX
        this.posY = posY
        this.imgUrl = imgUrl
        this.sizeScale = sizeScale
        this.animalImg
        this.dead = false
    }
    setup() {
        this.animalImg = loadImage(this.imgUrl)
    }
    draw() {
        //Draw animal image on the canvas
        image(
            this.animalImg,
            this.posX,
            this.posY,
            this.animalImg.width / this.sizeScale,
            this.animalImg.height / this.sizeScale
        )
        this.setWidthAndHeight()

        //Poacher with animal collision
        //& poacher not in jail
        for (let i = 0; i < game.poacherArr.length; i++) {
            if (
                collideRectRect(
                    this.posX + 5,
                    this.posY + 5,
                    this.width - 15,
                    this.height - 15,
                    game.poacherArr[i].posX + 20,
                    game.poacherArr[i].posY,
                    40,
                    61.2
                ) &&
                !game.poacherArr[i].inJail
            ) {
                this.dead = true
            }
        }

        this.aniamlBood()
    }
    setWidthAndHeight() {
        this.width = this.animalImg.width / this.sizeScale
        this.height = this.animalImg.height / this.sizeScale
    }
    aniamlBood() {
        if (this.dead === true) {
            push()
            fill('rgba(255,0,0, 0.3)')
            noStroke()
            ellipse(
                this.posX + this.width / 2,
                this.posY + this.height / 2,
                this.width + 20,
                this.height + 20
            )
            pop()
        }
    }
}
