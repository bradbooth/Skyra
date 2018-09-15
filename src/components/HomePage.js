import React from 'react';
import { connect } from 'react-redux'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import Header from './Header'
import SplashScreen from './SplashScreen'

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
        this.props.history.push('/survey/1')
    }

    render() {
        return (
            <div>
                <div>
                    <Grid>
                        <Row className="SurveyStart">
                            <Col md={6}>
                                <h1>TAKE<br/>THE<br/>SURVEY</h1>
                                <Button className="button" onClick={this.onClick}>START</Button>
                            </Col>
                            <Col  md={6} >
                                <img src="/images/clear-glass-jar.png" alt=""/>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default connect()(HomePage)
