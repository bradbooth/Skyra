import React from 'react'
import { CSSTransition  } from 'react-transition-group'

const Slide = ({transistionIn, children}) => (
    <CSSTransition
        in={transistionIn}
        timeout={800}
        classNames="slide-in-right"
        unmountOnExit
        >
            {children}    
    </CSSTransition> 
)

export default Slide