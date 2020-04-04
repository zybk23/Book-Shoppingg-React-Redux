


export default function saveProductReducer(state={},action) {
    switch (action.type) {
        case "CREATE_FEATURES_SUCCESS":
            return action.payload;
        case "UPDATE_FEATURES_SUCCESS":
            return action.payload;

        default:
            return state;
    }
}