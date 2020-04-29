window.onload = ()=>{
  var alphabet =   ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


}

var arrayOfSouns = ["AirGunDrill_S08IN.25.wav", "", ""
]

autoUnlock = true;


function playMeNow(letter){
    if(letter=='a'){
        var soundA = new Howl({
            src: ['./Sounds/Sound-Effects/shortSounds/']
        });
    
        var idA = soundA.play();
    }

    if(letter=='b'){
        var soundB = new Howl({
            src: ['./Sounds/Sound-Effects/shortSounds/']
        });
        var idB = soundB.play();

    }

    if(letter=='c'){
        var soundC = new Howl({
            src: ['./Sounds/Sound-Effects/shortSounds/']
        });
        var idC = soundC.play();

    }
    if(letter=='d'){
        var soundD = new Howl({
            src: ['./Sounds/Sound-Effects/shortSounds/']
        });
        var idD = soundD.play();

    }
    if(letter=='e'){
        var soundE = new Howl({
            src: ['./Sounds/Sound-Effects/shortSounds/']
        });
        var idE = soundE.play();

    }
    if(letter=='f'){
        var soundF = new Howl({
            src: ['./Sounds/Sound-Effects/shortSounds/']
        });
        var idF = soundF.play();

    }
    if(letter=='g'){
        var soundG = new Howl({
            src: ['./Sounds/Sound-Effects/shortSounds/']
        });
        var idG = soundG.play();

    }
    if(letter=='h'){
        var soundH = new Howl({
            src: ['./Sounds/Sound-Effects/shortSounds/']
        });
        var idH = soundH.play();

    }
    if(letter=='i'){
        var soundI = new Howl({
            src: ['./Sounds/Sound-Effects/shortSounds/']
        });
        var idI = soundI.play();

    }
    if(letter=='j'){
        var soundJ = new Howl({
            src: ['./Sounds/Sound-Effects/shortSounds/']
        });
        var idJ = soundJ.play();

    }
    if(letter=='k'){
        var soundK = new Howl({
            src: ['./Sounds/Sound-Effects/shortSounds/']
        });
        var idK = soundK.play();

    }
    if(letter=='l'){
        var soundL = new Howl({
            src: ['./Sounds/Sound-Effects/shortSounds/ArrowImpactHuman_S08WA.4.4.wav']
        });
        var idL = soundL.play();

    }
    if(letter=='m'){
        var soundM = new Howl({
            src: ['./Sounds/Sound-Effects/shortSounds/ArrowImpactHuman_S08WA.4.4.wav']
        });
        var idM = soundM.play();

    }
    if(letter=='n'){
        var soundN = new Howl({
            src: ['./Sounds/Sound-Effects/shortSounds/ArrowImpactHuman_S08WA.4.4.wav']
        });
        var idN = soundN.play();

    }
    if(letter=='o'){
        var soundO = new Howl({
            src: ['./Sounds/Sound-Effects/shortSounds/ArrowImpactHuman_S08WA.4.4.wav']
        });
        var idO = soundO.play();

    }
    if(letter=='p'){
        var soundP = new Howl({
            src: ['./Sounds/Sound-Effects/shortSounds/ArrowImpactHuman_S08WA.4.4.wav']
        });
        var idP = soundP.play();

    }
    if(letter=='q'){
        var soundQ = new Howl({
            src: ['./Sounds/Sound-Effects/shortSounds/ArrowImpactHuman_S08WA.4.4.wav']
        });
        var idQ = soundQ.play();

    }
    if(letter=='r'){
        var soundR = new Howl({
            src: ['./Sounds/Sound-Effects/shortSounds/ArrowImpactHuman_S08WA.4.4.wav']
        });
        var idR = soundR.play();

    }
    if(letter=='s'){
        var soundS = new Howl({
            src: ['./Sounds/Sound-Effects/shortSounds/ArrowImpactHuman_S08WA.4.4.wav']
        });
        var idS = soundS.play();

    }
    if(letter=='t'){
        var soundT = new Howl({
            src: ['./Sounds/Sound-Effects/shortSounds/ArrowImpactHuman_S08WA.4.4.wav']
        });
        var idT = soundT.play();

    }
    if(letter=='u'){
        var soundU = new Howl({
            src: ['./Sounds/Sound-Effects/shortSounds/ArrowImpactHuman_S08WA.4.4.wav']
        });
        var idU = soundU.play();

    }
    if(letter=='v'){
        var soundV = new Howl({
            src: ['./Sounds/Sound-Effects/shortSounds/ArrowImpactHuman_S08WA.4.4.wav']
        });
        var idV = soundV.play();

    }
    if(letter=='w'){
        var soundW = new Howl({
            src: ['./Sounds/Sound-Effects/shortSounds/ArrowImpactHuman_S08WA.4.4.wav']
        });
        var idW = soundW.play();

    }
    if(letter=='x'){
        var soundX = new Howl({
            src: ['./Sounds/Sound-Effects/shortSounds/ArrowImpactHuman_S08WA.4.4.wav']
        });
        var idX = soundX.play();

    }
    if(letter=='y'){
        var soundY = new Howl({
            src: ['./Sounds/Sound-Effects/shortSounds/ArrowImpactHuman_S08WA.4.4.wav']
        });
        var idY = soundY.play();

    }
    if(letter=='z'){
        var soundZ = new Howl({
            src: ['./Sounds/Sound-Effects/shortSounds/ArrowImpactHuman_S08WA.4.4.wav']
        });
        var idZ = soundZ.play();

    }


}

// function play2(){
//     var sound2 = new Howl({
//         src:  ['./Sounds/Sound-Effects/AirGunDrill_S08IN.25.wav']
//     });

//     sound2.play();
// }


//=====================================================
function wait(timout){
    return new Promise(resolve=>setTimeout(resolve, timout));
}
