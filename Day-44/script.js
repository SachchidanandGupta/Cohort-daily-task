var btn = document.querySelector('button');
var main = document.querySelector("main");
btn.addEventListener("click", function(){
    var div = document.createElement('div');
     var c1 = Math.floor(Math.random()*256);
     var c2 = Math.floor(Math.random()*256);
     var c3 = Math.floor(Math.random()*256);
     var l = Math.random()*100;
     var t = Math.random()*100;
     var r = Math.random()*360;
    div.style.height = '100px';
    div.style.width = '100px';
    div.style.position = 'absolute';
    div.style.left = l+"%";
    div.style.top = t+"%";
    div.style.rotate = r+"deg";
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
    main.appendChild(div);
})