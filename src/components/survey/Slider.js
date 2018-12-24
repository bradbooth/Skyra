import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

const Slider = () => (
    <div>
        <CSSTransitionGroup
        transitionName='fadeIn'
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={500}
        >
        </CSSTransitionGroup>    
    </div>


);

export default Slider;