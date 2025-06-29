import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './ResultadoAvaliacao.css';

const ResultadoAvaliacao = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dados = location.state;
  useEffect(() => {
    if (dados?.novaAvaliacao) {
      const avaliacoesExistentes = JSON.parse(localStorage.getItem('avaliacoes') || '[]');

      const avaliacaoJaExiste = avaliacoesExistentes.some((av: any) =>
        JSON.stringify(av.camadas) === JSON.stringify(dados.camadas) &&
        av.outrasInfo === dados.outrasInfo
      );

      if (!avaliacaoJaExiste) {
        localStorage.setItem(
          'avaliacoes',
          JSON.stringify([...avaliacoesExistentes, { ...dados, novaAvaliacao: false }])
        );
      }
    }
  }, [dados]);

  if (!dados) return <p>Dados da avaliação não encontrados.</p>;

  return (
    <div className="container avaliacao-container text-center">
      <h4>Avaliações</h4>
      <p className="fw-bold mt-2">Escore Qe-VESS da amostra:</p>
      <div className="escore-box">{dados.escore}</div>
      <a href="https://doi.org/10.1016/j.soilbio.2006.01.013" target="_blank" rel="noopener noreferrer">Ball et al. (2017)</a>

      <div className="box mt-3">
        <p className="fw-bold">Decisão de manejo:</p>
        <p>{dados.manejo}</p>
      </div>

      <div className="box mt-3">
        <p className="fw-bold">Resumo da avaliação:</p>
        {dados.camadas.map((c: any, index: number) => (
          <p key={index}>
            Comprimento camada {index + 1}: {c.comprimento} cm; nota: {c.nota}
          </p>
        ))}
      </div>

      <div className="box mt-3 mb-3">
        <p className="fw-bold">Outras informações importantes:</p>
        <p>{dados.outrasInfo}</p>
      </div>
      <div className="d-flex justify-content-center gap-3">
        <button className="btn-vess" onClick={() => navigate('/')}>FINALIZAR</button>
        <button className="btn-vess" onClick={() => navigate('/Avaliar')}>PRÓXIMA AMOSTRA</button>
      </div>
    </div>
  );
};

export default ResultadoAvaliacao;