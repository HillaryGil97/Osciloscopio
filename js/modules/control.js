import {canva, gridBegin, drawSignals} from "./display.js"
import {changeYPosCH1,changeYPosCH2,changeXPosition} from "./position.js"
import {configOsci} from "../index.js"

export function startMe(){ //Función incial que llama a todos los demás eventos
    if(configOsci.clickPower){
        gridBegin()
        //Empezando a captar los eventos de los botones y las perillas
        configOsci.botones.focus.addEventListener('click',changeNivFocus)
        configOsci.botones.posYCH1.addEventListener('click',changeYPosCH1)
        configOsci.botones.posYCH2.addEventListener('click',changeYPosCH2)
        configOsci.botones.posX.addEventListener('click',changeXPosition)
    }else{
        reset()        
    }
    configOsci.clickPower = !configOsci.clickPower
}

function reset(){//Función para resetear todos los valores importantes del osciloscopio
    canva.width=canva.width
    configOsci.giro = [0,0,0,0,0,0,0]
    configOsci.xPosition = 0
    configOsci.valTimer = 0.2
    configOsci.nivFocus = 0
    configOsci.CH1.posY = 0
    configOsci.CH1.ban = false
    configOsci.CH1.vol = 10
    configOsci.CH2.posY = 0
    configOsci.CH2.ban = false
    configOsci.CH2.vol = 10
}

export function changeNivFocus(){//Función para aumentar el focus del osciloscopio
    if(!configOsci.clickPower){
        canva.width=canva.width;
        document.getElementById('focus').style.transform = 'rotate(' + configOsci.giro[0]+ 'deg)'
        drawSignals(configOsci.valTimer,configOsci.CH1,configOsci.CH2,configOsci.xPosition,configOsci.nivFocus)
        configOsci.giro[0] = configOsci.giro[0] + 10
        if(configOsci.nivFocus < 0.5)// nivFocus va a llegar solo hasta 0.5 y se regresará a 0 para volverlo a incrementar
            configOsci.nivFocus = configOsci.nivFocus + 0.02
        else{
            configOsci.nivFocus = 0
            configOsci.giro[0] = 0
        }
    }
}