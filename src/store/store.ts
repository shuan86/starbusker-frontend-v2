import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { memberReducer } from "../reducers/member";
const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({ memberReducer })
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer)
export const persistor = persistStore(store)
export type storeTypes = ReturnType<typeof rootReducer>;

