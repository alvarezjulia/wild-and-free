class Animal {
    constructor() {
        this.giraffeX = 200
        this.giraffeY = 120
        this.hippoX = 400
        this.hippoY = 400
    }
    setup() {
        this.giraffeImg = loadImage('./../assets/Giraffe.JPG')
        this.hippoImg = loadImage('./../assets/Hippo.jpg')
    }
    draw() {
        image(
            this.giraffeImg,
            this.giraffeX,
            this.giraffeY,
            this.giraffeImg.width / 2,
            this.giraffeImg.height / 2
        )
        image(this.hippoImg, this.hippoX, this.hippoY, this.hippoImg.width / 9, this.hippoImg.height / 9)
    }
}
