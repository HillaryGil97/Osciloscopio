//display
const canva = document.getElementById('draw')
var ctx = canva.getContext('2d')
const X = 450
const Y = 410

//sección de control
const power = document.getElementsByName('power')
const auto = document.getElementsByName('auto')
const focus = document.getElementsByName('focus')

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

function drawSin(frec, amp,des,intens,){
    for(let i=0;i<X;i=i+0.05){
        let ang = (Math.PI*i)/2
        let funY = amp*Math.sin((ang*frec) + des)+205
        ctx.beginPath();
        ctx.arc(i,funY, intens, 0, Math.PI * 2, true)
        ctx.strokeStyle = 'rgb(255,0,0)'
        ctx.stroke();
    }
}

const startMe = () => {
    isClick = !isClick
    if(isClick){
        gridBegin()
        focus[0].addEventListener('click',changeNivFocus)
    }else{
        canva.width=canva.width;
    }
}

const changeNivFocus = () => {
    canva.width=canva.width;
    gridBegin()
    document.getElementById('imgFocus').style.transform = 'rotate(' + giro+ 'deg)'
    drawSin(0.1,100,0,nivFocus)
    giro=giro+10
    nivFocus=nivFocus+0.02
}
var giro=0
var nivFocus=0
power[0].addEventListener('click',startMe)


