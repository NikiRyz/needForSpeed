class Car {
    constructor(x, y, src = 'https://clck.ru/SVeyN') {
        this.x = x;
        this.y = y;
        this.img = src;
    }
    drawCar = () => {
        let carHtml = document.getElementsByClassName(this.img)[0]
        if (!carHtml) {
            carHtml = document.createElement('img');
            carHtml.className = this.img
            carHtml.src = this.img
            carHtml.style.position = "absolute";
            carHtml.style.width = '300px'
            document.querySelector('.container').appendChild(carHtml)
        }
        carHtml.style.left = this.x + 'px'
        carHtml.style.top = this.y + 'px'
    }
    moveRight = (v = 5) => {
        this.x += v
        this.drawCar()
    }
}

const ferrari = new Car(10, 20, 'https://clck.ru/SVeyk')
const ford = new Car(10, 300, 'https://clck.ru/SVezy')

ferrari.drawCar()
ford.drawCar()
const startFord = setInterval(() => { ford.moveRight(1) }, 10)
document.getElementsByClassName('https://clck.ru/SVezy')[0].onclick = () => { clearInterval(startFord) }
document.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight') { ferrari.moveRight(1) } })