class Animal {
    constructor(animal, posX, posY, imgUrl, sizeScale) {
        this.animal = animal
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
        image(
            this.animalImg,
            this.posX,
            this.posY,
            this.animalImg.width / this.sizeScale,
            this.animalImg.height / this.sizeScale
        )
        this.setWidthAndHeight()

        if (
            //RECT TO RECT COLLISION
            // collideRectRect(
            //     this.posX,
            //     this.posY,
            //     this.width,
            //     this.height,
            //     game.poacher.posX,
            //     game.poacher.posY,
            //     game.poacher.width,
            //     game.poacher.height
            // )
            //CIRCLE TO CIRCLE COLLISION
            collideCircleCircle(
                this.posX,
                this.posY,
                this.width,
                game.poacher.posX,
                game.poacher.posY,
                game.poacher.width
            )
        ) {
            this.dead = true
        }
    }
    setWidthAndHeight() {
        this.width = this.animalImg.width / this.sizeScale
        this.height = this.animalImg.height / this.sizeScale
    }
}
