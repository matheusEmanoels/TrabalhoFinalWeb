import React from 'react';
import { useNavigate } from 'react-router-dom';
import './QuandoAmostrar.css';

const QuandoAmostrar = () => {
  const navigate = useNavigate();

  return (
    <div className="onde-amostrar-container">
      <div className="onde-amostrar-content">
        <h1>Quando Amostrar</h1>

        <div className="text-content">
          <p>
            O VESS pode ser realizado em qualquer época do ano. Em solos argilosos deve-se esperar pelo menos 4 dias após uma chuva (menor que 50 mm) ou períodos chuvosos (Ball et al., 2017). Se o solo estiver muito seco ou muito úmido será difícil de ser obtida uma amostra intacta que seja representativa da área. Raízes são melhores vistas em uma área com cultura já estabelecida ou logo após a colheita.
          </p>
        </div>

        <div className="divider"></div>

        <div className="navigation-buttons">
          <button
            className="nav-button prev-button"
            onClick={() => navigate('/')}
          >
            Voltar
          </button>
          <button
            className="nav-button next-button"
            onClick={() => navigate('/EstracaoAmostra')}
          >
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuandoAmostrar;