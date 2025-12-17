var cursor = document.querySelector('#cursor');
var body = document.querySelector('main');
body.addEventListener("mousemove",function(elem){
             cursor.style.left = elem.x + 'px';
             cursor.style.top = elem.y + 'px';
             console.log(elem);
});
