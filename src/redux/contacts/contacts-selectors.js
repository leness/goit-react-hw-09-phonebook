import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contact.loading;

const getFilter = state => state.contact.filter;

const getAllContacts = state => state.contact.contacts;


const getVisibleContacs = createSelector(
    [getAllContacts, getFilter],
    (contacts, filter) => {
        const normalizeSearch = filter.toLowerCase();
        console.log(contacts);
       
       
        return contacts.filter(({ name }) =>
            name.toLowerCase().includes(normalizeSearch),
        );
    },
);

console.log(getVisibleContacs);


export default {
    getLoading,
    getAllContacts,
    getFilter,
    getVisibleContacs,
}