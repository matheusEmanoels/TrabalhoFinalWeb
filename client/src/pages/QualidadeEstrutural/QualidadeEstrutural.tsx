import { useNavigate } from 'react-router-dom';
import './QualidadeEstrutural.css';
import estruturaIMG1 from '../../assets/estruturalIMG/VESS 1-1.png';
import estruturaIMG2 from '../../assets/estruturalIMG/VESS 1-2.png';
import estruturaIMG3 from '../../assets/estruturalIMG/VESS 1-3.png';
import estruturaIMG4 from '../../assets/estruturalIMG/VESS 1-4.png';
import estruturaIMG5 from '../../assets/estruturalIMG/Qe-VESS 1 argiloso.JPG';
import estruturaIMG6 from '../../assets/estruturalIMG/Qe-VESS 1 argiloso (2).JPG';
import estruturaIMG7 from '../../assets/estruturalIMG/Qe-VESS 1 arenoso.JPG';
import estruturaIMG8 from '../../assets/estruturalIMG/VESS 2-1.png';
import estruturaIMG9 from '../../assets/estruturalIMG/VESS 2-2.png';
import estruturaIMG10 from '../../assets/estruturalIMG/VESS 2-3.png';
import estruturaIMG11 from '../../assets/estruturalIMG/VESS 2-4.png';
import estruturaIMG12 from '../../assets/estruturalIMG/Qe-VESS 2 arenoso.JPG';
import estruturaIMG13 from '../../assets/estruturalIMG/VESS 3-1.png';
import estruturaIMG14 from '../../assets/estruturalIMG/VESS 3-2.png';
import estruturaIMG15 from '../../assets/estruturalIMG/VESS 3-3.png';
import estruturaIMG16 from '../../assets/estruturalIMG/VESS 3-4.png';
import estruturaIMG17 from '../../assets/estruturalIMG/Qe-VESS 3 - argiloso.JPG';
import estruturaIMG18 from '../../assets/estruturalIMG/Qe-VESS 3 arenoso.JPG';
import estruturaIMG19 from '../../assets/estruturalIMG/VESS 4-1.png';
import estruturaIMG20 from '../../assets/estruturalIMG/VESS 4-2.png';
import estruturaIMG21 from '../../assets/estruturalIMG/VESS 4-3.png';
import estruturaIMG22 from '../../assets/estruturalIMG/VESS 4-4.png';
import estruturaIMG23 from '../../assets/estruturalIMG/Qe-VESS 4 - argiloso.JPG';
import estruturaIMG24 from '../../assets/estruturalIMG/Qe-VESS 4 arenoso.JPG';
import estruturaIMG25 from '../../assets/estruturalIMG/VESS 5-1.png';
import estruturaIMG26 from '../../assets/estruturalIMG/VESS 5-2.png';
import estruturaIMG27 from '../../assets/estruturalIMG/VESS 5-3.png';
import estruturaIMG28 from '../../assets/estruturalIMG/VESS 5-4.png';
import estruturaIMG29 from '../../assets/estruturalIMG/Qe-VESS 5 argiloso.JPG';
import estruturaIMG30 from '../../assets/estruturalIMG/Qe-VESS 5 arenoso.JPG';

