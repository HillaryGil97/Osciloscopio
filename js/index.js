import {gridBegin, drawSin,canva, drawSignals} from "./modules/display.js"

//controles
const power = document.getElementById('power')
const auto = document.getElementById('auto')
const focus = document.getElementById('focus')

//posición
const yPos1 = document.getElementById('yPos1')
const yPos2 = document.getElementById('yPos2')
const xPos = document.getElementById('xPos')


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
        yPos1.addEventListener('click',changeDesY1)
        /*yPos2[0].addEventListener('click',changeDesY2)
        xPos[0].addEventListener('click',changeDesX)
        volCH1[0].addEventListener('click',changeVolCH1)
        volCH2[0].addEventListener('click',changeVolCH2)
        timer[0].addEventListener('click',changeTimer)*/

    }else{
        //canva.width=canva.width;
        reset()
    }
}

const changeNivFocus = () => {
    gridBegin()
    document.getElementById('focus').style.transform = 'rotate(' + giro[0]+ 'deg)'
    drawSignals(valTimer,CH1,CH2,xPosition,nivFocus)
    giro[0]=giro[0]+10
    if(nivFocus<0.5)// nivFocus va a llegar solo hasta 0.5 y se regresará a 0 para volverlo a incrementar
        nivFocus=nivFocus+0.02
    else
        nivFocus=0
}

const changeDesY1 = () => {
    canva.width=canva.width;
    gridBegin()
    document.getElementById('yPos1').style.transform = 'rotate(' + giro[1]+ 'deg)'
    giro[1]=giro[1]+10
    //CH1.posY=CH1.posY-5;
    if(CH1.posY>-210 || CH1.posY===0){
        console.log("entro")
        CH1.posY = CH1.posY-5
    }
    else if(CH1.posY===-210)
        CH1.posY = CH1.posY+5
    console.log(CH1.posY)
    drawSignals(valTimer,CH1,CH2,xPosition,nivFocus)
}

const changeDesY2 = () => {
    canva.width=canva.width;
    gridBegin()
    document.getElementById('yPos2').style.transform = 'rotate(' + giro[2]+ 'deg)'
    drawSignals(valTimer,CH1,CH2,xPosition,nivFocus)
    giro[2]=giro[2]+10
    CH2.posY=CH2.posY-5;

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