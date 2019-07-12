import React from 'react';
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { startUpdateBase, startUpdateOil, startUpdateFragrance} from '../../actions/variant'

import variantOptions from './productVariants.json'
import { getCorrespondingProductIngredient } from '../survey/DetermineProduct';

const DropdownMenu = ({title, value, options, onChange}) => (
    <div>
        <h4 className="dropdown-title">{title}</h4>
        <select className="dropdown" onChange={onChange} value={value}>
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

    constructor(props) {
        super(props);

        // Initialize dropdowns with survey choices
        this.props.updateBase(getCorrespondingProductIngredient("base", this.props.survey))
        this.props.updateOil(getCorrespondingProductIngredient("oil", this.props.survey))
        this.props.updateFragrance(getCorrespondingProductIngredient("fragrance", this.props.survey))
    }
    
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
                            value={this.props.variants.base}
                            options={variantOptions.base.options}
                            onChange={(e) => this.props.updateBase(e.target.value)}
                        />
                        <DropdownMenu
                            title="Oil"
                            value={this.props.variants.oil}
                            options={variantOptions.oil.options}
                            onChange={(e) => this.props.updateOil(e.target.value)}
                        />

                        <DropdownMenu
                            title="Fragrance"
                            value={this.props.variants.fragrance}
                            options={variantOptions.fragrance.options}
                            onChange={(e) => this.props.updateFragrance(e.target.value)}
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
        variants: state.variant,
        survey: state.survey
    }
};

const mapDispatchToProps = (dispatch) => ({
    updateBase: (base) => dispatch(startUpdateBase(base)),
    updateOil: (oil) => dispatch(startUpdateOil(oil)),
    updateFragrance: (fragrance) => dispatch(startUpdateFragrance(fragrance))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(ProductOptions);