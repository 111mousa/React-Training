import {configureStore} from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import iceCreamReducer from "../features/iceCream/iceCreamSlice"
// import reduxLogger from "redux-logger"
// import logger = reduxLogger.createLogger()
import userReducer from "../features/user/userSlice"

const store = configureStore({
    reducer:{
        cake : cakeReducer,
        iceCream : iceCreamReducer,
        user : userReducer,
    },
    
    // middleware : (getDefaultMiddle)=>getDefaultMiddle().concat(logger)
});

export default store;