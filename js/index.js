import {startMe} from "./modules/control.js"

export var configOsci = {
    clickPower : true, //----------------> variable para indicar el estado del osciloscopio
    botones : {
        //los botones de control
        power : document.getElementById('power'),
        auto : document.getElementById('auto'),
        focus : document.getElementById('focus'),

        //los botones de posición
        posYCH1 : document.getElementById('yPos1'),
        posYCH2 : document.getElementById('yPos2'),
        posX : document.getElementById('xPos'),

        //los botones de valores
        volCH1 : document.getElementById('volCH1'),
        volCH2 : document.getElementById('volCH2'),
        timer : document.getElementById('timer'),

        //los botones de activación de canales
        CH1 : document.getElementById('CH1'),
        CH2 : document.getElementById('CH2')
    },
    giro : [0,0,0,0,0,0,0], //orden [focus, yPos1, yPos2, XPos,volCH1,volCH2,timer]
    xPosition : 0,
    valTimer : 0.2,
    nivFocus : 0,
    CH1 : {
        ban : false,
        color : 'rgb(255,0,0)',
        posY : 0,
        vol : 10
    },
    CH2 : {
        ban : false,
        color : 'rgb(0,0,255)',
        posY : 0,
        vol : 10 
    }
}

power.addEventListener('click',startMe)