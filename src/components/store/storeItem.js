import React from 'react';
import { Grid, Row, Col, Button } from "react-bootstrap";

const StoreItem = ({itemName}) => (
    <div>
        <Col xs={4} md={3} className="storeItem">
        <img src="/images/clear-glass-jar.png" alt="" />
        <div className="dotContainer">
            <span className="dot" style={{backgroundColor: "#00c0f1"}}></span>
            <span className="dot" style={{backgroundColor: "#add036"}}></span>
            <span className="dot" style={{backgroundColor: "#ec2426"}}></span>
        </div>
        <h3>$49.99</h3>
        <h1>{itemName}</h1>
        <Button className="button-black">
                ADD TO CART
        </Button>
        </Col> 
    </div>
)

export default StoreItem