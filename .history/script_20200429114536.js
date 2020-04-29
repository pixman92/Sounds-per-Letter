window.onload = ()=>{
  var alphabet =   ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


}
autoUnlock = true;


function playMeNow(){
    soundB = new Howl({
        src: ['./Sounds\Sound-Effects\shortSounds\ArrowImpactHuman_S08WA.4.4.wav']
    });

    var idB = soundB.play();
    soundB.once('load', async ()=>{
        await wait(100).then(()=>{
            soundB.stop(idB);
            soundB.off();
        });
    });
    // sound.play();
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
