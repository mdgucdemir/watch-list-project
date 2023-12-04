import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

import storeSlice from './storeSlice';

// -- PersistReducer icin
const reducer = combineReducers({
    store: storeSlice
});
const persistConfig = {
    key: 'root',
    storage,
    version: 1
}
const persistedReducer= persistReducer(persistConfig, reducer)
// -- PersistReducer son


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});

/*
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })

    console da hata vermesini onlemek icin
*/