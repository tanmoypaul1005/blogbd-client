// import { applyMiddleware, createStore } from "redux";
// import reducer from "../reducers/reducers";
// import thunk from "redux-thunk";

// const store = createStore(reducer, applyMiddleware(thunk));

// export default store;



import { applyMiddleware, createStore } from "redux";
import reducer from "../reducers/reducers";
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: 'main-root',
    storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const Persistor = persistStore(store)

export { Persistor };
export default store;
