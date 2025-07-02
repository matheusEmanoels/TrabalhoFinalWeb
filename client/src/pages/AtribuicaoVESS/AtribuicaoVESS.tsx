import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './AtribuicaoVESS.css';


const AtribuicaoVESS = () => {
    const navigate = useNavigate();

    return (
        <div className="atribuicao-container">
            <div className="atribuicao-content">
                <h1 className="atribuicao-title">Compare a amostra com as descrições e fotos representadas a seguir e determine o que mais se assemelha para cada camada da amostra.</h1>

                <div className="card-section">
                    <h2 className="card-title">Carta dos escores de Qe-VESS</h2>
                </div>

                <div className="instruction-text">
                    <div className="instruction-text">
                        <p>
                            Se necessário, utilize a redução dos agregados e sua descrição para confirmar os escores
                            <Link to="/QualidadeEstrutural" className="link-text">
                                (clique aqui para saber como fazer a redução dos agregados)
                            </Link>.
                        </p>
                    </div>                </div>

                <div className="test-section">
                    <h3 className="test-title">Teste de redução dos agregados</h3>
                </div>

                <div className="instruction-text">
                    <p>Para diferenciar um escore 3 de um 4 faça o teste de mão <span className="link-text">(vídeo aqui)</span>, se o torrão romper o escore é 3 se não romper é 4 (Ball et al., 2017). É necessário ter atenção com a umidade do solo para proceder com o teste de mão.</p>
                </div>

                <div className="test-section">
                    <h3 className="test-title">Teste de mão</h3>
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
                        onClick={() => navigate('/DecisaoManejo')}
                    >
                        Próximo
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AtribuicaoVESS;