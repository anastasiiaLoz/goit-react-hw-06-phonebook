import { configureStore } from '@reduxjs/toolkit';
import allReducers from './reducers/reducers'

const store = configureStore({
    reducer: {
        contacts: allReducers,
    }
});

export default store;