import {SNAKE_SPEED, update as updateSnack, draw as drawSnacke,snakeIntersection,getSnakeHead} from './snack.js'

import {update as updateFood, draw as drawFood,} from './food.js'  

import {outsideGrid} from './grid.js    '
let gameOver = false
let lastRenderTime = 0
const gameBoard = document.getElementById("game-board") 

function main(currerTime){
    if(gameOver){
        if(confirm("You lost")){
            window.location = "/snake"
        }
        return
    }
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currerTime - lastRenderTime) / 1000
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return
    
    console.log("Render")
    lastRenderTime = currerTime


    update()
    draw()
}

window.requestAnimationFrame(main)


function update(){
    updateSnack()
    updateFood()
    checkDeath()
}

function draw(){
    gameBoard.innerHTML = ''
    drawSnacke(gameBoard)
    drawFood(gameBoard)
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection( )
}


