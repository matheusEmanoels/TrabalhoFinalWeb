import { useNavigate } from 'react-router-dom';
import './SobreApp.css';

const SobreApp = () => {
    const navigate = useNavigate();

    return (
        <div className="onde-amostrar-container">
            <div className="onde-amostrar-content">
                <h2>Sobre o APP</h2>

                <div className="text-content">
                    <p>
                        Versão 3.0<br />
                        Esta aplicação tem por objetivo a utilização do modelo de Avaliação Visual da Estrutura do Solo (Guimarães et al., 2011).
                    </p>

                    <p>
                        <strong>Coordenadora do projeto</strong><br />
                        Profa. Dra. Rachel Muylaert Locks Guimarães – Universidade Tecnológica Federal do Paraná
                    </p>

                    <p>
                        <strong>Desenvolvedores</strong><br />
                        Prof. Vinicius Pegorini – Universidade Tecnológica Federal do Paraná
                    </p>

                    <p>
                        <strong>Colaboradores</strong><br />
                        Vacilania Pacheco – Universidade Tecnológica Federal do Paraná<br />
                        João Victor Costa Mazzochin - Universidade Tecnológica Federal do Paraná<br />
                        Tatiany Keiko Mori – Universidade Tecnológica Federal do Paraná<br />
                        Cassio A. Tormena - Universidade Estadual de Maringá<br />
                        Bruce C. Ball - Scotland's Rural College<br />
                        Tom Batey - University of Aberdeen<br />
                        Lars J. Monkholm - Aarhus University<br />
                        Renan Augusto Lack Barboza – Universidade Tecnológica Federal do Paraná
                    </p>

                    <p>
                        <strong>Suporte financeiro</strong><br />
                        Projeto financiado pelo edital Universal CNPq - Processo 428579/2016-7.<br />
                        Fundação Araucária.<br />
                        Coordenação de Aperfeiçoamento de Pessoal de Nível Superior.
                    </p>

                    <p>
                        <strong>Fale conosco</strong><br />
                        Você tem dúvidas sobre o VESS?<br />
                        Contribua com melhorias para a metodologia ou deixe sua sugestão no e-mail abaixo:<br />
                        rachelguimaraes@utfpr.edu.br
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

                </div>
            </div>
        </div>
    );
};

export default SobreApp;