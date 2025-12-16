var img = document.querySelector('img');
var love = document.querySelector('#love');
img.addEventListener('dblclick',function(){
     love.style.opacity = "1";
    love.style.transform = 'translate(-50%,-50%) scale(1) rotate(0deg)';
    console.log("clicked");
    setTimeout(function(){
        console.log("timeout chl gaya");
        love.style.transform = 'translate(-50%,-360%) scale(1) rotate(60deg)';
        love.style.opacity = '0';
    },800);
    setTimeout(function(){
        love.style.transform = 'translate(-50%,-50%) scale(0) rotate(-60deg)';
    },1000)
   
    
})