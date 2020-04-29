window.onload = ()=>{
  var alphabet =   ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var soundPath = './Sounds/Sound-Effects/shortSounds/';
  var arrayOfSouns = ["AirGunDrill_S08IN.25.wav", "", ""
    ]


}

autoUnlock = true;


function playMeNow(letter){
    if(letter=='a'){
        var soundA = new Howl({
            src: []
        });
    
        var idA = soundA.play();
    }

    if(letter=='b'){
        var soundB = new Howl({
            src: []
        });
        var idB = soundB.play();

    }

    if(letter=='c'){
        var soundC = new Howl({
            src: []
        });
        var idC = soundC.play();

    }
    if(letter=='d'){
        var soundD = new Howl({
            src: []
        });
        var idD = soundD.play();

    }
    if(letter=='e'){
        var soundE = new Howl({
            src: []
        });
        var idE = soundE.play();

    }
    if(letter=='f'){
        var soundF = new Howl({
            src: []
        });
        var idF = soundF.play();

    }
    if(letter=='g'){
        var soundG = new Howl({
            src: []
        });
        var idG = soundG.play();

    }
    if(letter=='h'){
        var soundH = new Howl({
            src: []
        });
        var idH = soundH.play();

    }
    if(letter=='i'){
        var soundI = new Howl({
            src: []
        });
        var idI = soundI.play();

    }
    if(letter=='j'){
        var soundJ = new Howl({
            src: []
        });
        var idJ = soundJ.play();

    }
    if(letter=='k'){
        var soundK = new Howl({
            src: []
        });
        var idK = soundK.play();

    }
    if(letter=='l'){
        var soundL = new Howl({
            src: []
        });
        var idL = soundL.play();

    }
    if(letter=='m'){
        var soundM = new Howl({
            src: []
        });
        var idM = soundM.play();

    }
    if(letter=='n'){
        var soundN = new Howl({
            src: []
        });
        var idN = soundN.play();

    }
    if(letter=='o'){
        var soundO = new Howl({
            src: []
        });
        var idO = soundO.play();

    }
    if(letter=='p'){
        var soundP = new Howl({
            src: []
        });
        var idP = soundP.play();

    }
    if(letter=='q'){
        var soundQ = new Howl({
            src: []
        });
        var idQ = soundQ.play();

    }
    if(letter=='r'){
        var soundR = new Howl({
            src: []
        });
        var idR = soundR.play();

    }
    if(letter=='s'){
        var soundS = new Howl({
            src: []
        });
        var idS = soundS.play();

    }
    if(letter=='t'){
        var soundT = new Howl({
            src: []
        });
        var idT = soundT.play();

    }
    if(letter=='u'){
        var soundU = new Howl({
            src: []
        });
        var idU = soundU.play();

    }
    if(letter=='v'){
        var soundV = new Howl({
            src: []
        });
        var idV = soundV.play();

    }
    if(letter=='w'){
        var soundW = new Howl({
            src: []
        });
        var idW = soundW.play();

    }
    if(letter=='x'){
        var soundX = new Howl({
            src: []
        });
        var idX = soundX.play();

    }
    if(letter=='y'){
        var soundY = new Howl({
            src: []
        });
        var idY = soundY.play();

    }
    if(letter=='z'){
        var soundZ = new Howl({
            src: []
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
