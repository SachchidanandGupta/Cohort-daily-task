var para = document.querySelector('p');
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var text = para.innerText;
para.addEventListener("mouseenter",()=>{
  var set =  setInterval(()=>{
 var str = text.split('').map((char,idx)=>{
           return characters.split('')[Math.floor(Math.random()*53)]
    }).join('');
       para.innerHTML = str;
    },10)
    setTimeout(()=>{
        clearInterval(set);
        para.innerHTML = text
    },200)
   
    
})
