const sound = [
  { key: "Q", src: "Audio/28.mp3" },
  { key: "W", src: "Audio/29.mp3" },
  { key: "E", src: "Audio/30.mp3" },
  { key: "R", src: "Audio/31.mp3" },
  { key: "T", src: "Audio/32.mp3" },
  { key: "Y", src: "Audio/33.mp3" },
  { key: "U", src: "Audio/34.mp3" },
  { key: "I", src: "Audio/35.mp3" },
  { key: "O", src: "Audio/36.mp3" },
  { key: "P", src: "Audio/37.mp3" },
  { key: "A", src: "Audio/38.mp3" },
  { key: "S", src: "Audio/39.mp3" },
  { key: "D", src: "Audio/40.mp3" },
  { key: "F", src: "Audio/46.mp3" },
  { key: "G", src: "Audio/47.mp3" },
  { key: "H", src: "Audio/49.mp3" },
  { key: "1", src: "Audio/56.mp3" },
  { key: "2", src: "Audio/57.mp3" },
  { key: "3", src: "Audio/58.mp3" },
  { key: "4", src: "Audio/49.mp3" },
  { key: "5", src: "Audio/59.mp3" },
  { key: "6", src: "Audio/60.mp3" },
  { key: "7", src: "Audio/61.mp3" },
  { key: "8", src: "Audio/62.mp3" },
  { key: "9", src: "Audio/63.mp3" },
  { key: "!", src: "Audio/28.mp3" },
  { key: "@", src: "Audio/29.mp3" },
  { key: "#", src: "Audio/30.mp3" },
  { key: "$", src: "Audio/31.mp3" },
  { key: "%", src: "Audio/32.mp3" },
  { key: "^", src: "Audio/33.mp3" },
];
var music = new Audio('Audio/28.mp3');
var Key = document.querySelector('body');
Key.addEventListener('keydown',function(elem){
    var pressedKey = elem.key.toUpperCase();
    sound.forEach(function(elem){
   if(elem.key === pressedKey){
     music.src = elem.src;
     music.play();
   }
})
})


