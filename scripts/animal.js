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
            collideRectRect(
                this.posX,
                this.posY,
                this.width,
                this.height,
                game.poacher.posX,
                game.poacher.posY,
                game.poacher.width,
                game.poacher.height
            )
        ) {
            this.dead = true
            console.log(this.dead)
        }
    }
    setWidthAndHeight() {
        this.width = this.animalImg.width / this.sizeScale
        this.height = this.animalImg.height / this.sizeScale
    }
}
