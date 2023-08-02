import React from 'react';
import { Link } from 'react-router-dom';
import imgLogo from '../../images/header-fixed.png';
import { useLocalStorage } from '../../utils/useLocalStorage';

export const Header = () => {
  const [username] = useLocalStorage<string>('username', '');

  return (
    <div className="header">
      <div className="singupform__logo">
        <Link to="/">
          <img src={imgLogo} alt="BestRest Logo" />
        </Link>
      </div>
      {username && (
        <div>
          {username}
          <br />
          <Link to="/singup">change name</Link>
        </div>
      )}

    </div>
  );
};
