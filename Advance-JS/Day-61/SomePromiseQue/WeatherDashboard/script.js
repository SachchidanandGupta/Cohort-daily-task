// let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
 async function getWeather(city){
    let apiKey = "6b872af840ebb6f6d866d9";
    let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    try{
        if(!raw.ok){
            throw new Error("City not found , try somewhere else");
        }
        else{
            let data = await raw.json();
            if(data.main.temp <0 ){
                console.warn(`it's too cold outsid.... ${data.main.temp}°C`);
            }
            else if(data.main.temp > 32){
                 console.warn(`it's too cold outsid.... ${data.main.temp}°C`);

            }else{
                console.log(data.main.temp+'°C');
                
            }
            
        }
    }
     catch(err){
      console.log(err.message)
     }
    
};
getWeather("Delhi");