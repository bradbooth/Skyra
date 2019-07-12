import productVariants from '../components/product/productVariants.json'

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
        default:
            return state
    }
}

