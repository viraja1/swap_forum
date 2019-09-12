import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/index.scss';

const BoxLogo = () => (
  <Link to='/'>
    <div className="logo">
      <h3>Swap Forum</h3>
    </div>
  </Link>
);

export default BoxLogo;
