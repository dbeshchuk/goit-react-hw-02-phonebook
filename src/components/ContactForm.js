import React, { Component } from "react";
import PropTypes from "prop-types";

class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    name: "",
    number: "",
  };

  contactChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
    console.log(value);
  };

  formSubmit = (e) => {
    e.preventDefault();

    this.props.submit(this.state);

    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.formSubmit}>
        <input
          placeholder="Name"
          type="text"
          name="name"
          value={name}
          onChange={this.contactChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />

        <input
          className="number-input"
          placeholder="Number"
          type="tel"
          name="number"
          value={number}
          onChange={this.contactChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />

        <button type="submit">Add to contacts</button>
      </form>
    );
  }
}

export default ContactForm;
