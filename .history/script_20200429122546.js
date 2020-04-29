window.onload = ()=>{
  var alphabet =   ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//   var soundPath = './Sounds/Sound-Effects/shortSounds/';
//   var arrayOfSounds = ["AirGunDrill_S08IN.25.wav", "ArrowImpactHuman_S08WA.4.4", "BloodGutsSpill_S08HO.3", "BulletFlyBy_S08WA.18.wav", "BulletFlyBy_S08WA.22.wav", "CatMeow_S08AN.44.wav", "DropSingleDrip_S08WR.47.wav", "DropSingleDrip_S08WR.49.wav", "FireballBurst_S08FI.28.wav", "FleshStab_S08HO.100.wav", "GolfClubSwing_S08SP.410.wav", "HumanGrunt_S08HU.271.wav", "HumanGrunt_S08HU.286.wav", "HumanKiss_S08HU.312.wav", "HumanSigh_S08HU.455.wav", "HumanSlurp_S08HU.465.wav", "ImpactGlass_S08IM.303.wav", "ImpactHumanBody_S08IM.327.wav", "ImpactHumanHit_S08IM.330.wav", "ImpactHumanSmack_S08IM.336.wav", "PinballBumper_S08SP.564.wav", "PinballBumper_S08SP.566.wav", "PREL_HIT WARBLE_PO01.238.wav", "SciFiLaser_S08SF.357.wav", "SciFiWhoosh_S08SF.1684.wav", "SemiTruckHorn_S08IN.866.wav"];


}

autoUnlock = true;


function playMeNow(letter){
    var arrayOfSounds = ["AirGunDrill_S08IN.25.wav", "ArrowImpactHuman_S08WA.4.4", "BloodGutsSpill_S08HO.3", "BulletFlyBy_S08WA.18.wav", "BulletFlyBy_S08WA.22.wav", "CatMeow_S08AN.44.wav", "DropSingleDrip_S08WR.47.wav", "DropSingleDrip_S08WR.49.wav", "FireballBurst_S08FI.28.wav", "FleshStab_S08HO.100.wav", "GolfClubSwing_S08SP.410.wav", "HumanGrunt_S08HU.271.wav", "HumanGrunt_S08HU.286.wav", "HumanKiss_S08HU.312.wav", "HumanSigh_S08HU.455.wav", "HumanSlurp_S08HU.465.wav", "ImpactGlass_S08IM.303.wav", "ImpactHumanBody_S08IM.327.wav", "ImpactHumanHit_S08IM.330.wav", "ImpactHumanSmack_S08IM.336.wav", "PinballBumper_S08SP.564.wav", "PinballBumper_S08SP.566.wav", "PREL_HIT WARBLE_PO01.238.wav", "SciFiLaser_S08SF.357.wav", "SciFiWhoosh_S08SF.1684.wav", "SemiTruckHorn_S08IN.866.wav"];
    var soundPath = './Sounds/Sound-Effects/shortSounds/';

    if(letter=='a'){
        var soundA = new Howl({
            src: [soundPath + arrayOfSounds[0]]
        });
    
        var idA = soundA.play();
    }

    if(letter=='b'){
        var soundB = new Howl({
            src: [soundPath + arrayOfSounds[1]]
        });
        var idB = soundB.play();

    }

    if(letter=='c'){
        var soundC = new Howl({
            src: [soundPath + arrayOfSounds[2]]
        });
        var idC = soundC.play();

    }
    if(letter=='d'){
        var soundD = new Howl({
            src: [soundPath + arrayOfSounds[3]]
        });
        var idD = soundD.play();

    }
    if(letter=='e'){
        var soundE = new Howl({
            src: [soundPath + arrayOfSounds[4]]
        });
        var idE = soundE.play();

    }
    if(letter=='f'){
        var soundF = new Howl({
            src: [soundPath + arrayOfSounds[5]]
        });
        var idF = soundF.play();

    }
    if(letter=='g'){
        var soundG = new Howl({
            src: [soundPath + arrayOfSounds[6]]
        });
        var idG = soundG.play();

    }
    if(letter=='h'){
        var soundH = new Howl({
            src: [soundPath + arrayOfSounds[7]]
        });
        var idH = soundH.play();

    }
    if(letter=='i'){
        var soundI = new Howl({
            src: [soundPath + arrayOfSounds[8]]
        });
        var idI = soundI.play();

    }
    if(letter=='j'){
        var soundJ = new Howl({
            src: [soundPath + arrayOfSounds[9]]
        });
        var idJ = soundJ.play();

    }
    if(letter=='k'){
        var soundK = new Howl({
            src: [soundPath + arrayOfSounds[10]]
        });
        var idK = soundK.play();

    }
    if(letter=='l'){
        var soundL = new Howl({
            src: [soundPath + arrayOfSounds[11]]
        });
        var idL = soundL.play();

    }
    if(letter=='m'){
        var soundM = new Howl({
            src: [soundPath + arrayOfSounds[12]]
        });
        var idM = soundM.play();

    }
    if(letter=='n'){
        var soundN = new Howl({
            src: [soundPath + arrayOfSounds[13]]
        });
        var idN = soundN.play();

    }
    if(letter=='o'){
        var soundO = new Howl({
            src: [soundPath + arrayOfSounds[14]]
        });
        var idO = soundO.play();

    }
    if(letter=='p'){
        var soundP = new Howl({
            src: [soundPath + arrayOfSounds[15]]
        });
        var idP = soundP.play();

    }
    if(letter=='q'){
        var soundQ = new Howl({
            src: [soundPath + arrayOfSounds[16]]
        });
        var idQ = soundQ.play();

    }
    if(letter=='r'){
        var soundR = new Howl({
            src: [soundPath + arrayOfSounds[17]]
        });
        var idR = soundR.play();

    }
    if(letter=='s'){
        var soundS = new Howl({
            src: [soundPath + arrayOfSounds[18]]
        });
        var idS = soundS.play();

    }
    if(letter=='t'){
        var soundT = new Howl({
            src: [soundPath + arrayOfSounds[19]]
        });
        var idT = soundT.play();

    }
    if(letter=='u'){
        var soundU = new Howl({
            src: [soundPath + arrayOfSounds[20]]
        });
        var idU = soundU.play();

    }
    if(letter=='v'){
        var soundV = new Howl({
            src: [soundPath + arrayOfSounds[21]]
        });
        var idV = soundV.play();

    }
    if(letter=='w'){
        var soundW = new Howl({
            src: [soundPath + arrayOfSounds[22]]
        });
        var idW = soundW.play();

    }
    if(letter=='x'){
        var soundX = new Howl({
            src: [soundPath + arrayOfSounds[23]]
        });
        var idX = soundX.play();

    }
    if(letter=='y'){
        var soundY = new Howl({
            src: [soundPath + arrayOfSounds[24]]
        });
        var idY = soundY.play();

    }
    if(letter=='z'){
        var soundZ = new Howl({
            src: [soundPath + arrayOfSounds[25]]
        });
        var idZ = soundZ.play();

    }


}

//========================================
var splitStr=[];
function  splitMe(stringMe) {
    splitStr = stringMe.split("");

    console.log('splitStr', splitStr);
    
}

s


//=====================================================
function wait(timout){
    return new Promise(resolve=>setTimeout(resolve, timout));
}
