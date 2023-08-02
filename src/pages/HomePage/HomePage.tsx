import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../component/Header';
import { useLocalStorage } from '../../utils/useLocalStorage';

export const HomePage = () => {
  const [username] = useLocalStorage('username', '');
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) {
      navigate('/singup');
    }
  }, []);

  return (
    <>
      <Header />

      <div className="content">This is content page</div>
    </>
  );
};
