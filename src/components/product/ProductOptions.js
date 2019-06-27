import React from 'react';
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { startUpdateBase, startUpdateOil } from '../../actions/variant'

import variantOptions from './productOptions.json'

const DropdownMenu = ({title, options, onChange}) => (
    <div>
        <h4 className="dropdown-title">{title}</h4>
        <select className="dropdown" onChange={onChange} >
            {options.map((item, i) => (
                <option
                    key={i}
                    value={item}>
                    {item}
                </option>
            ))}
        </select>
    </div>
)


export class ProductOptions extends React.Component {


    dropdownChanged = (e) => {
        const dropdownselection = e.target.value
        this.setState(() => ({ dropdownselection }));
    }


    render() {

        return (
            <div>
                <Row>
                    <Col xs={12}>
                        <h1> {this.props.products && this.props.products[0].title}</h1>
                    </Col>
                    <Col xs={12}>
                        <FontAwesomeIcon icon="star" />
                        <FontAwesomeIcon icon="star" />
                        <FontAwesomeIcon icon="star" />
                        <FontAwesomeIcon icon="star" />
                        <FontAwesomeIcon icon="star" />
                    </Col>
                    <Col xs={12}>
                        <p> 
                            This is a brief description of the face mask. Need help
                            choosing? Take the quiz and find whats right for you
                        </p>
                    </Col>
                    <Col xs={12}>
                        <DropdownMenu
                            title="Base" 
                            options={variantOptions.base.options}
                            onChange={(e) => this.props.updateBase(e.target.value)}
                        />
                        <DropdownMenu
                            title="Oil" 
                            options={variantOptions.oil.options}
                            onChange={(e) => this.props.updateOil(e.target.value)}
                        />
                        <DropdownMenu
                            title="Fragrance" 
                            options={["Grapeseed", "Coconut", "Castor"]}
                            onChange={this.dropdownChanged}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.shopify.products,
        variants: state.variant
    }
};

const mapDispatchToProps = (dispatch) => ({
    updateBase: (base) => dispatch(startUpdateBase(base)),
    updateOil: (oil) => dispatch(startUpdateOil(oil))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(ProductOptions);
