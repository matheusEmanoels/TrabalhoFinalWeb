import { useNavigate } from 'react-router-dom';
import './InformacoesComplementares.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import complementaresGif1 from '../../assets/complementaresIMG/IC-01.JPG';
import complementaresGif2 from '../../assets/complementaresIMG/IC-02.JPG';
import complementaresGif3 from '../../assets/complementaresIMG/IC-03.JPG';
import complementaresGif4 from '../../assets/complementaresIMG/IC-04.JPG';
import complementaresGif5 from '../../assets/complementaresIMG/IC-05.jpg';
import complementaresGif6 from '../../assets/complementaresIMG/IC-06.JPG';
import complementaresGif7 from '../../assets/complementaresIMG/IC-07.JPG';
import complementaresGif8 from '../../assets/complementaresIMG/IC-08.JPG';
import complementaresGif9 from '../../assets/complementaresIMG/IC-09.JPG';
import complementaresGif10 from '../../assets/complementaresIMG/IC-10.JPG';
import complementaresGif11 from '../../assets/complementaresIMG/IC-11.JPG';

const InformacoesComplementares = () => {
    const navigate = useNavigate();

    const renderImageSection = (src, score = null) => (
        <>
            <div className="divider my-4"></div>

            <h1 className="info-title text-center mb-4">
                Amostras solo argiloso com escore Qe-VESS:
                {score && <span className="red-circle ms-2">{score}</span>}
            </h1>

            <div className="gif-container d-flex justify-content-center">
                <img
                    src={src}
                    alt="Demonstração de equipamentos"
                    className="complementares-img img-fluid rounded"
                />
            </div>
        </>
    );

    return (
        <div className="container-fluid py-4 info-container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8">
                    <div className="info-content p-3 p-md-4 p-lg-5">
                        <h1 className="info-title text-center mb-4">Informações complementares</h1>

                        <div className="info-text mb-4">
                            <p className="mb-3">
                                A nota da qualidade estrutural do solo pode ser atribuída entre categorias se a camada apresentar características das duas.
                            </p>

                            <p className="mb-3">
                                Por exemplo, um escore VESS de 1,5 pode ser atribuído se a camada apresentar uma proporção de ≈50% com qualidade estrutural 1, mas também apresentar agregados com qualidade estrutural 2.
                            </p>

                            <p className="mb-3">
                                As figuras abaixo são exemplos de solos com diferentes escores Qe-VESS para auxiliar o usuário na atribuição da nota da qualidade estrutural do solo.
                            </p>

                            <p className="observation fst-italic mt-4">
                                *Ressaltamos que a atribuição da nota não foi realizada somente de forma visual mas tátil também.
                            </p>
                        </div>

                        {renderImageSection(complementaresGif1)}
                        {renderImageSection(complementaresGif2)}
                        {renderImageSection(complementaresGif3)}
                        {renderImageSection(complementaresGif4, "4,5")}
                        {renderImageSection(complementaresGif5, "4,5")}
                        {renderImageSection(complementaresGif6, "4,5")}
                        {renderImageSection(complementaresGif7, "4,5")}
                        {renderImageSection(complementaresGif8, "5.0")}
                        {renderImageSection(complementaresGif9, "5.0")}
                        {renderImageSection(complementaresGif10, "5.0")}
                        {renderImageSection(complementaresGif11, "5.0")}

                        <div className="divider my-4"></div>

                        <div className="navigation-buttons d-flex justify-content-between mt-4">
                            <button
                                className="nav-button prev-button btn btn-primary"
                                onClick={() => navigate('/')}
                            >
                                Voltar
                            </button>
                            <button
                                className="nav-button next-button btn btn-primary"
                                onClick={() => navigate('/VESS')}
                            >
                                Próximo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InformacoesComplementares;