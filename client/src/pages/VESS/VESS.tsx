import { useNavigate } from 'react-router-dom';
import './VESS.css';

const VESS = () => {
    const navigate = useNavigate();

    return (
        <div className="onde-amostrar-container">
            <div className="onde-amostrar-content">
                <h2>VESS</h2>

                <div className="text-content">
                    <p>
                        A Avaliação Visual da Estrutura do Solo (VESS) é um teste de pá em que se avalia a qualidade estrutural (Qe) do solo de forma visual e tátil. Os critérios avaliados para a atribuição de uma nota são presença de poros, tamanho, resistência e forma de agregados, presença ou não de raízes, entre outras. A nota pode variar entre Qe1 (ótimo) a Qe5 (ruim). A partir dessa nota, pode-se realizar inferências e tomar decisões em relação ao manejo do solo (Guimarães et al., 2011; Ball et al., 2017).</p>

                    <p>O VESS foi desenvolvido a partir da metodologia de Peerlkamp (1959) e apresentado em sua primeira versão por Ball et al. (2007). Ajustes foram realizados por Guimarães et al. (2011), sendo esta a versão utilizada para este aplicativo. O VESS é amplamente difundido no mundo, sendo testado para uma grande variedade de solos (Franco et al., 2019).</p>

                    <p>
                        Mais informações podem ser encontradas em:
                        <a href="https://www.sruc.ac.uk/vess" target="_blank" rel="noopener noreferrer" className="text-link">
                            www.sruc.ac.uk/vess
                        </a> (Inglês) ou
                        <a  href=" http://paginapessoal.utfpr.edu.br/rachelguimaraes/vess" target="_blank" rel="noopener noreferrer" className="text-link">
                            paginapessoal.utfpr.edu.br/rachelguimaraes/vess
                        </a> (Português).
                    </p>                </div>

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

export default VESS;