import PropTypes from 'prop-types';
import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChanged = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    setInputValue('');
    onNewCategory(inputValue.trim());
    
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChanged}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
