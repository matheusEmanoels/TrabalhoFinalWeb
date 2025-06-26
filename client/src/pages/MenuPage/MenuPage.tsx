import { useNavigate } from 'react-router-dom';
import './MenuPage.css';

const MenuPage = () => {
  const navigate = useNavigate();

  const buttons = [
    { label: 'Equipamentos', path: '/Equipamentos' },
    { label: 'Onde Amostrar', path: '/OndeAmostrar' },
    { label: 'Quando Amostrar', path: '/QuandoAmostrar' },
    { label: 'Extração da Amostra', path: '/EstracaoAmostra' },
    { label: 'Exposição dos Agregados', path: '/EsposicaoAgregados' },
    { label: 'Atribuição dos Escores VESS', path: '/AtribuicaoVESS' },
  ];

  const extraButtons = [
    { label: 'Decisão de manejo', path: '/DecisaoManejo' },
    { label: 'Informações Complementares', path: '/InformacoesComplementares' },
    { label: 'O que é o VESS', path: '/VESS' },
    { label: 'Minhas avaliações', path: '/Avaliacoes' },
    { label: 'Sobre o App', path: '/SobreApp' },
    { label: 'Configurações', path: '/Configuracoes' },
  ];

  return (
    <div className="menu-container">
      <div className="button-grid">
        <div className="row justify-content-center">
          <div className="col-12 d-flex justify-content-center mb-4">
            <button
              className="avaliar-button"
              onClick={() => navigate('/avaliacao/iniciar')}
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
                {btn.label}
              </button>
            </div>
          ))}
        </div>

        {/* Linha divisória */}
        <div className="row justify-content-center mt-2 mb-4">
          <div className="col-12 text-center">
            <hr className="custom-divider" />
          </div>
        </div>

        {/* Segunda fileira de botões */}
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