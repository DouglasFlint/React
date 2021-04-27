import {createStore} from 'redux';
import {Reducer, initialSate, initialState} from './reducer';

export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        initialState
    );

    return store;
}