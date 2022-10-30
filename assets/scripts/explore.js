// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const playButton = document.querySelector('button');
  const textInput = document.getElementById('text-to-speak');
  
  //const voices = speechSynthesis.getVoices();
  
  

  function populateVoiceList() {
    
  
    const voices = speechSynthesis.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
  
      option.setAttribute('lang', voices[i].lang);
      option.setAttribute('name', voices[i].name);
      option.value = i;
      document.getElementById("voice-select").appendChild(option);
    }
  }
  
  populateVoiceList();
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }


  
  

  playButton.addEventListener('click', () => {
    playText(textInput.value);
    
  })

  var smile = document.querySelector('img');
  //smile.src = "assets/images/smiling.png";


  function playText(text){

    const voices = speechSynthesis.getVoices();

    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 1;

    var voiceSelect = document.getElementById('voice-select');
    //console.log(voiceSelect.value);
    //console.log(voiceSelect.name);

    utter.voice = voices[voiceSelect.value];
    
    

    //var smile = document.querySelector('img');
    

    speechSynthesis.speak(utter);

    if (speechSynthesis.speaking){
      //console.log(speechSynthesis.speaking);
      smile.src = "assets/images/smiling-open.png";
    }
    
    utter.addEventListener('end', e =>{
      //console.log("end");
      smile.src = "assets/images/smiling.png";
    })
    
    
  }

}