import {combineReducers} from "redux";
import categoryListReducer from "./categoryListReducer";
import featuresListReducer from "./featuresListReducer";
import changeCategoryReducer from "./changeCategoryReducer";
import cartReducer from "./cartReducer";
import saveProductReducer from "./saveProductReducer";
import addCategoryReducer from "./addCategoryReducer";

const rootReducer=combineReducers({
    categoryListReducer,
    featuresListReducer,
    changeCategoryReducer,
    cartReducer,
    saveProductReducer,
    addCategoryReducer
});


export default rootReducer;