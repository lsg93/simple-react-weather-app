import React from 'react';

const Timestamp = (props) => {

    return ( 

        <div className="timestamp column col-6 d-flex align-center columns col-oneline" >
            <div className=" col-2 h5">{props.time}</div>
            <div className="col-2"></div>
            <div className=" col-2">{props.iconInfo.temp}&deg;</div>
            <div><img title={props.iconInfo.desc} src={`http://openweathermap.org/img/wn/${props.iconInfo.icon}.png`}/></div>
            </div>

     );
}
 
export default Timestamp