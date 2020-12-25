import {snakeSpeed,updateSnake,drawSnake,getSnakeHead,snakeIntersection} from './snake.js';
import {outSideGrid} from './grid.js'
import {drawFood,updateFood} from './food.js'
let lastRenderTime=0;
let gameOver=false;
const gameBoard=document.getElementById('game-board')
function main(currentTime){
    if(gameOver)
    {
        if(confirm('You Lost. Press ok to restart.')){
            window.location='/';
        }
        return
    }
    window.requestAnimationFrame(main)
    const secondsSinceLastRenderTime=(currentTime-lastRenderTime)/1000;
    if(secondsSinceLastRenderTime<1/snakeSpeed)
    return
    console.log("renders")
    lastRenderTime=currentTime;

    update();
    draw();
    
}

window.requestAnimationFrame(main);

function update(){
    updateSnake();
    updateFood();
    checkDeath();
}

function draw(){
    gameBoard.innerHTML='';

    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath(){
    gameOver=outSideGrid(getSnakeHead()) || snakeIntersection()
}