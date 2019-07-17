import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
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
        <Container className="container-fluid masthead h-100" fluid>
          
          <Row className="main-row-0 text-left h-100 justify-content-center align-items-center">
              <Col xs={{span: 12, order: 1}}>
                    <Image 
                      className="mx-auto d-block main-row-image"
                      src={"/images/clear-glass-jar.png"} 
                      alt="" 
                    />
              </Col>
          </Row>
          
          <Row className="main-row-1 text-center h-100 justify-content-center align-items-center">
              <Col xs={{span: 12, order: 1}}>
                <h1 className="main-row-title">
                  {"This is the slogan."}
                </h1>
              </Col>
          </Row>

          <Row className="main-row-2 text-left h-100 justify-content-center align-items-center">
              <Col xs={{span: 12, order: 2}} 
                   sm={{span: "auto", order: 2}} >
                <h2 className="main-row-2-survey-text">
                  {"Find\nyour\nmatch."}
                </h2>
                <Button className="button-black main-row-survey-button" onClick={this.surveyButtonClick}>
                  Take the survey
                </Button>
              </Col>
              <Col xs={{span: 12, order: 1}} 
                   sm={{span: "auto", order: 1}} >
                    <Image 
                      className="mx-auto d-block"
                      src={"https://via.placeholder.com/300"} 
                      alt="" 
                    />
              </Col>
          </Row>

        </Container>
        
      </div>
    );
  }
}

export default connect()(HomePage);
