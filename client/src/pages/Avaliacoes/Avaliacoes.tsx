import { useEffect, useState } from 'react';
import './Avaliacoes.css';

const Avaliacoes = () => {
  const [avaliacoes, setAvaliacoes] = useState<any[]>([]);
  const [avaliacaoSelecionada, setAvaliacaoSelecionada] = useState<any | null>(null);

  useEffect(() => {
    const dadosSalvos = localStorage.getItem('avaliacoes');
    if (dadosSalvos) {
      setAvaliacoes(JSON.parse(dadosSalvos));
    }
  }, []);

  const visualizar = (dados: any) => {
    setAvaliacaoSelecionada(dados);
  };

  const fecharVisualizacao = () => {
    setAvaliacaoSelecionada(null);
  };

  return (
    <div className="container avaliacoes-container">
      <h3 className="text-center mb-4">Minhas Avaliações</h3>

      {avaliacoes.length === 0 ? (
        <p className="text-center">Nenhuma avaliação realizada ainda.</p>
      ) : (
        <ul className="lista-avaliacoes">
          {avaliacoes.map((item, index) => (
            <li key={index} className="avaliacao-item">
              <div>
                <strong>Amostra {index + 1}</strong><br />
                Escore: {item.escore} - Camadas: {item.camadas.length}
              </div>
              <button className="btn-visualizar" onClick={() => visualizar(item)}>
                Visualizar
              </button>
            </li>
          ))}
        </ul>
      )}

      {avaliacaoSelecionada && (
        <div className="box resultado-box mt-4">
          <h5 className="text-center">Resultado da Avaliação</h5>

          <p className="fw-bold mt-3">Escore Qe-VESS da amostra:</p>
          <div className="escore-box">{avaliacaoSelecionada.escore}</div>
          <a
            href="https://doi.org/10.1016/j.soilbio.2006.01.013"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ball et al. (2017)
          </a>

          <div className="box mt-3">
            <p className="fw-bold">Decisão de manejo:</p>
            <p>{avaliacaoSelecionada.manejo}</p>
          </div>

          <div className="box mt-3">
            <p className="fw-bold">Resumo da avaliação:</p>
            {avaliacaoSelecionada.camadas.map((c: any, index: number) => (
              <p key={index}>
                Comprimento camada {index + 1}: {c.comprimento} cm; nota: {c.nota}
              </p>
            ))}
          </div>

          <div className="box mt-3">
            <p className="fw-bold">Outras informações importantes:</p>
            <p>{avaliacaoSelecionada.outrasInfo}</p>
          </div>

          <div className="text-center mt-3">
            <button className="btn-fechar" onClick={fecharVisualizacao}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Avaliacoes;
