import {randomGridPosition} from './grid.js'
import {onSnake, expandSnake} from './snack.js'
let food = getRandomFoodPostion()
const EXPANSION_RATE = 1
export function update(){
    if (onSnake(food)){
        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPostion()
    }    
}

export function draw(gameBord){
    const foodelement = document.createElement('div')
    foodelement.style.gridRowStart = food.y
    foodelement.style.gridColumnStart = food.x
    foodelement.classList.add("food")
    gameBord.appendChild(foodelement)
}


function getRandomFoodPostion(){
    let newFoodPosition
    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition()
    } 
    return newFoodPosition
}