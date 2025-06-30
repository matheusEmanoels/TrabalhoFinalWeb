import { useNavigate } from 'react-router-dom';
import './MenuPage.css';
import { FaCalendarAlt, FaClipboardList, FaCog, FaEye, FaInfoCircle, FaMapMarkerAlt, FaQuestionCircle, FaRuler, FaTools, FaTractor, FaVial } from 'react-icons/fa';

const MenuPage = () => {
  const navigate = useNavigate();

  const buttons = [
    { label: 'Equipamentos', path: '/Equipamentos', icon: <FaTools /> },
    { label: 'Onde Amostrar', path: '/OndeAmostrar', icon: <FaMapMarkerAlt /> },
    { label: 'Quando Amostrar', path: '/QuandoAmostrar', icon: <FaCalendarAlt /> },
    { label: 'Extração da Amostra', path: '/EstracaoAmostra', icon: <FaVial /> },
    { label: 'Exposição dos Agregados', path: '/ExposicaoAgregados', icon: <FaEye /> },
    { label: 'Atribuição dos Escores VESS', path: '/AtribuicaoVESS', icon: <FaRuler /> },
  ];

  const extraButtons = [
    { label: 'Decisão de manejo', path: '/DecisaoManejo', icon: <FaTractor /> },
    { label: 'Informações Complementares', path: '/InformacoesComplementares', icon: <FaInfoCircle /> },
    { label: 'O que é o VESS', path: '/VESS', icon: <FaQuestionCircle /> },
    { label: 'Minhas avaliações', path: '/Avaliacoes', icon: <FaClipboardList /> },
    { label: 'Sobre o App', path: '/SobreApp', icon: <FaInfoCircle /> },
    { label: 'Configurações', path: '/Configuracoes', icon: <FaCog /> },
  ];

  return (
    <div className="menu-container">
      <div className="button-grid">
        <div className="row justify-content-center">
          <div className="col-12 d-flex justify-content-center mb-4">
            <button
              className="avaliar-button"
              onClick={() => navigate('/Avaliar')}
            >
              AVALIAR
            </button>
          </div>

          {buttons.map((btn, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-4"
            >
              <button
                className="btn btn-custom"
                onClick={() => navigate(btn.path)}
              >
                {btn.icon && <span className="button-icon">{btn.icon}</span>}
                {btn.label}
              </button>
            </div>
          ))}
        </div>

        <div className="row justify-content-center mt-2 mb-4">
          <div className="col-12 text-center">
            <hr className="custom-divider" />
          </div>
        </div>

        <div className="row justify-content-center">
          {extraButtons.map((btn, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-4"
            >
              <button
                className="btn btn-custom"
                onClick={() => navigate(btn.path)}
              >
                {btn.icon && <span className="button-icon">{btn.icon}</span>}
                {btn.label}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;