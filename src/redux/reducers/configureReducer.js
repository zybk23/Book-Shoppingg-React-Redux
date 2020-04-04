import {createStore} from "redux";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk"
import rootReducer from "./index";


export default function configureReducer(){
    return createStore(rootReducer,applyMiddleware(thunk))
}