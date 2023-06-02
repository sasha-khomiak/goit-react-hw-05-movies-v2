// import PropTypes from 'prop-types'
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Button, Input } from './SearchingForm.styled';

const SearchingForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onHandleChange = event => {
    // console.log(event.currentTarget.value);
    setQuery(event.currentTarget.value);
  };

  const onHandleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      toast('пустий рядок');
      //   console.log('пустий рядок');
      setQuery('');
      return;
    }
    onSubmit(query);
  };

  return (
    <>
      <ToastContainer autoClose={1000} />
      <form className="form" onSubmit={onHandleSubmit}>
        <Button type="submit" className="button">
          <span className="button-label">Search</span>
        </Button>

        <Input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={query}
          onChange={onHandleChange}
        />
      </form>
    </>
  );
};

// SearchingForm.propTypes = {}

export default SearchingForm;
