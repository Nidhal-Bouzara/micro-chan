import { configureStore } from '@reduxjs/toolkit';
import cliReducer from './cliSlice';

const store = configureStore({
    reducer: {
        cli: cliReducer,
    },
})



// types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;