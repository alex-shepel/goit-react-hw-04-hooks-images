import PropTypes from 'prop-types';
import { Component } from 'react';
import s from './Searchbar.module.css';
import { BiSearch } from 'react-icons/bi';

class Searchbar extends Component {
  state = {
    value: '',
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.onSubmit}>
          <button type="submit" className={s.button}>
            <BiSearch size={20} />
          </button>

          <input
            className={s.input}
            onChange={this.onChange}
            value={this.state.value}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
