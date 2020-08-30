/*
    This is a configuration page for the react context API's.
*/

import React, { createContext, useContext, useReducer } from 'react';

//data layer
export const StateContext = createContext();


//building provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// this is how we use it inside the component
export const useStateValue = () => useContext(StateContext);

