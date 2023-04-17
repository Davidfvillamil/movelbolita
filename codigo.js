var velocityX = 20;
var positionX = 0;
var velocityY = 15;
var positionY = 0;
var ball = document.querySelector('#ball');
var body = document.querySelector('#cuerpo')
var limitr = 800;
var limitl = 0;
var moving_rigth = true
var moving_down = true




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
            crearBola()
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
            crearBola()
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
            crearBola()
        }
    } 
}

function crearBola(){

    var red = Math.floor(Math.random()*256)
    var green = Math.floor(Math.random()*256)
    var blue = Math.floor(Math.random()*256)
    var moving_right_new = true
    var moving_down_new = true
    
    let position = 'absolute'
    let left = Math.floor(Math.random()* limitr)
    let top = Math.floor(Math.random()* limitr)
    let width = 50
    let height = 50
    let borderRadius = 50
    let backgroundColor = "rgb" + "(" + red + "," + green + "," + blue + ")"
    let velocidad = Math.floor(Math.random()* 100)

    

    let nueva_bola = document.createElement('div')
    nueva_bola.classList.add('bola')

    nueva_bola.style.position = position
    nueva_bola.style.left = left + 'px'
    nueva_bola.style.top = top + 'px'
    nueva_bola.style.width = width + 'px'
    nueva_bola.style.height = height + 'px'
    nueva_bola.style.borderRadius = borderRadius + '%'
    nueva_bola.style.backgroundColor = backgroundColor
    nueva_bola.style.velocidad = velocidad

    body.appendChild(nueva_bola)
   

    setInterval(() => {
      let positionX_nueva_bola = nueva_bola.style.left
      let positionY_nueva_bola = nueva_bola.style.top
      
      if (moving_right_new){
        positionX_nueva_bola = parseInt(positionX_nueva_bola) + velocityX
        nueva_bola.style.left = positionX_nueva_bola + 'px'
        if(positionX_nueva_bola >= limitr){
            moving_right_new = false
        }
      }else{
        positionX_nueva_bola = parseInt(positionX_nueva_bola) - velocityX
        nueva_bola.style.left = positionX_nueva_bola + 'px'
        if(positionX_nueva_bola <= limitl){
            moving_right_new = true
        }
      }
      if (moving_down_new){
        positionY_nueva_bola = parseInt(positionY_nueva_bola) + velocityY
        nueva_bola.style.top = positionY_nueva_bola + 'px'
        if(positionY_nueva_bola >= limitr){
            moving_down_new = false
        }
      }else{
        positionY_nueva_bola = parseInt(positionY_nueva_bola) - velocityY
        nueva_bola.style.top = positionY_nueva_bola + 'px'
        if(positionY_nueva_bola <= limitl){
            moving_down_new = true
        }
      }
    }, 50)

}


setInterval(mover,50)
setInterval(moverabajo,50)










