import React from 'react';
import './search.styles.scss';

const Search = () => (
  <div>
    <form id='js-form' class='bg-text'>
      <fieldset name='ingredients-name'>
        <legend className='search-box'>
          Type an alcohol to try a new recipe tonight
        </legend>
        <input
          type='text'
          name='search-term'
          id='js-search-term'
          className='search-box green-text'
          placeholder='Enter base alcohol'
          spellcheck='true'
          required=''
        />
        <input
          type='submit'
          value='Find me a cocktail'
          className='btn-primary'
        />
      </fieldset>
    </form>
  </div>
);

export default Search;
