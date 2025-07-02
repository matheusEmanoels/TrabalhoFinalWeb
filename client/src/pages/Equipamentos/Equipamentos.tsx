import { useNavigate } from 'react-router-dom';
import './Equipamentos.css';
import equipamentosGif from '../../assets/equipamentos_img/equipamentos.gif';

const Equipamentos = () => {
  const navigate = useNavigate();

  return (
    <div className="equipamentos-container">
      <div className="equipamentos-content">
        <h2>Equipamentos</h2>

        <div className="gif-container">
          <img
            src={equipamentosGif}
            alt="Demonstração de equipamentos"
            className="equipamentos-gif"
          />
        </div>

        <div className="divider"></div>

        <div className="equipamentos-list">
          <ul>
            <li>Pá reta de aproximadamente 25 cm de largura e 22-25 cm de comprimento</li>
            <li>Trena ou régua de 30 cm</li>
            <li>Opcional: folha plástica ou saco de cor clara ou bandeja ~50 x 80 cm</li>
            <li>Opcional: câmera digital</li>
          </ul>
        </div>

        <div className="navigation-buttons">
          <button
            className="nav-button prev-button"
            onClick={() => navigate('/')}
          >
            Voltar
          </button>
          <button
            className="nav-button next-button "
            onClick={() => navigate('/OndeAmostrar')}
          >
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Equipamentos;