import React, { useState } from 'react';
import './SearchBox.css';

const SearchBox = ({ searchHandler }) => {
  const [value, setValue] = useState('');

  const onChangeHandler = ({ target }) => setValue(target.value);
  const onKeyUp = e => (e.key === 'Enter' ? searchHandler(value) : null);

  return (
    <div className='SearchBox-Wrapper'>
      <button
        className='SearchBox-Button fa fa-search'
        onClick={() => searchHandler(value)}
      ></button>
      <input
        type='text'
        placeholder='Search free high-resolution photos'
        required
        className='SearchBox-Input'
        onChange={onChangeHandler}
        onKeyUp={onKeyUp}
      />
    </div>
  );
};

export default React.memo(SearchBox);
