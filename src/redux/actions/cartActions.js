



export function addToCart(Item) {
    return{type:"ADD_TO_CART",payload:Item}
}

export function deleteCart(Item) {
    return {type:"DELETE_CART",payload:Item}
}