import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

 let pageTitle = 'VESS';

  if (location.pathname === '/Avaliacoes') {
    pageTitle = 'AVALIAÇÕES';
  } else if (location.pathname === '/Configuracoes') {
    pageTitle = 'CONFIGURAÇÕES';
  } else if (location.pathname === '/termos') {
    pageTitle = 'TERMOS DE USO';
  }

  return (
    <header className="menu-header">
      <h1>{pageTitle}</h1>
    </header>
  );
};

export default Header;