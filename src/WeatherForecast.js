import React, {useState} from "react";
import "/.WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastday";

    
    export default function WeatherForecast(props) {
        let [loaded, setloaded] = usestate(false);
        let [forecast, setforecast] = usestate(null);

        function handleResponse(response){
            setForecast(response.data.daily);
            setloaded(true);
        }
        
        If (loaded) {
        return (
            <div className="WeatherForecast">
              <div className="row">
                {foreccast.map(function(dailyforecast, index){
                    if (index > 6){
                        return (
                            <div className="col" key ={index}>
                            <WeatherForecastDay data = {forecast[0]} />
                            </div>
                            
                          ); 
                    }
                 })}   
                    </div></div>
                );
            
        }
         else {
            let apiKey = "0f8bc384a7c31b717a18cfe38a95ae06";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=&{latitude}&Ion=&{longitude}&appid=${apikey}&units=metric'
      
        axios.get(apiURL).then(handleResponse);
        return null;
            }

        }
    