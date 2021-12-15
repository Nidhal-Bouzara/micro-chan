import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as _ from 'lodash';

interface historyI {
    user: string;
    address: string;
    dir: string;
    content: string;
}

interface initialStateI {
    prompt: string;
    user: string;
    address: string;
    dir: string;
    history: Array<historyI>;
}

const initialState: initialStateI = {
    prompt: '',
    user: 'visitor',
    address: 'micro-chan',
    dir: '/',
    history: [],
}


export const cliSlice = createSlice({
    name: 'cli',
    initialState,
    reducers: {
        command: (state, action: PayloadAction<string>) => {
            state.prompt = action.payload;
        },
        addToHistory: (state, action: PayloadAction<historyI>) => {
            state.history.push(action.payload);
        },
        clearHistory: (state) => {
            state.history = [];
            state.prompt = '';
        },
        accessAddress: (state, action: PayloadAction<string>) => {
            state.address = action.payload;
        },
        login: (state, action: PayloadAction<string>) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = 'visitor';
        }
    },
})


export const { command, addToHistory, clearHistory, accessAddress, login, logout } = cliSlice.actions;
export default cliSlice.reducer;