// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  var hornSelect = document.getElementById("horn-select");
  hornSelect.addEventListener('click', e => {
    
    if (hornSelect.value == 'air-horn'){
      
      var header = document.querySelector('h2');
      var img = document.querySelector('img');
      var aud = document.querySelector('audio');
      
      //console.log(aud);
  
      header.innerText = 'Expose - Air Horn';
      img.src = "assets/images/air-horn.svg";
      aud.src = "assets/audio/air-horn.mp3";

      var soundButton = document.querySelector('button');
      soundButton.addEventListener('click', e=> {
        aud.play();
        //console.log(volAmnt.value);
        aud.volume = volAmnt.value / 100;
      })
  
      //console.log(aud);
    }
    else if (hornSelect.value == 'car-horn'){
      
      var header = document.querySelector('h2');
      var img = document.querySelector('img');
      var aud = document.querySelector('audio');
  
      header.innerText = 'Expose - Car Horn';
      img.src = "assets/images/car-horn.svg";
      aud.src = "assets/audio/car-horn.mp3";

      var soundButton = document.querySelector('button');
      soundButton.addEventListener('click', e=> {
        aud.play();
        //console.log(volAmnt.value);
        aud.volume = volAmnt.value / 100;
      })
    }
  
    else if (hornSelect.value == 'party-horn'){
      
      var header = document.querySelector('h2');
      var img = document.querySelector('img');
      var aud = document.querySelector('audio');
  
      const jsConfetti = new JSConfetti();
  
      jsConfetti.addConfetti({
        confettiColors: [
      '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
        ],
      })
      
      header.innerText = 'Expose - Party Horn';
      img.src = "assets/images/party-horn.svg";
      aud.src = "assets/audio/party-horn.mp3";

      var soundButton = document.querySelector('button');
      soundButton.addEventListener('click', e=> {
        aud.play();
        //console.log(volAmnt.value);
        aud.volume = volAmnt.value / 100;
      })
  
    }
  
  
  })
  
  var volume = document.getElementById("volume-controls");
  var volAmnt = document.getElementById("volume");
  volume.addEventListener('click', e => {
  
    
    var imgVol = document.getElementById("volume-controls").querySelector('img');
    
    //console.log(volAmnt);
    //console.log(volAmnt.value);
  
    if (volAmnt.value == 0){
      //console.log("0");
      imgVol.src = "assets/icons/volume-level-0.svg";
    }
    else if (volAmnt.value < 33){
      //console.log("1");
      imgVol.src = "assets/icons/volume-level-1.svg";
    }
    else if (volAmnt.value < 67){
      //console.log("2");
      imgVol.src = "assets/icons/volume-level-2.svg";
    }
    else if (volAmnt.value <= 100){
      //console.log("3");
      imgVol.src = "assets/icons/volume-level-3.svg";
    }
  
    
  })

  
  
}
