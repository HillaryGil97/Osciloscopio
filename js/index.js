//display
const canva = document.getElementById('draw')
var ctx = canva.getContext('2d')
const X = 450
const Y = 410

//sección de control
const power = document.getElementsByName('power')
const auto = document.getElementsByName('auto')
const focus = document.getElementsByName('focus')

//sección de posicionamiento
const yPos1 = document.getElementsByName('yPos1')
const yPos2 = document.getElementsByName('yPos2')
const xPos = document.getElementsByName('xPos')

//sección de propiedades

const volCH1 = document.getElementsByName('voltsCH1')
const volCH2 = document.getElementsByName('voltsCH2')
const timer = document.getElementsByName('timer')

var isClick = false

function gridBegin(){ //Función para dibujar las lineas de escala del osciloscopio
    for(let i=0;i<X;i=i+45){
        ctx.beginPath();
        ctx.moveTo(i,0);
        ctx.lineTo(i,410);
        i===225 ? ctx.strokeStyle = 'rgb(13,60,60)': ctx.strokeStyle = 'rgb(35,160,160)';
        ctx.stroke();
    }
    for(let i=0;i<Y;i=i+41){
        ctx.beginPath();
        ctx.moveTo(0,i);
        ctx.lineTo(450,i);
        i===205 ? ctx.strokeStyle = 'rgb(13,60,60)': ctx.strokeStyle = 'rgb(35,160,160)';
        ctx.stroke();
    }
}

function drawSin(frec,amp,desX, desY, intens, color){//función para dibujar una senoidal
    for(let i=0;i<X;i=i+0.05){
        let ang = (Math.PI*i)/2
        let funY = amp*Math.sin((ang*frec) + desX)+205+desY
        ctx.beginPath();
        ctx.arc(i,funY, intens, 0, Math.PI * 2, true)
        ctx.strokeStyle = color
        ctx.stroke();
    }
}

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
        focus[0].addEventListener('click',changeNivFocus)
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

const changeNivFocus = () => {
    canva.width=canva.width;
    gridBegin()
    document.getElementById('imgFocus').style.transform = 'rotate(' + giro[0]+ 'deg)'
    drawSin(valTimer,CH1.vol,xPosition,CH1.posY,nivFocus,CH1.color)
    drawSin(valTimer,CH2.vol,xPosition,CH2.posY,nivFocus,CH2.color)
    giro[0]=giro[0]+10
    nivFocus=nivFocus+0.02
}

const changeDesY1 = () => {
    canva.width=canva.width;
    gridBegin()
    document.getElementById('imgYPos1').style.transform = 'rotate(' + giro[1]+ 'deg)'
    drawSin(valTimer,CH1.vol,xPosition,CH1.posY,nivFocus,CH1.color)
    drawSin(valTimer,CH2.vol,xPosition,CH2.posY,nivFocus,CH2.color)
    giro[1]=giro[1]+10
    CH1.posY=CH1.posY-5;
}
const changeDesY2 = () => {
    canva.width=canva.width;
    gridBegin()
    document.getElementById('imgYPos2').style.transform = 'rotate(' + giro[2]+ 'deg)'
    drawSin(valTimer,CH1.vol,xPosition,CH1.posY,nivFocus,CH1.color)
    drawSin(valTimer,CH2.vol,xPosition,CH2.posY,nivFocus,CH2.color)
    giro[2]=giro[2]+10
    CH2.posY=CH2.posY-5;
}
const changeDesX = () => {
    canva.width=canva.width;
    gridBegin()
    document.getElementById('imgXPos').style.transform = 'rotate(' + giro[3]+ 'deg)'
    drawSin(valTimer,CH1.vol,xPosition,CH1.posY,nivFocus,CH1.color)
    drawSin(valTimer,CH2.vol,xPosition,CH2.posY,nivFocus,CH2.color)
    giro[3]=giro[3]+10
    xPosition=xPosition-5;
}
const changeVolCH1 = () => {
    canva.width=canva.width;
    gridBegin()
    document.getElementById('imgVoltsCH1').style.transform = 'rotate(' + giro[4]+ 'deg)'
    drawSin(valTimer,CH1.vol,xPosition,CH1.posY,nivFocus,CH1.color)
    drawSin(valTimer,CH2.vol,xPosition,CH2.posY,nivFocus,CH2.color)
    giro[4]=giro[4]+10
    CH1.vol=CH1.vol+10;;
}
const changeVolCH2 = () => {
    canva.width=canva.width;
    gridBegin()
    document.getElementById('imgVoltsCH2').style.transform = 'rotate(' + giro[5]+ 'deg)'
    drawSin(valTimer,CH1.vol,xPosition,CH1.posY,nivFocus,CH1.color)
    drawSin(valTimer,CH2.vol,xPosition,CH2.posY,nivFocus,CH2.color)
    giro[5]=giro[5]+10
    CH2.vol=CH2.vol+10;
}
const changeTimer = () => {
    canva.width=canva.width;
    gridBegin()
    document.getElementById('imgTimer').style.transform = 'rotate(' + giro[6]+ 'deg)'
    drawSin(valTimer,CH1.vol,xPosition,CH1.posY,nivFocus,CH1.color)
    drawSin(valTimer,CH2.vol,xPosition,CH2.posY,nivFocus,CH2.color)
    giro[6]=giro[6]+10
    valTimer=valTimer-0.01;
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
power[0].addEventListener('click',startMe)


