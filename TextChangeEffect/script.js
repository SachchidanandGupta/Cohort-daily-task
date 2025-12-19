var para = document.querySelector("p");
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var text = para.innerText;

// function randomText() {
//   const str = text.split("").map((char, idx) => {
//     if(iteration > idx){
//         return char;
//     }
//     return characters.split('')[Math.floor(Math.random()*52)];
//   }).join('');
//   para.innerText = str;
//   iteration += 0.2;
// }
// setInterval(randomText,30);

var iteration = 0;
para.addEventListener("mouseenter",function randomText(){
  var str =  text.split('').map((char,idx)=>{
    if(idx < iteration){
        return char;
    }
       return characters.split('')[Math.floor(Math.random() * characters.length)];
    }).join('');
    para.innerText = str;
     iteration += 0.25;
     setInterval(randomText,50)
    
});

 