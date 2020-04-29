window.onload = ()=>{
  var alphabet =   ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var soundPath = './Sounds/Sound-Effects/shortSounds/';
  var arrayOfSounds = ["AirGunDrill_S08IN.25.wav", "ArrowImpactHuman_S08WA.4.4", "BloodGutsSpill_S08HO.3", "BulletFlyBy_S08WA.18.wav", "BulletFlyBy_S08WA.22.wav", "CatMeow_S08AN.44.wav", "DropSingleDrip_S08WR.47.wav", "DropSingleDrip_S08WR.49.wav", "FireballBurst_S08FI.28.wav", "FleshStab_S08HO.100.wav", "GolfClubSwing_S08SP.410.wav", "", "", "", "", "", "", ""
    ];


}

autoUnlock = true;


function playMeNow(letter){
    if(letter=='a'){
        var soundA = new Howl({
            src: [soundPath + arrayOfSounds[]]
        });
    
        var idA = soundA.play();
    }

    if(letter=='b'){
        var soundB = new Howl({
            src: [soundPath + arrayOfSounds[]]
        });
        var idB = soundB.play();

    }

    if(letter=='c'){
        var soundC = new Howl({
            src: [soundPath + arrayOfSounds[]]
        });
        var idC = soundC.play();

    }
    if(letter=='d'){
        var soundD = new Howl({
            src: [soundPath + arrayOfSounds[]]
        });
        var idD = soundD.play();

    }
    if(letter=='e'){
        var soundE = new Howl({
            src: [soundPath + arrayOfSounds[]]
        });
        var idE = soundE.play();

    }
    if(letter=='f'){
        var soundF = new Howl({
            src: [soundPath + arrayOfSounds[]]
        });
        var idF = soundF.play();

    }
    if(letter=='g'){
        var soundG = new Howl({
            src: [soundPath + arrayOfSounds[]]
        });
        var idG = soundG.play();

    }
    if(letter=='h'){
        var soundH = new Howl({
            src: [soundPath + arrayOfSounds[]]
        });
        var idH = soundH.play();

    }
    if(letter=='i'){
        var soundI = new Howl({
            src: [soundPath + arrayOfSounds[]]
        });
        var idI = soundI.play();

    }
    if(letter=='j'){
        var soundJ = new Howl({
            src: [soundPath + arrayOfSounds[]]
        });
        var idJ = soundJ.play();

    }
    if(letter=='k'){
        var soundK = new Howl({
            src: [soundPath + arrayOfSounds[]]
        });
        var idK = soundK.play();

    }
    if(letter=='l'){
        var soundL = new Howl({
            src: [soundPath + arrayOfSounds[]]
        });
        var idL = soundL.play();

    }
    if(letter=='m'){
        var soundM = new Howl({
            src: [soundPath + arrayOfSounds[]]
        });
        var idM = soundM.play();

    }
    if(letter=='n'){
        var soundN = new Howl({
            src: [soundPath + arrayOfSounds[]]
        });
        var idN = soundN.play();

    }
    if(letter=='o'){
        var soundO = new Howl({
            src: [soundPath + arrayOfSounds[]]
        });
        var idO = soundO.play();

    }
    if(letter=='p'){
        var soundP = new Howl({
            src: [soundPath + arrayOfSounds[]]
        });
        var idP = soundP.play();

    }
    if(letter=='q'){
        var soundQ = new Howl({
            src: [soundPath + arrayOfSounds[]]
        });
        var idQ = soundQ.play();

    }
    if(letter=='r'){
        var soundR = new Howl({
            src: [soundPath + arrayOfSounds[]]
        });
        var idR = soundR.play();

    }
    if(letter=='s'){
        var soundS = new Howl({
            src: [soundPath + arrayOfSounds[]]
        });
        var idS = soundS.play();

    }
    if(letter=='t'){
        var soundT = new Howl({
            src: [soundPath + arrayOfSounds[]]
        });
        var idT = soundT.play();

    }
    if(letter=='u'){
        var soundU = new Howl({
            src: [soundPath + arrayOfSounds[]]
        });
        var idU = soundU.play();

    }
    if(letter=='v'){
        var soundV = new Howl({
            src: [soundPath + arrayOfSounds[]]
        });
        var idV = soundV.play();

    }
    if(letter=='w'){
        var soundW = new Howl({
            src: [soundPath + arrayOfSounds[]]
        });
        var idW = soundW.play();

    }
    if(letter=='x'){
        var soundX = new Howl({
            src: [soundPath + arrayOfSounds[]]
        });
        var idX = soundX.play();

    }
    if(letter=='y'){
        var soundY = new Howl({
            src: [soundPath + arrayOfSounds[]]
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
