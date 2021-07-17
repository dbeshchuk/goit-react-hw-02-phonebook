import React, { Component } from "react";
import shortid from "shortid";
import ContactForm from "./components/ContactForm";
import ContactItem from "./components/ContactItem";
import ContactsList from "./components/ContactsList";
import Filter from "./components/Filter";
import "./App.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  inputChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
    console.log(value);
  };

  handleSubmit = ({ name, number }) => {
    const { contacts } = this.state;

    const newContact = [
      {
        id: shortid.generate(),
        name: name,
        number: number,
      },
    ];

    contacts.some((item) => item.name === name)
      ? alert(`${name} is already in contacts`)
      : this.setState((prevState) => ({
          contacts: [...prevState.contacts, ...newContact],
        }));
  };

  filterChange = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  onDeleteClick = (targetId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((item) => item.id !== targetId),
    }));
  };

  render() {
    const filteredContacts = this.filterChange();

    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm submit={this.handleSubmit} />

        <h2>Contacts</h2>
        <Filter value={this.filter} change={this.inputChange} />

        <ContactsList>
          <ContactItem
            list={filteredContacts}
            deleteItem={this.onDeleteClick}
          />
        </ContactsList>
      </div>
    );
  }
}

export default App;
