import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const inititalState = {
    user: {}
}

export const GlobalContext = createContext(inititalState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, inititalState);

    function addUser(userInfo){
        dispatch({
            type: "ADD_USER",
            payload: userInfo
        })
    }

    function logout(){
        dispatch({
            type: "LOGOUT"
        })
    }

    return (<GlobalContext.Provider value={{
        user: state.user,
        addUser,
        logout
    }}>
        {children}
    </GlobalContext.Provider>);
}