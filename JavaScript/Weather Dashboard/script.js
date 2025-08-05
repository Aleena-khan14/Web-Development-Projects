const inputField=document.getElementById("city-input")
const suggestion=document.getElementById("suggestions")
const weatherInfo=document.getElementById("weather-container")
const weatherCards=document.getElementById("weather-cards")
const searchBtn=document.getElementById("search-btn")
const clearBtn=document.getElementById("clear-btn")
const APIkey= `1aa6f1efe74210d5f0a56930b22cfe8f`

    const Url = `https://api.openweathermap.org/data/2.5`
const iconUrl = `https://openweathermap.org/img/wn`



function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}






// using input Event to check any input in the input field
inputField.addEventListener("input",debounce((e)=> {
    const typedValue=e.target.value.trim()
    fetchCities(typedValue);
},500))

async function fetchCities(typedValue)
{
    if (typedValue.length>3)
    {   
        console.log("Hi")
        try{
        const apiUrl=`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${encodeURIComponent(typedValue)}&limit=10`
        const response= await fetch(apiUrl,{
            method:"GET",
            headers:{
                "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
                "x-rapidapi-key": "0a4623ef55mshcb7fc039ace9dfbp16d470jsn05265ed2952e"
            }
        })

       if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
        
        const data=await response.json()
        
       console.log("City object:", data);
         suggestion.innerHTML = "";
       const popularCities = data.data
                // .filter(city => city.population > 100000) // You can adjust the threshold
                .sort((a, b) => b.population - a.population);
        popularCities.forEach((city)=>{
            
            const item=document.createElement("div")
            item.classList.add("list-group-item", "list-group-item-action")
            // item.textContent = `${city.name}, ${city.region}, ${city.country}`
             item.textContent = `${city.name}, ${city.region || ''}, ${city.country},`
            item.addEventListener("click",()=>
            {

            //    inputField.value = `${city.name}, ${city.region}, ${city.country}`
              item.textContent = `${city.name}, ${city.region || ''}, ${city.country}`    
            suggestion.innerHTML=""
                
                // const latitude=city.latitude
                // const longitude=city.longitude
                //  console.log(latitude,longitude)
                  
                if (city.latitude && city.longitude) {
                        getWeather(city.latitude, city.longitude, city.name, city.country);
                    } else {
                        alert("Location does not have valid coordinates.");
                    }
            })
            suggestion.appendChild(item)
        })
       
        } catch(err){
            console.log(err)
        }
    }
    
     else
     {
         console.log("length is less than 2")
         suggestion.innerHTML=""
         return
     }
}



    
async function getWeather(lat,lon,cityName, country)
{
    
    try{
    
    const weatherUrl = `${Url}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIkey}`
    const response= await fetch(weatherUrl)
    
    if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        
        // const data=await response.json()
        const weatherData = await response.json();
        console.log("Weather data:", weatherData);
        displayWeather(weatherData,cityName,country);
         weatherCards.innerHTML=""
        getWeatherForecast(lat,lon)
        
        
       
        // displayFiveDaysForcast(lat,lon,cityName, country)
       
        

    } catch(err)
    {
        console.log(err)
    }
}

function displayWeather(data,cityName,country) {
    const iconCode=data.weather[0].icon
    const icon_url=`${iconUrl}/${iconCode}@2x.png`
    // const img=document.createElement("img")
    // img.src=icon_url
    
    weatherInfo.innerHTML = `
        <h2>Weather in ${cityName}, ${country}</h2>
        <img src="${icon_url}" alt="Icon" style="width: 150px; margin-bottom: 0.5rem;">
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        <h1 style="margin: 30px 0px 30px 0px;">5-day Weather Forecast</h1>

`
    
}

async function getWeatherForecast(lat,lon){

      try{
            const fiveDays_URL = `${Url}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${APIkey}`
            const response= await fetch(fiveDays_URL)
    
            if (!response.ok) {
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }
        
        // const data=await response.json()
        const weatherForecast = await response.json()
        console.log("Weather Foracst fot five days:", weatherForecast)

        
          const array=weatherForecast.list.filter((data)=>{
                    return data.dt_txt.includes("12:00:00")
          })

          array.forEach((entry)=>
        {
            const date = entry.dt_txt.split(" ")[0]
            const temp=entry.main.temp
            const weatherDescription=entry.weather[0].description
            const humidity=entry.main.humidity
            
             const iconCode=entry.weather[0].icon
            const icon_url=`${iconUrl}/${iconCode}@2x.png`
            
            //convert date into day, weekday etc
            const dateObject = new Date(date)
            const weekDay=dateObject.toLocaleDateString('ens',{weekday:"short"})
            const monthDay=dateObject.toLocaleDateString('ens',{month:"long",day:"2-digit"} ) 
            
            const cardHTML = `
                
                <div class="forecast-card p-2" style="flex: 1 1 calc(20% - 20px); max-width: calc(20% - 20px); min-width: 180px;">
                    <div class="card shadow-sm text-white text-center" style="background: linear-gradient(to top, #00c6ff, #0072ff); border-radius: 16px;">
                    <div class="card-body p-3">
                        <h5 class="card-title fw-bold text-uppercase">${weekDay}</h5>
                        <p class="card-subtitle mb-2">${monthDay}</p>
                        <img src="${icon_url}" alt="Icon" style="width: 150px; margin-bottom: 0.5rem;">
                        <p class="mb-1">${weatherDescription}</p>
                        <p class="mb-1">Temp: ${temp}°C</p>
                        <p class="mb-0">Humidity: ${humidity}%</p>
                    </div>
                    </div>
                </div>`
                weatherCards.innerHTML += cardHTML 

        })
          
       


        }catch(err)
            {
                console.log(err)
            }
}

clearBtn.addEventListener('click',()=>{
    inputField.innerHTML=""
    weatherCards.innerHTML=""
    weatherInfo.innerHTML=""
})
