import { createStore, combineReducers } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './reducers/userReducer';
import navigationReducer from "./reducers/navigationReducer";
import productDescriptionReducer from "./reducers/productDescriptionReducer";

const rootReducer = combineReducers({
    user: userReducer,
    navigation: navigationReducer,
    productDescription: productDescriptionReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'navigation', 'productDescription']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
