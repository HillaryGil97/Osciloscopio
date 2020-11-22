//display
const canva = document.getElementById('draw')
var ctx = canva.getContext('2d')

//sección de control
const power = document.getElementsByName('power')
const auto = document.getElementsByName('auto')

//sección de posición
const yPos1 = document.getElementsByName('yPos1')
const yPos2 = document.getElementsByName('yPos2')
const xPos = document.getElementsByName('xPos')

//sección de propiedades
const voltsCH1 = document.getElementsByName('voltsCH1')
const voltsCH2 = document.getElementsByName('voltsCH2')
const time = document.getElementsByName('time')

var isClick=false;

function gridBegin(){ //Función para dibujar las lineas de escala del osciloscopio
    let x=450
    let y=410
    for(let i=0;i<x;i=i+45){
        ctx.beginPath();
        ctx.moveTo(i,0);
        ctx.lineTo(i,410);
        i===225 ? ctx.strokeStyle = 'rgb(13,60,60)': ctx.strokeStyle = 'rgb(35,160,160)';
        ctx.stroke();
    }
    for(let i=0;i<y;i=i+41){
        ctx.beginPath();
        ctx.moveTo(0,i);
        ctx.lineTo(450,i);
        i===205 ? ctx.strokeStyle = 'rgb(13,60,60)': ctx.strokeStyle = 'rgb(35,160,160)';
        ctx.stroke();
    }
}

function drawSin(){
    
}

const startMe = () => {
    isClick = !isClick
    if(isClick){
        gridBegin()

    }else{
        canva.width=canva.width;
    }
}

power[0].addEventListener('click',startMe)