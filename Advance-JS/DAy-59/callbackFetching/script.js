// Question -2
// function getUsers(userName,cb){
//     console.log("fetching...");
    
//     setTimeout(() => {
//         cb({id:1,userName : "stark"})
//     }, 1000);
// }
// function getUserPost(id,cb){
//     setTimeout(() => {
//         cb(["hello","good Day","Morning"])
//     }, 2000);
// }
// getUsers("Stark",function(data){
//     getUserPost(data.id,function(allPosts){
//         console.log(data.userName);
//         console.log(allPosts);
//     })
// })
// Question -3

function loginUser(userName , cb ){
    console.log("Fetching user data.....");
    
    setTimeout(() => {
         cb({userId:1,userName:"Stark"})
    }, 1000);
};
function fetchPermissions(id,cb){
     console.log("Getting fetching Permissions...");
     setTimeout(() => {
         cb([{permission : "granted"}])
     }, 1000);
}
function loadDashboard(permission,cb){
          console.log("Loading Dashboard....");
          setTimeout(() => {
             cb({work:"Dashboard Loaded"})
          }, 1000);
          
}
loginUser("Stark",function(details){
     fetchPermissions(details.userId,function(act){
        loadDashboard(act.permission,function(val){
                console.log(val.work); 
        })
     })
})