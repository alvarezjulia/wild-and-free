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
        if (
            collideRectRect(
                this.posX + this.width / 2,
                this.posY + this.height / 2,
                this.width - 15,
                this.height - 15,
                game.poacherArr.forEach(el => el.posX),
                game.poacherArr.forEach(el => el.posY),
                game.poacherArr.forEach(el => el.width),
                game.poacherArr.forEach(el => el.height)
            ) &&
            game.poacherArr.forEach(el => el.inJail) === false
        ) {
            this.dead = true
        }
        this.aniamlBood()
    }
    setWidthAndHeight() {
        this.width = this.animalImg.width / this.sizeScale
        this.height = this.animalImg.height / this.sizeScale
    }
    aniamlBood() {
        if (this.dead === true) {
            fill('rgba(255,0,0, 0.3)')
            ellipse(
                this.posX + this.width / 2,
                this.posY + this.height / 2,
                this.width + 20,
                this.height + 20
            )
        }
    }
}
