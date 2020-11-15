import React from 'react';

const Container = (props) => {
    return (

        <div className="app container grid-lg d-flex flex-centered">
            {props.children}
        </div>

      );
}
 
export default Container;