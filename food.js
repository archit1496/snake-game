
import {onSnake,expandSnake} from './snake.js';
import {randomGridPosition} from './grid.js'
let food={x:10,y:1};
const EXPANSION_RATE=1;
export function updateFood(){
    if(onSnake(food)){
        expandSnake(EXPANSION_RATE)
        food=getRandomFoodPostion();
    }
}

export function drawFood(gameBoard){
      const foodElement=document.createElement('div');
      foodElement.style.gridRowStart=food.y;
      foodElement.style.gridColumnStart=food.x;
      foodElement.classList.add('food');
      gameBoard.appendChild(foodElement);

  //moveUp();
  //moveDown();
}

function getRandomFoodPostion(){
    let newPosition;
    while(newPosition==null || onSnake(newPosition)){
        newPosition=randomGridPosition()
    }
    return newPosition;
}

