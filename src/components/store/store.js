import React from "react";
import { connect } from "react-redux";
import { Grid, Row, Col, Button } from "react-bootstrap";
import StoreItem from './storeItem'

export class Store extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      items: ["item1", "item2", "item3", "item4", "item5", "item6"]
    }

  }

  render() {
    return (
      <div>
        <Grid>
          <Row className="storeContainer">
            <Col xs={12}>
              <h1>A unique style.</h1>
            </Col>
            <Col xs={12} className="storeItemsContainer">
              {this.state.items.map((item) => {
                return <StoreItem itemName={item} key={item} />
              })}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default connect()(Store);
