 function debunce(fn,delay){
    let timer;
    return function(){
        clearTimeout(timer);
         timer = setTimeout(fn,delay)
    };
 }
 document.querySelector("#search").addEventListener("input",debunce(function(){
    console.log("chala");
    
 },400)
);