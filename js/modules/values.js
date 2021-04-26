import {canva, gridBegin, drawSignals} from "./display.js"
import {configOsci} from "../index.js"
const scaleCH1 = document.getElementById('scaleCH1')

export function changeVolCH1(){
    let voltage = 41;
    if(!configOsci.clickPower){
        switch (configOsci.CH1.vol){
            case voltage * (1/20):
                configOsci.giro[4] = 22.5
                configOsci.CH1.vol = voltage * (1/10)
                scaleCH1.innerHTML = '10 [V]'
            break;
            case voltage * (1/10):
                configOsci.giro[4] = 45
                configOsci.CH1.vol = voltage * (1/5)
                scaleCH1.innerHTML = '5 [V]'
            break;
            case voltage * (1/5):
                configOsci.giro[4] = 67.5
                configOsci.CH1.vol = voltage * (1/2)
                scaleCH1.innerHTML = '2 [V]'
            break;
            case voltage * (1/2):
                configOsci.giro[4] = 90
                configOsci.CH1.vol = voltage
                scaleCH1.innerHTML = '1 [V]'
            break;
            case voltage:
                configOsci.giro[4] = 112.5
                configOsci.CH1.vol = voltage * 2
                scaleCH1.innerHTML = '0.5 [V]'
            break;
            case voltage * 2:
                configOsci.giro[4] = 135
                configOsci.CH1.vol = voltage * 5
                scaleCH1.innerHTML = '200 [mV]'
            break;
            case voltage * 5:
                configOsci.giro[4] = 157.5
                configOsci.CH1.vol = voltage * 10
                scaleCH1.innerHTML = '100 [mV]'
            break;
            case voltage * 10:
                configOsci.giro[4] = 180
                configOsci.CH1.vol = voltage * 20
                scaleCH1.innerHTML = '50 [mV]'
            break;
            default:
                configOsci.giro[4] = 0
                configOsci.CH1.vol = voltage*(1/20)
                scaleCH1.innerHTML = '20 [V]'
            break;
        }
        canva.width=canva.width;
        gridBegin()
        document.getElementById('volCH1').style.transform = 'rotate(' + configOsci.giro[4]+ 'deg)'
        drawSignals(configOsci.valTimer,configOsci.CH1,configOsci.CH2,configOsci.xPosition,configOsci.nivFocus)
    }
}

export function changeVolCH2(){
    if(!configOsci.clickPower){
        if(configOsci.giro[5] < 180){
            console.log(configOsci.giro[5])
            
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
        gridBegin()
        document.getElementById('timer').style.transform = 'rotate(' + configOsci.giro[6]+ 'deg)'
        drawSignals(configOsci.valTimer,configOsci.CH1,configOsci.CH2,configOsci.xPosition,configOsci.nivFocus)
    }
}