import React from "react";
import "./weather.css";

export default function weather(){
 
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
          <h1>New York</h1>  
          <ul>
            <li>wednesday 07:00</li>
            <li>mostly cloudy</li>
          </ul>

            <div className="row mt-3">
                <div className="col- 6">
                    <div className="clearfix " >
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy_png"       alt="mostly cloudy"/>
                    <div className="float-left">
                   <spam className="temperature"> 6</spam>
                   <spam className="unit">degrees</spam>
                </div>
                </div>
                </div>
                <div className="col- 6">
                    <ul>
                        <li>precipitation:15% </li>
                        <li>humudity:72% </li>
                        <li>wind:15 km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}