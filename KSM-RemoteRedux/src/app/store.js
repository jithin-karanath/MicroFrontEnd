import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterSlice  from '../components/slice'
import logger from 'redux-logger';

const middleWares = [];

    middleWares.push(logger);

const reducers = combineReducers({
    counterSlice
});

export const store = configureStore({
    reducer: {
        sample: reducers,
        devTools: true,
        middleware: middleWares
    },
})