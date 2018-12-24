import React from 'react'
import { CSSTransition  } from 'react-transition-group'


export class Survey extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
           active: false
        };
    }

    toggle = () => {
        this.setState({
            active: !this.state.active
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.toggle}>Toggle</button>

                <CSSTransition
                    in={this.state.active}
                    timeout={800}
                    classNames="slide"
                    unmountOnExit
                >
                    <div >⭐</div>
                </CSSTransition>

            </div>
        )
    }
}

export default Survey