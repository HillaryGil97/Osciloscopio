import{canva,gridBegin,drawSignals} from "./display.js"
import {configOsci} from "../index.js"
const CH1 = document.getElementById('CH1')
const CH2 = document.getElementById('CH2')

export function activeCH1(){
    if(!configOsci.CH1.ban){
        CH1.style.backgroundColor = 'rgb(36, 161, 89)'
        CH1.style.color = 'black'
        CH1.innerHTML = 'On'
        configOsci.CH1.ban = !configOsci.CH1.ban
        canva.width=canva.width;
        gridBegin()
        drawSignals(configOsci.valTimer,configOsci.CH1,configOsci.CH2,configOsci.xPosition,configOsci.nivFocus)
    }else{
        CH1.style.backgroundColor = 'rgb(139, 11, 11)'
        CH1.style.color = 'white'
        CH1.innerHTML = 'Off'
        configOsci.CH1.ban = !configOsci.CH1.ban
        canva.width=canva.width;
        gridBegin()
        drawSignals(configOsci.valTimer,configOsci.CH1,configOsci.CH2,configOsci.xPosition,configOsci.nivFocus)
    }
}

export function activeCH2(){
    if(!configOsci.CH2.ban){
        CH2.style.backgroundColor = 'rgb(36, 161, 89)'
        CH2.style.color = 'black'
        CH2.innerHTML = 'On'
        configOsci.CH2.ban = !configOsci.CH2.ban
        canva.width=canva.width;
        gridBegin()
        drawSignals(configOsci.valTimer,configOsci.CH1,configOsci.CH2,configOsci.xPosition,configOsci.nivFocus)
    }else{
        CH2.style.backgroundColor = 'rgb(139, 11, 11)'
        CH2.style.color = 'white'
        CH2.innerHTML = 'Off'
        configOsci.CH2.ban = !configOsci.CH2.ban
        canva.width=canva.width;
        gridBegin()
        drawSignals(configOsci.valTimer,configOsci.CH1,configOsci.CH2,configOsci.xPosition,configOsci.nivFocus)
    }
}