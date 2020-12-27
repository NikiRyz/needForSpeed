class Car {
    constructor(x, y, src='https://clck.ru/SVeyN') {
        this.x = x;
        this.y = y;
        this.img = src;
    }
    drawCar = () => {
        let carHtml=document.getElementsByClassName(this.img)[0]
        if(!carHtml){
            carHtml= document.createElement('img');
            carHtml.className = this.img
            carHtml.src = this.img
            carHtml.style.position = "absolute";
            carHtml.style.width='300px'
            document.querySelector('.container').appendChild(carHtml)
        }
        carHtml.style.left = this.x+'px'
        carHtml.style.top = this.y+'px'
    }

}
const tesla  = new Car(10, 20)


tesla.drawCar()
