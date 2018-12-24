const cartDefaultState = {}

export default (state = cartDefaultState, action) => {
    switch (action.type) {
        case 'SHOPIFY_STORE_CREATED':
            return {
                ...state,
                client: action.payload
            }
        case 'SHOPIFY_STORE_PRODUCTS':
            return {
                ...state,
                products: action.products
            }
        case 'SHOPIFY_CREATE_CHECKOUT':
            return {
                ...state,
                checkout: action.checkout
            }
        case 'SHOPIFY_UPDATE_CHECKOUT':
            return {
                ...state,
                checkout: action.checkout
            }
        default:
            return state
    }
}