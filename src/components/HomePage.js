import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import { NavLink, Text } from 'react-router-dom'


export class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.surveyButtonClick = this.surveyButtonClick.bind(this);
    this.goToProductPage = this.goToProductPage.bind(this);
    this.state = {
      timePassed: false
    };
  }

  setTimePassed() {
    this.setState({ timePassed: true });
  }

  surveyButtonClick() {
    this.props.history.push("/survey");
  }

  goToProductPage(){
    this.props.history.push("/product")
  }


  render() {
    return (
      <div>
        <Container className="container-fluid masthead">
          <Row className="text-left">
              <Col xs={4} >
                <h1 className="main-row-title">
                  {"Because your skin is unique."}
                </h1>
              </Col>
              <Col xs={8}></Col>
              
            <Col sm={12} md={6} >
              <Button className="button-black main-row-survey-button" onClick={this.surveyButtonClick}>
                Take the survey
              </Button>
            </Col>

          </Row>
        </Container>
        
      </div>
    );
  }
}

export default connect()(HomePage);
