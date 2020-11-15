import React from 'react';

const Card = (props) => {

    let selected = (props.selected == true) ? 'selected' : ''

    return ( 
        <div onClick={() => props.selectCard(props.day) } className={`${selected} column col-1 weatherCard p-1 c-hand mx-2`} >
            <div className="text-center" >{props.day}</div>
            <div className="text-center text-muted" >{props.forecast}</div>
            <div className="d-flex flex-centered" ><img src={props.icon}/></div>
            <div className="d-flex space-between" >
                <div><span className="px-2">{props.dayTemp}&deg;</span></div>
                <div><span className="px-2 text-muted" >{props.nightTemp}&deg;</span></div>
            </div>
    </div>
     );
}
 
export default Card;