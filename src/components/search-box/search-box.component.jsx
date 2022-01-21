import React from 'react';
import './search-box.styles.css'

export default function SearchBox({ placeholder, handleChangeFunc }) {


  return (
    <>
      <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChangeFunc}
      />
    </>
  );
}
