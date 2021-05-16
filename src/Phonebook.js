import React, { Component } from "react";
import ContactsForm from "./Components/contactsForm/ContactsForm";
import ContactsList from "./Components/contactsList/ContactsList";
import ContactsSection from "./Components/contactsSection/ContactsSection";
import ContactsFilter from "./Components/contactsFilter/ContactsFilter";
import axios from "axios"
import { connect } from 'react-redux'
import { addContact, deleteContact, getAllContacts } from './redux/actions/actions'


class Contacts extends Component {
    state = {
        contacts: [],
        filter: '',
    }


    async componentDidMount() {
        try {
            const { data } = await axios.get(
                `https://bootycall-phonebook-default-rtdb.firebaseio.com/contacts.json`
            )
            if (data) {
                const contacts = Object.keys(data).map(key => ({ id: key, ...data[key] }))
                this.props.getAllContacts(contacts)
            }
        } catch (error) {

        }
    }

    addContact = async (contact) => {
        try {
            const { data } = await axios.post(
                `https://bootycall-phonebook-default-rtdb.firebaseio.com/contacts.json`,
                contact)
            this.props.addContact({...contact, id: data.name})
        } catch (error) {

        }
    };

    deleteContact = async (e) => {
        try {
            const { id } = e.target
            await axios.delete(
                `https://bootycall-phonebook-default-rtdb.firebaseio.com/contacts/${id}.json`
            );
            this.props.deleteContact(id);
        } catch (error) {
        }
    }

    onCheckDuplicateName = (name) => {
        return this.state.contacts.some((contact) => contact.name === name)
    }

    setFilter = (e) => {
        const { value } = e.target;
        this.setState({
            filter: value
        })
    }

    getFilteredContacts = () => {
        return this.props.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    };


    render() {
        return (
            <>
                <ContactsSection title="Phonebook">
                    <ContactsForm addContact={this.addContact} onCheckDuplicateName={this.onCheckDuplicateName} />
                </ContactsSection>

                <ContactsSection title="Contacts" styles="filterContainerStyle">
                    <ContactsFilter filter={this.state.filter} setFilter={this.setFilter} />
                </ContactsSection>

                <ContactsSection>
                    <ContactsList contacts={this.getFilteredContacts()} deleteContact={this.deleteContact} />
                </ContactsSection>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addContact: (contacts) => {
            dispatch(addContact(contacts))
        },
        deleteContact: (contacts) => {
            dispatch(deleteContact(contacts))
        },
        getAllContacts: (contacts) => {
            dispatch(getAllContacts(contacts))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Contacts);
