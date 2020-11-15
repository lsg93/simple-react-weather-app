import React from 'react';
import {CSSTransition} from 'react-transition-group'

const FadeIn = (props) => {
    return ( 

        <CSSTransition
                timeout={2000}
                    appear={true}
                    in
                    classNames={{
                        appear: 'animate__animated',
                        appearActive: 'animate__fadeIn',
                        appearDone: 'animate__animated',
                        enter: 'animate__animated',
                        enterActive: 'animate__fadeIn',
                        enterDone: 'animate__animated',
                        exit: 'animate__animated',
                        exitActive: 'animate__fadeOut',
                        exitDone: 'animate__animated',
                    }}
                >
                    {props.children}
                </CSSTransition>

     );
}
 
export default FadeIn;

