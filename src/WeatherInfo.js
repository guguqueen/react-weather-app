import React from "react";
import formattedDate from "./formattedDate";
import WeatherIcon from "./WeatherIcon.js";
export default function WeatherInfo(props){
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
<li> 
    
    </li>
<li className="text-capitalize">{props.Data.description}</li>
</ul>

<div className="row mt-3">
    <div className="col- 6">
        <div className="clearfix " >
        <div className="float-left">
        <img src= {weatherData.iconUrl}   />
        </div>
        <div className="float-left">
       <spam className="temperature"> {Math.round(props.Data.temperature) }</spam>
       <spam className="unit">degrees</spam>
    </div>
    </div>
    </div>
    <div className="col- 6">
        <ul>
        
            <li>humudity: {props.Data.humidity} % </li>
            <li>wind: {props.Data.wind} km/h</li>
        </ul>
    </div>
</div>
</div>
);
} 
