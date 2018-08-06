import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index';

export default ({ children, initialState = {} }) => {
    return (
        // The purpose of inital state is to give the option of passsing in some inital state for testing purposes
        <Provider store={createStore(reducers, initialState)}>
            {children}
        </Provider>
    )
}