const QualidadeEstrutural = () => {
    const navigate = useNavigate();

    const renderGreenContent = () => (
        <div className="equipamentos-content content-green">
            <h2>Qualidade estrutural (Qe) 1 Friável</h2>

            <div className="gif-container">
                <img src={estruturaIMG1} alt="Demonstração de equipamentos" className="equipamentos-gif" />
            </div>

            <div className="gif-container">
                <img src={estruturaIMG2} alt="Demonstração de equipamentos" className="equipamentos-gif" />
            </div>

            <div className="equipamentos-list">
                <h2>Aparência após exposição dos agregados</h2>
                <p>Agregados quebram facilmente com os dedos.</p>
                <p>Tamanho e aparência dos agregados: Maioria menor que 6 mm após a quebra.</p>
                <p>Porosidade visível e raízes: Alta porosidade e raízes por todo solo.</p>
            </div>

            <div className="divider"></div>

            <div className="gif-container">
                <img src={estruturaIMG3} alt="Demonstração de equipamentos" className="equipamentos-gif" />
            </div>

            <div className="equipamentos-list">
                <h2>Característica distintiva</h2>
                <p>Agregados pequenos.</p>
            </div>

            <div className="divider"></div>

            <div className="gif-container">
                <img src={estruturaIMG4} alt="Demonstração de equipamentos" className="equipamentos-gif" />
            </div>

            <div className="equipamentos-list">
                <h2>Aparência e descrição de agregados naturais ou fragmento reduzido de ~ 1,5 cm de diâmetro</h2>
                <p>A ação de quebrar o bloco é suficiente para revelá-los.</p>
                <p>Agregados grandes são compostos por agregados menores, presos pelas raízes.</p>
            </div>

            <div className="divider"></div>

            <div className="gif-container">
                <img src={estruturaIMG5} alt="Demonstração de equipamentos" className="equipamentos-gif" />
            </div>

            <div className="gif-container">
                <img src={estruturaIMG6} alt="Demonstração de equipamentos" className="equipamentos-gif" />
            </div>

            <div className="equipamentos-list">
                <h2>Solo Argiloso</h2>
            </div>

            <div className="gif-container">
                <img src={estruturaIMG7} alt="Demonstração de equipamentos" className="equipamentos-gif" />
            </div>

            <div className="equipamentos-list">
                <h2>Exemplos de Latossolos com escore Qe-VESS 1</h2>
            </div>
        </div>
    );

    const renderYellowContent = () => (
        <div className="equipamentos-content content-yellow">
            <h2>Qualidade estrutural (Qe) 3 Firme</h2>

            <div className="gif-container">
                <img src={estruturaIMG13} alt="Demonstração de equipamentos" className="equipamentos-gif" />
            </div>

            <div className="gif-container">
                <img src={estruturaIMG14} alt="Demonstração de equipamentos" className="equipamentos-gif" />
            </div>

            <div className="equipamentos-list">
                <h2>Aparência após exposição dos agregados</h2>
                <p>Maioria dos agregados quebram com uma mão.</p>
                <p>Tamanho e aparência dos agregados: Uma mistura de agregados porosos entre 2mm -10 cm; menos de 30% são &lt;1 cm. Alguns torrões angulares não porosos podem estar presentes.</p>
                <p>Macroporos e fissuras presentes</p>
                <p>Porosidade e raízes: ambas dentro dos agregados</p>
            </div>

            <div className="divider"></div>

            <div className="gif-container">
                <img src={estruturaIMG15} alt="Demonstração de equipamentos" className="equipamentos-gif" />
            </div>

            <div className="equipamentos-list">
                <h2>Característica distintiva</h2>
                <p>Agregados com baixa porosidade</p>
            </div>

            <div className="divider"></div>

            <div className="gif-container">
                <img src={estruturaIMG16} alt="Demonstração de equipamentos" className="equipamentos-gif" />
            </div>

            <div className="equipamentos-list">
                <h2>Aparência e descrição de agregados naturais ou fragmento reduzido de ~ 1,5 cm de diâmetro</h2>
                <p>Fragmentos de agregados são razoavelmente fáceis de serem obtidos. Apresentam poucos poros e são arredondados.</p>
                <p>Raízes geralmente crescem através dos agregados.</p>
            </div>

            <div className="divider"></div>

            <div className="equipamentos-list">
                <div className="gif-container">
                    <img src={estruturaIMG17} alt="Demonstração de equipamentos" className="equipamentos-gif" />
                </div>
                <h2>Solo Argiloso</h2>
                <div className="gif-container">
                    <img src={estruturaIMG18} alt="Demonstração de equipamentos" className="equipamentos-gif" />
                </div>
                <h2>Solo Arenoso</h2>
            </div>
        </div>
    );

    const renderRedContent = () => (
        <div className="equipamentos-content content-red">

            <h2>Qualidade estrutural (Qe) 4 Compacto</h2>

            <div className="equipamentos-list">
                <div className="gif-container">
                    <img src={estruturaIMG19} alt="Demonstração de equipamentos" className="equipamentos-gif" />
                </div>
                <div className="gif-container">
                    <img src={estruturaIMG20} alt="Demonstração de equipamentos" className="equipamentos-gif" />
                </div>
                <h2>Aparência após exposição dos agregados</h2>
                <p>Quebrar agregados com uma mão requer esforço considerável</p>
                <p>Tamanho e aparência dos agregados: Maioria &gt; 10 cm e são subangulares não porosos; possibilidade de horizontalização; menos que 30% são &lt;7 cm</p>
                <p>Porosidade visível e raízes: Poucos macroporos e fissuras; Raízes agrupadas em macroporos e ao redor dos agregados</p>
            </div>

            <div className="divider"></div>

            <div className="equipamentos-list">
                <div className="gif-container">
                    <img src={estruturaIMG21} alt="Demonstração de equipamentos" className="equipamentos-gif" />
                </div>
                <h2>Característica distintiva</h2>
                <p>Macroporos bem distintos</p>
            </div>

            <div className="divider"></div>

            <div className="equipamentos-list">
                <div className="gif-container">
                    <img src={estruturaIMG22} alt="Demonstração de equipamentos" className="equipamentos-gif" />
                </div>
                <h2>Aparência e descrição de agregados naturais ou fragmento reduzido de ~ 1,5 cm de diâmetro</h2>
                <p>Fragmentos de agregados são fáceis de serem obtidos quando o solo está úmido, em forma de cubo muito angulosos e pontudos e apresentam fissuras internamente.</p>
            </div>

            <div className="divider"></div>

            <div className="equipamentos-list">
                <h2>Exemplos de Latossolos com escore Qe-VESS 4</h2>
                <div className="gif-container">
                    <img src={estruturaIMG23} alt="Demonstração de equipamentos" className="equipamentos-gif" />
                </div>
                <h2>Solo Argiloso</h2>
                <div className="gif-container">
                    <img src={estruturaIMG24} alt="Demonstração de equipamentos" className="equipamentos-gif" />
                </div>
                <h2>Solo Arenoso</h2>
            </div>

            <div className="divider"></div>

            <h2>Qualidade estrutural (Qe) 5 Muito compacto</h2>
            <div className="gif-container">
                <img src={estruturaIMG25} alt="Demonstração de equipamentos" className="equipamentos-gif" />
            </div>

            <div className="gif-container">
                <img src={estruturaIMG26} alt="Demonstração de equipamentos" className="equipamentos-gif" />
            </div>


            <div className="equipamentos-list">
                <h2>Aparência após exposição dos agregados</h2>
                <p>Difícil quebra.</p>
                <p>Tamanho e aparência dos agregados: Maioria são maiores que &gt; 10 cm, muito poucos &lt; 7 cm, angular e não poroso.</p>
                <p>Porosidade visível e raízes: Porosidade muito baixa. Macroporos podem estar presentes. Pode conter zonas anaeróbicas. Poucas raízes e restritas a fissuras.</p>
            </div>

            <div className="divider"></div>

            <div className="equipamentos-list">
                <div className="gif-container">
                    <img src={estruturaIMG27} alt="Demonstração de equipamentos" className="equipamentos-gif" />
                </div>
                <h2>Característica distintiva</h2>
                <p>Cor azul acinzentada</p>
            </div>

            <div className="divider"></div>

            <div className="equipamentos-list">
                <div className="gif-container">
                    <img src={estruturaIMG28} alt="Demonstração de equipamentos" className="equipamentos-gif" />
                </div>
                <h2>Aparência e descrição de agregados naturais ou fragmento reduzido de ~ 1,5 cm de diâmetro</h2>
                <p>Fragmentos de agregados são fáceis de serem obtidos quando o solo está úmido, no entanto, considerável força é necessária. Geralmente não apresentam poros ou fissuras.</p>
            </div>

            <div className="divider"></div>

            <div className="equipamentos-list">
                <h2>Exemplos de Latossolos com escore Qe-VESS 5</h2>

                <div className="gif-container">
                    <img src={estruturaIMG29} alt="Demonstração de equipamentos" className="equipamentos-gif" />
                </div>
                <h2>Solo Argiloso</h2>
                <div className="gif-container">
                    <img src={estruturaIMG30} alt="Demonstração de equipamentos" className="equipamentos-gif" />
                </div>
                <h2>Solo Arenoso</h2>
            </div>
            <div className="divider"></div>
        </div>
    );

    return (
        <div className="equipamentos-container">
            {renderGreenContent()}
            <div style={{ height: '10px' }}></div>
            {renderYellowContent()}
            <div style={{ height: '10px' }}></div>
            {renderRedContent()}

            <div className="navigation-buttons">
                <button className="nav-button prev-button" onClick={() => navigate('/')}>
                    Voltar
                </button>
            </div>
        </div>
    );
};

export default QualidadeEstrutural;