import React, {useState} from "react";
import axios from "axios";
import "./weather.css";

export default function weather(props){
    const [weatherData, setweatherData] = useState({ready : false});
function handleResponse(response){
    setweatherData({
        ready:true,
        temperature : response.data.main.temp,
        humidity : response.data.main.humidity,
        date : "wednesday 07:00",
        description : response.data.weather[0].description,
        iconUrl : "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy_png",
        wind : response.data.wind.speed,
        city: response.data.name,}
    )
    ;
}

if (weatherData.ready){
    return(
    <div className="weather">
    <form>
        <div className="row">
            <div className="col- 9">
        <input type="search" placeholder="enter a city" className="form-control" autoFocus="on"  />
        </div>
        <div className="col- 3">
        <input type="submit" value="search" className="btn btn-primary w-100"/>
        </div>
        </div>
    </form>
  <h1>{weatherData.city}</h1>  
  <ul>
    <li>{weatherData.date}</li>
    <li className="text-capitalize">{weatherData.description}</li>
  </ul>

    <div className="row mt-3">
        <div className="col- 6">
            <div className="clearfix " >
            <img src= {weatherData.iconUrl}       alt={weatherData.description}/>
            <div className="float-left">
           <spam className="temperature"> {Math.round(weatherData.temperature) }</spam>
           <spam className="unit">degrees</spam>
        </div>
        </div>
        </div>
        <div className="col- 6">
            <ul>
            
                <li>humudity: {weatherData.humidity} % </li>
                <li>wind: {weatherData.wind} km/h</li>
            </ul>
        </div>
    </div>
</div>
);
}     else{

    const ApiKey = "0f8bc384a7c31b717a18cfe38a95ae06";
    
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${props.defaultcity}&appid={API key}&units=metric`;
    axios.get(apiURL).then(handleResponse);
       
    return("Loading...");

}

}