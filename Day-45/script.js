var btn = document.querySelector('button');
var per = document.querySelector('.percent');
var inner = document.querySelector('.inner');
var num = 0;
var ran =  Math.floor(Math.random()*100);
btn.addEventListener("click",function(){
     var count = setInterval(() => {
        num++;
        btn.innerHTML = "Downloading..."
        btn.style.pointerEvents="none";
        inner.style.width = num+"%";
          btn.style.opacity = 0.5;
          per.innerHTML = num+"%";
    }, ran);
    setTimeout(function(){
          clearInterval(count);
          btn.innerHTML= "Downloaded";
          btn.style.opacity = 0.5;
          console.log("time taken to download",num/10 ,"seconds");
          
    },ran*100);
})