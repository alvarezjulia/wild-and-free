class Animal {
    constructor(animal, posX, posY, imgUrl, widthSize, heightSize) {
        this.animal = animal
        this.posX = posX
        this.posY = posY
        this.imgUrl = imgUrl
        this.widthSize = widthSize
        this.heightSize = heightSize
        this.animalImg
    }
    setup() {
        this.animalImg = loadImage(this.imgUrl)
    }
    draw() {
        image(
            this.animalImg,
            this.posX,
            this.posY,
            this.animalImg.width / this.widthSize,
            this.animalImg.height / this.heightSize
        )
    }
}
