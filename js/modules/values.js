import {canva, gridBegin, drawSignals} from "./display.js"
import {configOsci} from "../index.js"

export function changeVolCH1(){
    let voltage = 41;
    if(!configOsci.clickPower){
        if(configOsci.giro[4] < 160){
            switch (configOsci.giro[4]){
                case 0:
                    configOsci.giro[4] = configOsci.giro[4] + 20
                    configOsci.CH1.vol= voltage*(1/20);
                    console.log(`voltaje 20= ${configOsci.CH1.vol}`)
                break;
                case 20:
                    configOsci.giro[4] = configOsci.giro[4] + 20
                    
                    console.log(`voltaje 10= ${configOsci.CH1.vol}`)
                break;
                case 40:
                    configOsci.giro[4] = configOsci.giro[4] + 20
                    configOsci.CH1.vol= voltage*(1/5);
                    console.log(`voltaje 5= ${configOsci.CH1.vol}`)
                break;
                case 60:
                    configOsci.giro[4] = configOsci.giro[4] + 20
                    configOsci.CH1.vol= voltage*(1/2);
                    console.log(`voltaje 2= ${configOsci.CH1.vol}`)
                break;
                case 80:
                    configOsci.giro[4] = configOsci.giro[4] + 20
                    configOsci.CH1.vol= voltage;
                    console.log(`voltaje 1= ${configOsci.CH1.vol}`)
                break;
                case 100:
                    configOsci.giro[4] = configOsci.giro[4] + 20
                    configOsci.CH1.vol= voltage * 2;
                    console.log(`voltaje 0.5= ${configOsci.CH1.vol}`)
                break;
                case 120:
                    configOsci.giro[4] = configOsci.giro[4] + 20
                    configOsci.CH1.vol= voltage * 5;
                    console.log(`voltaje 200m= ${configOsci.CH1.vol}`)
                break;
                case 140:
                    configOsci.giro[4] = configOsci.giro[4] + 20
                    configOsci.CH1.vol= voltage * 10;
                    console.log(`voltaje 100m= ${configOsci.CH1.vol}`)
                break;
                case 160:
                    configOsci.giro[4] = configOsci.giro[4] + 20
                    configOsci.CH1.vol= voltage * 20;
                    console.log(`voltaje 50m= ${configOsci.CH1.vol}`)
                break;
            }
        }else{
            configOsci.giro[4] = 0
            configOsci.CH1.vol= 41*(1/20)
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