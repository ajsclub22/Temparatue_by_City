 //api key 
 const apikey="532b495f7851a9c21bddc0d5d3344eff";
 //api Url
 const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
 //to fetch input from the search bar..
 const searchBox=document.querySelector(".search input");
 //to take action when the user click on button 
 const searchBtn=document.querySelector(".search button");
 //for speific weather icon 
 const weatherIcon=document.querySelector(".weather-icon");

 async function checkWeather(city){
     /*function that take input as city name 
       generate a json file has information about weather 
       and select html elements to manipulate data according 
       to the json file.*/ 
        let tm=0;
        const response= await fetch(apiUrl+city+`&appid=${apikey}`);
        if(response.status==404){
            document.querySelector(".error").style.display="block";
            document.querySelector(".weather").style.display="none";
            tm=4000;
        }
        else{
            var data=await response.json();
            console.log(data);
            document.querySelector(".wind").innerHTML=data.wind.speed+" Km/h";
            document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
            document.querySelector(".city").innerHTML=data.name;
            
            //Upadte the Weather image icon...
            if(data.weather[0].main=="Clouds"){
                weatherIcon.src="clouds.png";
            }
            else if(data.weather[0].main=="Clear"){
                weatherIcon.src="clear.png";
            }
            else if(data.weather[0].main=="Mist"){
                weatherIcon.src="mist.png";
            }
            else if(data.weather[0].main=="Rain"){
                weatherIcon.src="rain.png";
            }
            else if(data.weather[0].main=="Drizzle"){
                weatherIcon.src="drizzle.png";
            }
            //display Weather information when the user enter city name & click the button
            document.querySelector(".weather").style.display="block";

            tm=10000;

        }
        setTimeout(function(){
            location.reload();
          },tm);
    }
 // call the Weather Function when the button is clicked...
 
 searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);


 })
