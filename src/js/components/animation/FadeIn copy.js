import React from 'react';
import {CSSTransition} from 'react-transition-group'

const FadeIn = (props) => {
    return ( 

        <CSSTransition
                timeout={1000}
                    appear={true}
                    in
                    classNames={{
                        appear: 'animate__animated',
                        appearActive: 'animate__fadeInUp',
                        appearDone: 'animate__animated',
                        enter: 'animate__animated',
                        enterActive: 'animate__fadeInUp',
                        enterDone: 'animate__animated',
                        exit: 'animate__animated',
                        exitActive: 'animate__fadeInUp',
                        exitDone: 'animate__nimated',
                    }}
                    unmountOnExit
                >
                    {props.children}
                </CSSTransition>

     );
}
 
export default FadeIn;

