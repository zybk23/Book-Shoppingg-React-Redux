

export default function changeCategoryReducer(state={},action) {
    switch (action.type) {
        case "CHANGE_CATEGORY":
            return action.payload
        default:
            return state
    }
}