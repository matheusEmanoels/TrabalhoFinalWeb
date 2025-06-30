import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OndeAmostrar.css';

const OndeAmostrar = () => {
  const navigate = useNavigate();

  return (
    <div className="onde-amostrar-container">
      <div className="onde-amostrar-content">
        <h2>Onde Amostrar</h2>

        <div className="text-content">
          <p>
            O VESS pode ser aplicado para qualquer solo, uso e manejo. É importante selecionar a área de interesse e sempre comparar com uma área com boa qualidade estrutural (mata nativa ou solo não cultivados). É importante comparar, por exemplo, áreas com baixa produtividade e área com alta produtividade. Dentro de uma área homogênea avalie 3 a 5 pontos (Guimarães et al., 2017).
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
            onClick={() => navigate('/QuandoAmostrar')}
          >
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
};

export default OndeAmostrar;