import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "./categoryListReducer"
import productListReducer from "./productListReducer";
import cartReducer from "./cartReducer";
import savePoductReducer from "./saveProductReducer";

const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    productListReducer,
    cartReducer,
    savePoductReducer
})

export default rootReducer;