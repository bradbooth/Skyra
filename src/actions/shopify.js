
export const startStoreProducts = (products = []) => ({
    type: 'SHOPIFY_STORE_PRODUCTS',
    products
})

export const startCreateCheckout = (checkout = []) => ({
    type: 'SHOPIFY_CREATE_CHECKOUT',
    checkout
})

export const startUpdateCheckout = (checkout) => ({
    type: 'SHOPIFY_UPDATE_CHECKOUT',
    checkout
})
