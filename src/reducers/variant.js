import productOptions from '../components/product/productOptions.json'

const VariantDefaultState = {
    base:  productOptions.base.default,
    oil: productOptions.oil.default
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
        default:
            return state
    }
}

