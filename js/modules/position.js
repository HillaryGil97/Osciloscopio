import {canva, gridBegin, drawSignals} from "./display.js"
import {configOsci} from "../index.js"

export function changeYPosCH1(){
    if(!configOsci.clickPower){
        if(configOsci.CH1.posY > -210){
            configOsci.giro[1] = configOsci.giro[1]+10
            configOsci.CH1.posY = configOsci.CH1.posY-5
        }else{
            configOsci.giro[1] = 0
            configOsci.CH1.posY = 210
        }
        canva.width=canva.width;
        gridBegin()
        document.getElementById('yPos1').style.transform = 'rotate(' + configOsci.giro[1]+ 'deg)'
        drawSignals(configOsci.valTimer,configOsci.CH1,configOsci.CH2,configOsci.xPosition,configOsci.nivFocus)
    }
}

export function changeYPosCH2(){
    if(!configOsci.clickPower){
        console.log(configOsci.CH2.posY)
        if(configOsci.CH2.posY > 0){
            configOsci.giro[2] = configOsci.giro[2] + 10
            configOsci.CH2.posY -= 5
        }else{
            configOsci.giro[2] = 0
            configOsci.CH2.posY = 205
        }
        
        canva.width=canva.width;
        gridBegin()
        document.getElementById('yPos2').style.transform = 'rotate(' + configOsci.giro[2]+ 'deg)'
        drawSignals(configOsci.valTimer,configOsci.CH1,configOsci.CH2,configOsci.xPosition,configOsci.nivFocus)
    }
}

export function changeXPosition(){
    if(!configOsci.clickPower){
        if(configOsci.xPosition > - 225){
            configOsci.giro[3] = configOsci.giro[3]+10
            configOsci.xPosition = configOsci.xPosition-5
        }else{
            configOsci.giro[3] = 0
            configOsci.xPosition = 225
        }
        canva.width=canva.width;
        gridBegin()
        document.getElementById('xPos').style.transform = 'rotate(' + configOsci.giro[3]+ 'deg)'
        drawSignals(configOsci.valTimer,configOsci.CH1,configOsci.CH2,configOsci.xPosition,configOsci.nivFocus)
    }
}