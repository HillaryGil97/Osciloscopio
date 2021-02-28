//variables necesarias para el area del display
export const canva = document.getElementById('draw')
var ctx = canva.getContext('2d')
const X = 450
const Y = 410

export function gridBegin(){ //Función para dibujar las lineas de escala del osciloscopio
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

export function drawSin(frec,amp,desX, desY, intens, color){//función para dibujar una senoidal
    for(let i=0;i<X;i=i+0.05){
        let ang = (Math.PI*i)/2
        let funY = amp*Math.sin((ang*frec) + desX)+205+desY
        ctx.beginPath();
        ctx.arc(i,funY, intens, 0, Math.PI * 2, true)
        ctx.strokeStyle = color
        ctx.stroke();
    }
}