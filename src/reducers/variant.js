import { productVariants } from '../components/product/productVariants'

const VariantDefaultState = {
    base:  productVariants.base.default,
    oil: productVariants.oil.default,
    fragrance: productVariants.fragrance.default
};

export default (state = VariantDefaultState, action) => {
    switch (action.type) {
        case 'UPDATE_VARIANT_BASE':
            return {
                ...state,
                base: action.base
            }
        case 'UPDATE_VARIANT_OIL':
            return {
                ...state,
                oil: action.oil
            }
        case 'UPDATE_VARIANT_FRAGRANCE':
            return {
                ...state,
                fragrance: action.fragrance
            }
        case 'UPDATE_VARIANT_EXFOLIATOR':
            return {
                ...state,
                exfoliator: action.exfoliator
            }
        case 'UPDATE_VARIANT_COLOUR':
            return {
                ...state,
                colour: action.colour
            }
        default:
            return state
    }
}

