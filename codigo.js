var velocityX = 15;
var positionX = 0;
var velocityY = 3;
var positionY = 0;
var ball = document.querySelector('#ball');
var limitr = 500;
var limitl = 0;
var moving_rigth = true
var moving_down = true


function mover(){

    if (moving_rigth){
        positionX = positionX + velocityX;
        ball.style.left = positionX + 'px';
        if(positionX >= limitr){
        moving_rigth = false
        }
    }else{
        positionX = positionX - velocityX;
        ball.style.left = positionX + 'px';
        if(positionX <= limitl){
        moving_rigth = true
        }
    } 
}

function moverabajo(){
    if (moving_down){
        positionY = positionY + velocityY;
        ball.style.top = positionY + 'px';
        if(positionY >= limitr){
        moving_down = false
        }
    }else{
        positionY = positionY - velocityY;
        ball.style.top = positionY + 'px';
        if(positionY <= limitl){
        moving_down = true
        }
    } 
}

setInterval(mover,50)
setInterval(moverabajo,50)










