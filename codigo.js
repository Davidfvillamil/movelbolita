var velocityX = 20;
var positionX = 0;
var velocityY = 15;
var positionY = 0;
var ball = document.querySelector('#ball');
var body = document.querySelector('#cuerpo')
var limitr = 500;
var limitl = 0;
var moving_rigth = true
var moving_down = true




class Bola {
    constructor(position, left, top, width, height, borderRadius, backgroundColor, velocidad) {
        this.position = position;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.borderRadius = borderRadius;
        this.backgroundColor = backgroundColor;
        this.velocidad = velocidad;

    }
}
var bolas = []
var bolas_en_html = []

// creación de una bola con el constructor



function mover(){

    if (moving_rigth){
        positionX = positionX + velocityX;
        ball.style.left = positionX + 'px';
        if(positionX >= limitr){
            moving_rigth = false
            var red = Math.floor(Math.random()*256)
            var green = Math.floor(Math.random()*256)
            var blue = Math.floor(Math.random()*256)
            ball.style.backgroundColor = "rgb" + "(" + red + "," + green + "," + blue + ")"
            crearBola()
            console.log(bolas)

        }
    }else{
        positionX = positionX - velocityX;
        ball.style.left = positionX + 'px';
        if(positionX <= limitl){
            moving_rigth = true
            var red = Math.floor(Math.random()*256)
            var green = Math.floor(Math.random()*256)
            var blue = Math.floor(Math.random()*256)
            ball.style.backgroundColor = "rgb" + "(" + red + "," + green + "," + blue + ")"
        }
    } 
}

function moverabajo(){
    if (moving_down){
        positionY = positionY + velocityY;
        ball.style.top = positionY + 'px';
        if(positionY >= limitr){
            moving_down = false
            var red = Math.floor(Math.random()*256)
            var green = Math.floor(Math.random()*256)
            var blue = Math.floor(Math.random()*256)
            ball.style.backgroundColor = "rgb" + "(" + red + "," + green + "," + blue + ")"
        }
    }else{
        positionY = positionY - velocityY;
        ball.style.top = positionY + 'px';
        if(positionY <= limitl){
            moving_down = true
            var red = Math.floor(Math.random()*256)
            var green = Math.floor(Math.random()*256)
            var blue = Math.floor(Math.random()*256)
            ball.style.backgroundColor = "rgb" + "(" + red + "," + green + "," + blue + ")"
        }
    } 
}

function crearBola(){

    var red = Math.floor(Math.random()*256)
    var green = Math.floor(Math.random()*256)
    var blue = Math.floor(Math.random()*256)
    

    let position = 'absolute'
    let left = Math.floor(Math.random()* limitr)
    let top = Math.floor(Math.random()* limitr)
    let width = 50
    let height = 50
    let borderRadius = 0.5
    let backgroundColor = "rgb" + "(" + red + "," + green + "," + blue + ")"
    let velocidad = Math.floor(Math.random()* 100)

    bolas.push(new Bola(position,left,top,width,height,borderRadius,backgroundColor,velocidad))

    let nueva_bola = document.createElement('div')
    nueva_bola.classList.add('bola')

    nueva_bola.style.position = position
    nueva_bola.style.left = left
    nueva_bola.style.top = top
    nueva_bola.style.width = width
    nueva_bola.style.height = height
    nueva_bola.style.borderRadius = borderRadius
    nueva_bola.style.backgroundColor = backgroundColor
    nueva_bola.style.velocidad = velocidad
    
    body.appendChild(nueva_bola)
    
}

setInterval(mover,50)
setInterval(moverabajo,50)










