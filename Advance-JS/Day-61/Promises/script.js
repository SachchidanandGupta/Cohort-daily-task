 let prm = new Promise((resolve,reject)=>{
     setTimeout(() => {
         resolve();
     }, 1000);
});

prm.then(function(){
    console.log("Resolved");
}).catch(function(){
    console.log("Rejecetd");
})
//  with fetch we can get any data from an url and get data which is in not readable format and wehave to use return userData.json() then we can actually work on the data 
fetch(`https://randomuser.me/api/`).then(function(userData){
      return userData.json();
}).then(function(realUserData){
    console.log(realUserData.results[0].name.first);
    
})