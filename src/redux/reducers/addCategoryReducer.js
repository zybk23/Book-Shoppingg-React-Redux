


export default function categoryListReducer(state=[],action) {
    switch (action.type) {
        case "ADD_CATEGORY":
            return [...state,{...action.payload}];
        default:
            return state
    }
}