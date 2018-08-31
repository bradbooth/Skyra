import React from 'react';
import { connect } from 'react-redux'
import { Col } from 'react-bootstrap'
import SplashScreen from './SplashScreen'
import Header from './Header'

export class HomePage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            timePassed: false,
        };
    }
    
    componentDidMount() {
        setTimeout( () => {
            this.setTimePassed();
        }, 5000);
    }

    setTimePassed() {
        this.setState({timePassed: true});
    }

    render() {

        if (!this.state.timePassed) {
            return <SplashScreen/>;
        } else {
            return (
                <div className="homepage">
                    <Header />
                </div>
            )
        }

    }
}

export default connect()(HomePage)
