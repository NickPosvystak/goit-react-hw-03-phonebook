import { Component } from 'react';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    filter: '',
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };
  handleNumberChange = e => {
    this.setState({ number: e.target.value });
  };
  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.number.value);
    const { name, number } = this.state;
    if (name.trim() === '' || number.trim() === '') return;

    this.props.onAddContact({ name, number });

    // Clear the form inputs
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div className={css.box}>
        <form onSubmit={this.handleSubmit} className={css.form}>
          <input
            className={css.input}
            type="text"
            name="name"
            value={name}
            onChange={this.handleNameChange}
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <input
            className={css.input}
            type="tel"
            name="number"
            value={number}
            onChange={this.handleNumberChange}
            placeholder="Phone Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit" className={css.btnAdd}>
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}
