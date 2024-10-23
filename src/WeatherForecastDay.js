import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){
function maxTemperature() {
    let Temperature = Math.round(props.data.temp.max);
 return '${temperature}°';
}
function minTemperature() {
    let Temperature = Math.round(props.data.temp.min);
 return '${temperature}°';
}
function Day(){
    let date = new Date (props.data.dt * 1000 );
    let day = date.getDate();
    let days = ["Sun", "Mon", "Tue", "wed", "Thu", "Fri", "Sat"];
    return days[day];
}



    return (
        <div>
    <div className="WeatherForecast-day">{day()}</div>
    <WeatherIcon code={props.weather[0].icon} size={36} />
    <div className="WeatherForecast-temperatures">
      <span className="WeatherForecast-temperature-max">
        {maxTemperature()}°</span>
      <span className="WeatherForecast-temperature-min">
        {minTemperature()}°</span>
    </div>
    </div>
    )
}