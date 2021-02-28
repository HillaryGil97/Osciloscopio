import {gridBegin, drawSin,canva} from "./modules/display.js"
const power = document.getElementById('power')
var isClick = false

function reset(){
    giro.forEach((index)=> {
        giro[index]=0
    })
    xPosition = 0
    valTimer = 0.2
    nivFocus=0
    CH1.posY = 0
    CH1.vol = 10
    CH2.posY = 0
    CH2.vol = 10
}

const startMe = () => {
    isClick = !isClick
    if(isClick){
        gridBegin()
        focus.addEventListener('click',changeNivFocus)
        yPos1[0].addEventListener('click',changeDesY1)
        yPos2[0].addEventListener('click',changeDesY2)
        xPos[0].addEventListener('click',changeDesX)
        volCH1[0].addEventListener('click',changeVolCH1)
        volCH2[0].addEventListener('click',changeVolCH2)
        timer[0].addEventListener('click',changeTimer)

    }else{
        canva.width=canva.width;
        reset()
    }
}

var giro=[0,0,0,0,0,0,0] //orden [focus, yPos1, yPos2, XPos,volCH1,volCH2,timer]
var xPosition = 0
var valTimer = 0.2
var nivFocus=0
var CH1 = {
    color : 'rgb(255,0,0)',
    posY : 0,
    vol : 10
}
var CH2 = {
    color : 'rgb(0,0,255)',
    posY : 0,
    vol : 10 
}

power.addEventListener('click',startMe)