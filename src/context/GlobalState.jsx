import React ,{ createContext, useReducer} from "react";
import AppReducer from './AppReducer';

const intialState = {
    transcation: []
}

export const GlobalContext = createContext(intialState)

export const GlobalProvider = ( {children}) => {
    const [state, dispatch] = useReducer(AppReducer, intialState)

    function deleteTranscation(id){
        dispatch({
            type: 'DELETE_TRANSCATION',
            payload: id,
        })
    }

    function addTranscation(transcation){
        dispatch({
            type: 'ADD_TRANSCATION',
            payload: transcation,
        });
    }

    return (<GlobalContext.Provider value={{
        transcation: state.transcation,
        deleteTranscation, addTranscation
    }}>
            {children}
        </GlobalContext.Provider>
        )
}