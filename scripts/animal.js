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
        // this.saviorCollision()
    }
    // saviorCollision() {
    //     'game.savior.posX: ',game.savior.posX
    //     'this.posX: ', this.posX
    //     if(game.savior.saviorX > this.posX && game.savior.saviorX < this.posX+(this.animalImg.width / this.widthSize) && game.savior.saviorY>this.posY&& game.savior.saviorY<this.posY+(this.animalImg.height / this.heightSize)){
    //         MOVE = MOVE * -1.5
    //         console.log('Hello')
    //     }     
    // } 
}
