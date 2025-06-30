import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ExposicaoAgregados.css';
import fragmentationGIF from '../../assets/fragmentation.gif';

const ExposicaoAgregados = () => {
  const navigate = useNavigate();

  return (
    <div className="onde-amostrar-container">
      <div className="onde-amostrar-content">
        <h1>Exposição dos Agregados</h1>

        <div className="text-content">
          <p>
            Delicadamente manipule a amostra. Segure a amostra por baixo e abra como um livro, respeitando as linhas de fratura dos agregados. Observe se há camadas que se diferenciam pelo tamanho e/ou forma dos agregados e faça a avaliação individual dessas camadas. Meça o comprimento de cada camada distinta. Esses valores serão informados na seção avaliar.          </p>
        </div>

        <div className="divider"></div>

        <div className="gif-container">
                  <img
                    src={fragmentationGIF}
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
            onClick={() => navigate('/QuandoAmostrar')}
          >
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExposicaoAgregados;