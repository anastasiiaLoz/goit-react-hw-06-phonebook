// Formatted with Redux
//-------------------------------------------------------
// export const addContact = (contact) => {
//     return {
//         type: 'ADD_CONTACT',
//         payload: contact
//     }
// }

// export const deleteContact = (id) => {
//     return {
//         type: 'DELETE_CONTACT',
//         payload: id,
//     }
// }

// export const getAllContacts = (contacts) => {
//     return {
//         type: 'GET_ALL_CONTACTS',
//         payload: contacts,
//     }
// }

// Formatted with Redux Toolkit
//----------------------------------------------------------
import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/addContact");
export const deleteContact = createAction("contacts/deleteContact");
export const getAllContacts = createAction("contacts/getAllContacts");
export const filterContacts = createAction("tellContacts/filterContacts");
