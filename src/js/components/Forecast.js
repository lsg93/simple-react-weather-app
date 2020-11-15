import React from 'react';
import Timestamp from './Timestamp'

const Forecast = (props) => {

    // console.log(props)

    return (

        <div className="hourlyForecast columns col-oneline mt-2 px-2">

            <div className="timestamps column col-8">
                    {props.hourlyWeatherData.map((obj) => {
                        return <Timestamp iconInfo={{...obj[Object.keys(obj)[0]]}} time={Object.keys(obj)[0]}/>
                    })
                    }
       
            </div>

            <div class="divider-vert"></div>
                                            
            <div className="forecastDetails column col-4" >

                <div className="py-2 column col-12 d-flex align-center">
                
                <div className="col-3 mr-1"><img src="http://openweathermap.org/img/wn/01d.png"/></div>
                <div className=" col-4 h5 mr-2"><span>Sunrise:</span></div>
                <div className=" col-2"><span>{props.forecastDetails.sunrise}</span></div>
                </div>

                <div className="py-2 column col-12 d-flex align-center">
                    
                    <div className="col-3 mr-1"><img src="http://openweathermap.org/img/wn/01n.png"/></div>
                    <div className="col-4 h5 mr-2"><span>Sunset:</span></div>
                    <div className="col-2"><span>{props.forecastDetails.sunset}</span></div>
                </div>

                <div className="py-2 column col-12 d-flex align-center">
                    
                    <div className="col-3 mr-1">
                    <img src="/wind.svg"/>
            
                    </div>
                    <div className="col-4 h5 mr-2"><span>Wind Speed:</span></div>
                    <div className="col-2"><span>{props.forecastDetails.wind_speed}</span></div>
                </div>
                   

            </div>

        </div>

      );
}
 
export default Forecast