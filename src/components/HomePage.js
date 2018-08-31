import React from 'react';
import { connect } from 'react-redux'
import Header from './Header'
import SplashScreen from './SplashScreen'
import SurveyStart from './SurveyStart'

export class HomePage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            timePassed: false,
        };
    }
    
    // Show the splashscreen for 5 seconds
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
                    <SurveyStart />
                </div>
            )
        }

    }
}

export default connect()(HomePage)
