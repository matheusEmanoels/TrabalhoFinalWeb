import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EstracaoAmostra.css';
import swapslicegif from '../../assets/swapslice.gif';

const EstracaoAmostra = () => {
  const navigate = useNavigate();

  return (
    <div className="EstracaoAmostra-container">
      <div className="EstracaoAmostra-content">
        <h1>Estração da Amostra</h1>

        <div className="text-content">
          <p>
          Abra uma pequena tricheira cavando somente em lados opostos, reservando os outros dois lados para a retirada da amostra de solo (VER ANIMAÇÃO). Retire uma amostra de 10 a 15 cm de espessura, 20 cm de largura e aprox. 25 cm de profundidade. Acomode a amostra no chão. Meça o comprimento (profundidade) da amostra. (É possível retirar menores profundidades, mas evite amostrar profundidades maiores que 25 cm, para isso utilize o SubVESS (Ball et al., 2015).
          </p>
        </div>

        <div className="divider"></div>

        <div className="gif-container">
                  <img
                    src={swapslicegif}
                    alt="Demonstração de equipamentos"
                    className="equipamentos-gif"
                  />
                </div>

        <div className="navigation-buttons">
          <button
            className="nav-button prev-button"
            onClick={() => navigate('/')}
          >
            Voltar
          </button>
          <button
            className="nav-button next-button"
            onClick={() => navigate('/ExposicaoAgregados')}
          >
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
};

export default EstracaoAmostra;