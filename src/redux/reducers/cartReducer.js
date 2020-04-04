


export default function cartReducer(state=[],action) {

    switch (action.type) {
        case "ADD_TO_CART":
            //console.log(action.payload.book.id);
            const addedItem=state.find(c=>c.book.id===action.payload.book.id);

            if(addedItem){
                let newState=state.map(cartItem=>{
                    if(cartItem.book.id===action.payload.book.id){
                        return Object.assign({},addedItem,{quantity: addedItem.quantity+1})
                    }
                    return cartItem;
                });
                return newState;
            }
            else{
                return [...state,{...action.payload}]
            }

        case "DELETE_CART":
            const newState2=state.filter(cartItem=>cartItem.book.id!==action.payload.id);
            return newState2;
        default:
            return state
    }
}