import React from 'react';
import { connect } from 'react-redux'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import Header from './Header'
import SplashScreen from './SplashScreen'
import SurveyStart from './SurveyStart'

export class HomePage extends React.Component {

    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this)
        this.state = {
            timePassed: false,
        };
    }
    
    // Show the splashscreen for 5 seconds
    // componentDidMount() {
    //     setTimeout( () => {
    //         this.setTimePassed();
    //     }, 1000);
    // }

    setTimePassed() {
        this.setState({timePassed: true});
    }

    onClick() {
        this.props.history.push('/survey')
    }

    render() {
        return (
            <div>
                <Header />
                <div className="fadeIn">
                    <Grid>
                        <Row>
                            <Col className="SurveyStart" xs={10}>
                                <h1>TAKE<br/>THE<br/>SURVEY</h1>
                                <Button className="button" onClick={this.onClick}>START</Button>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default connect()(HomePage)
