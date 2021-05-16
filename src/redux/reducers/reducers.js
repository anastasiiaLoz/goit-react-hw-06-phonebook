// import { ADD_CONTACT, DELETE_CONTACT, GET_ALL_CONTACTS } from '../actions/actions'

import { addContact, deleteContact, getAllContacts} from '../actions/actions'

// Formatted with Redux
//------------------------------------------------------------
// const allReducers = (state = [], action) => {
//     switch (action.type) {
//         case 'ADD_CONTACT':
//             return [...state, action.payload];
        
//         case 'DELETE_CONTACT':
//             return [...state.filter(contact => contact.id !== action.payload)];
        
//         case 'GET_ALL_CONTACTS':
//             return action.payload
//         default:
//             return state;
//     }
// }


// Formatted with Redux Toolkit 
//------------------------------------------------------------
import { createReducer } from '@reduxjs/toolkit'

const allReducers = createReducer([], {
    [addContact]: (state, { payload }) => [...state, payload],
    [deleteContact]: (state, { payload }) => [...state.filter(contact => contact.id !== payload)],
    [getAllContacts]: (_, {payload}) => payload,
})


export default allReducers;    