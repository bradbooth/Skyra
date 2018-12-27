import React from "react";
import { connect } from "react-redux";
import { Grid, Row, Col, Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom'


export class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.goToProductPage = this.goToProductPage.bind(this);
    this.state = {
      timePassed: false
    };
  }

  setTimePassed() {
    this.setState({ timePassed: true });
  }

  onClick() {
    this.props.history.push("/survey/1");
  }

  goToProductPage(){
    this.props.history.push("/product")
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <NavLink to="/product">Product Page</NavLink>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default connect()(HomePage);
