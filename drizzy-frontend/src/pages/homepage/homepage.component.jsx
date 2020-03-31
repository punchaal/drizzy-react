import React from 'react';
import './homepage.styles.scss';
import Search from '../../components/search/search.component';

const HomePage = () => (
  <div>
    <div className='logo'>
      <i className='fas fa-cocktail' />
      Drizzy
    </div>
    <Search />
  </div>
);

export default HomePage;
