let iplTeams = [
 {
    shortName: "CSK",
    fullName: "Chennai Super Kings",
    captain: "Ruturaj Gaikwad",
      primary: "Yellow",
      secondary: "Blue",
    trophies: 5
  },

 {
    shortName: "MI",
    fullName: "Mumbai Indians",
    captain: "Hardik Pandya",
   
      primary: "Blue",
      secondary: "Gold",
  
    trophies: 5
  },

 {
    shortName: "KKR",
    fullName: "Kolkata Knight Riders",
    captain: "Ajinkya Rahane",
    
      primary: "Purple",
      secondary: "Gold",
    trophies: 3
 },

 {
    shortName: "RCB",
    fullName: "Royal Challengers Bengaluru",
    captain: "Rajat Patidar",
    
      primary: "Red",
      secondary: "Black",
    trophies: 1
  },

   {
    shortName: "RR",
    fullName: "Rajasthan Royals",
    captain: "Sanju Samson",
    
      primary: "Pink",
      secondary: "Blue" ,
    trophies: 1
  },

   {
    shortName: "SRH",
    fullName: "Sunrisers Hyderabad",
    captain: "Pat Cummins",
   
      primary: "Orange",
      secondary: "Black",
    trophies: 1
  },

 {
    shortName: "DC",
    fullName: "Delhi Capitals",
    captain: "Axar Patel",
    
      primary: "Blue",
      secondary: "Red",
    trophies: 0
  },
 {
    shortName: "PBKS",
    fullName: "Punjab Kings",
    captain: "Shikhar Dhawan",
   
      primary: "Red",
      secondary: "Gold",
    trophies: 0
  },

 {
    shortName: "GT",
    fullName: "Gujarat Titans",
    captain: "Shubman Gill",
   
      primary: "Dark Blue",
      secondary: "Gold",
    trophies: 1
  },

 {
    shortName: "LSG",
    fullName: "Lucknow Super Giants",
    captain: "KL Rahul",
      primary: "Light Blue",
      secondary: "Orange",
    trophies: 0
  }
];
 var btn = document.querySelector('button');
 var h1 = document.querySelector("h1");
 var h2 = document.querySelector("h2");
 var p = document.querySelector("p");
 var cap = document.querySelector("#captain");
var box  = document.querySelector("#box")
var main = document.querySelector("main")
 btn.addEventListener("click", function(){
    var num = iplTeams[Math.floor( Math.random()*iplTeams.length)];
    h1.innerHTML = num.shortName;
    h2.innerHTML = num.fullName;
    cap.innerHTML = num.captain;
    p.innerHTML = `Number of trophies : ${num.trophies}`;
    box.style.backgroundColor = num.primary;
  main.style.backgroundColor = num.secondary;
 })

