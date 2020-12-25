import { getInputDirection } from "./input.js";

export const snakeSpeed=5;
let newSegment=0;
let snakeBoard=[{x:10,y:10}]
export function updateSnake(){
    addNewSegment();
   const inputDirection=getInputDirection()
   for(let i=snakeBoard.length-2;i>=0;i--)
   {
       snakeBoard[i+1]={ ...snakeBoard[i]}
   }
   snakeBoard[0].x +=inputDirection.x;
   snakeBoard[0].y +=inputDirection.y;
}

export function drawSnake(gameBoard){
  snakeBoard.forEach(value=>{
      const snakeElement=document.createElement('div');
      snakeElement.style.gridRowStart=value.y;
      snakeElement.style.gridColumnStart=value.x;
      snakeElement.classList.add('snake');
      gameBoard.appendChild(snakeElement);
  })
  
}

export function expandSnake(rate){
    newSegment+=rate;
}

export function onSnake(food,{ignoreHead=false}={}){

    return snakeBoard.some((elm,index)=>{
        if(ignoreHead && index===0) return false
        return equalPosition(elm,food)
    })
  
}

function equalPosition(segment,food){
    if(food)
    return segment.x===food.x && segment.y===food.y;
}

function addNewSegment(){
    for(let x=0;x<newSegment;x++)
    {
        snakeBoard.push({...snakeBoard[snakeBoard.length-1]})
    }
    newSegment=0;
}

export function getSnakeHead(){
    return snakeBoard[0];
}

export function snakeIntersection(){
    return onSnake(snakeBoard[0],{ignoreHead:true});
}