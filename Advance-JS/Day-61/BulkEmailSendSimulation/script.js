const emails =[
    "Stark@gmail.com","Bahibali@gmail.com","LuffyBahi@gmail.com"
];

function sendEmail(email){
    return new Promise((reslove,reject)=>{
        let random = Math.floor(Math.random()*5);
        setTimeout(() => {
             let probability = Math.floor(Math.random()*10);
             if(probability <= 5 ) reslove("Email seny successfully....");
             else reject("Mail not sent...") 
        }, random*1000);
    })
};
async function sendEmails(userList){
    let allResponse = userList.map(function(email){
         return sendEmail(email).then(function(data){
                 return data;
         }).catch(function(err){
            return err;
         });
    });
   let ans = await Promise.all(allResponse);
ans.forEach(element => {
      console.log(element);
      
});
 }
        

sendEmails(emails);