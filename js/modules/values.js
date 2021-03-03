import {canva, gridBegin, drawSignals} from "./display.js"
import {configOsci} from "../index.js"

export function changeVolCH1(){
    if(!configOsci.clickPower){
        if(configOsci.CH1.vol < 220){
            configOsci.giro[4] = configOsci.giro[4] + 10
            configOsci.CH1.vol= configOsci.CH1.vol+10;
        }else{
            configOsci.giro[4] = 0
            configOsci.CH1.vol= 1
        }
        canva.width=canva.width;
        gridBegin()
        document.getElementById('volCH1').style.transform = 'rotate(' + configOsci.giro[4]+ 'deg)'
        drawSignals(configOsci.valTimer,configOsci.CH1,configOsci.CH2,configOsci.xPosition,configOsci.nivFocus)
    }
}

export function changeVolCH2(){
    if(!configOsci.clickPower){
        if(configOsci.CH2.vol < 220){
            configOsci.giro[5] = configOsci.giro[5] + 10
            configOsci.CH2.vol= configOsci.CH2.vol+10;
        }else{
            configOsci.giro[5] = 0
            configOsci.CH2.vol= 1
        }
        canva.width=canva.width;
        gridBegin()
        document.getElementById('volCH2').style.transform = 'rotate(' + configOsci.giro[5]+ 'deg)'
        drawSignals(configOsci.valTimer,configOsci.CH1,configOsci.CH2,configOsci.xPosition,configOsci.nivFocus)
    }
}

export function changeTimer(){
    if(!configOsci.clickPower){
        if(configOsci.valTimer > 0){
            configOsci.giro[6] = configOsci.giro[6] + 10 
            configOsci.valTimer = configOsci.valTimer - 0.01;
        }else{
            configOsci.giro[6] = 0
            configOsci.valTimer= 0.2
        }
        canva.width=canva.width;
        console.log(configOsci.valTimer)
        gridBegin()
        document.getElementById('timer').style.transform = 'rotate(' + configOsci.giro[6]+ 'deg)'
        drawSignals(configOsci.valTimer,configOsci.CH1,configOsci.CH2,configOsci.xPosition,configOsci.nivFocus)
    }
}