import {canva, gridBegin, drawSignals} from "./display.js"
import {changeYPosCH1,changeYPosCH2,changeXPosition} from "./position.js"
import {changeVolCH1, changeVolCH2, changeTimer} from "./values.js"
import {activeCH1, activeCH2} from "./channels.js"
import {configOsci} from "../index.js"

export function startMe(){ //Función incial que llama a todos los demás eventos
    if(configOsci.clickPower){
        gridBegin()
        //Empezando a captar los eventos de los botones y las perillas
        configOsci.botones.focus.addEventListener('click',changeNivFocus)
        configOsci.botones.posYCH1.addEventListener('click',changeYPosCH1)
        configOsci.botones.posYCH2.addEventListener('click',changeYPosCH2)
        configOsci.botones.posX.addEventListener('click',changeXPosition)
        configOsci.botones.volCH1.addEventListener('click',changeVolCH1)
        configOsci.botones.volCH2.addEventListener('click',changeVolCH2)
        configOsci.botones.timer.addEventListener('click',changeTimer)
        configOsci.botones.CH1.addEventListener('click', activeCH1)
        configOsci.botones.CH2.addEventListener('click', activeCH2)
    }else{
        reset()        
    }
    configOsci.clickPower = !configOsci.clickPower
}

function reset(){//Función para resetear todos los valores importantes del osciloscopio
    canva.width=canva.width//borrando el display
    let CH1 = document.getElementById('CH1')
    let CH2 = document.getElementById('CH2')
    let scaleCH1 = document.getElementById('scaleCH1')
    let scaleCH2 = document.getElementById('scaleCH2')
    let scaleTimer = document.getElementById('scaleTimer')
    //reiniciando valores por defecto
    configOsci.giro = [0,0,0,0,0,0,0]
    configOsci.xPosition = 0
    configOsci.valTimer = 0.09 * 5
    configOsci.nivFocus = 0
    configOsci.CH1.posY = 0
    configOsci.CH1.ban = false
    configOsci.CH1.vol = 41*(1/20)
    configOsci.CH2.scale = 41 * (1/20)
    configOsci.CH2.ban = false
    configOsci.CH2.vol = 1

    //regresando las perillas a 0
    document.getElementById('focus').style.transform = 'rotate(' + configOsci.giro[0]+ 'deg)'
    document.getElementById('yPos1').style.transform = 'rotate(' + configOsci.giro[1]+ 'deg)'
    document.getElementById('yPos2').style.transform = 'rotate(' + configOsci.giro[2]+ 'deg)'
    document.getElementById('xPos').style.transform = 'rotate(' + configOsci.giro[3]+ 'deg)'
    document.getElementById('volCH1').style.transform = 'rotate(' + configOsci.giro[4]+ 'deg)'
    document.getElementById('volCH2').style.transform = 'rotate(' + configOsci.giro[5]+ 'deg)'
    document.getElementById('timer').style.transform = 'rotate(' + configOsci.giro[6]+ 'deg)'

    //reiniciando etiquetas 
    CH1.style.backgroundColor = 'rgb(139, 11, 11)'
    CH1.style.color = 'white'
    CH1.innerHTML = 'Off'

    CH2.style.backgroundColor = 'rgb(139, 11, 11)'
    CH2.style.color = 'white'
    CH2.innerHTML = 'Off'

    //reiniciando escalas
    scaleCH1.innerHTML = '20 [V]'
    scaleCH2.innerHTML = '20 [V]'
    scaleTimer.innerHTML = '5 [ms]'
}

export function changeNivFocus(){//Función para aumentar el focus del osciloscopio
    if(!configOsci.clickPower){
        configOsci.giro[0] = configOsci.giro[0] + 10
        if(configOsci.nivFocus < 0.5)// nivFocus va a llegar solo hasta 0.5 y se regresará a 0 para volverlo a incrementar
            configOsci.nivFocus = configOsci.nivFocus + 0.02
        else{
            configOsci.nivFocus = 0
            configOsci.giro[0] = 0
        }
        canva.width=canva.width;
        document.getElementById('focus').style.transform = 'rotate(' + configOsci.giro[0]+ 'deg)'
        drawSignals(configOsci.valTimer,configOsci.CH1,configOsci.CH2,configOsci.xPosition,configOsci.nivFocus)
    }
}