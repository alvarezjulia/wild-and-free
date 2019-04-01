class Animal {
    constructor() {
        this.rect2x = 200
        this.rect2y = 120
    }
    setup() {
        this.img = loadImage('./../assets/Giraffe.JPG')
    }
    draw() {
        // fill(50, 140, 20)
        // rect(this.rect2x, this.rect2y, 30, 80)
        image(this.img, this.rect2x, this.rect2y, this.img.width / 2, this.img.height / 2)
    }
}
