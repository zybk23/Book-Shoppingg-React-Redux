





export default function featuresListReducer(state=[],action) {
    switch (action.type) {
        case "GET_FEATURES":
            return action.payload;
        default:
            return state
    }
}