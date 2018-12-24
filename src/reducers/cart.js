const cartDefaultState = {
    showCart: false
}

export default (state = cartDefaultState, action) => {
    switch (action.type) {
        case 'TOGGLE_CART':
            return {
                ...state,
                client: action.payload
            }
        default:
            return state
    }
}