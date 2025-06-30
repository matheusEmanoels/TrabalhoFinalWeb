import { useEffect, useState } from 'react';
import {Avaliacao, AvaliacaoDetalhes} from "../../interface/AtividadeInterface"
import './Avaliacoes.css';



const Avaliacoes = () => {
  const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>([]);
  const [avaliacaoSelecionada, setAvaliacaoSelecionada] = useState<AvaliacaoDetalhes | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [loadingDetalhes, setLoadingDetalhes] = useState<boolean>(false);

  useEffect(() => {
    const fetchAvaliacoes = async () => {
      try {
        const response = await fetch('http://localhost:8025/api/assessments');
        if (!response.ok) {
          throw new Error('Erro ao carregar avaliações');
        }
        const data = await response.json();
        setAvaliacoes(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ocorreu um erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    fetchAvaliacoes();
  }, []);

  const visualizar = async (id: number) => {
    setLoadingDetalhes(true);
    try {
      const response = await fetch(`http://localhost:8025/api/assessments/${id}`);
      if (!response.ok) {
        throw new Error('Erro ao carregar detalhes da avaliação');
      }
      const data = await response.json();
      setAvaliacaoSelecionada(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocorreu um erro ao carregar detalhes');
    } finally {
      setLoadingDetalhes(false);
    }
  };

  const fecharVisualizacao = () => {
    setAvaliacaoSelecionada(null);
  };

  if (loading) {
    return <div className="container text-center mt-4">Carregando avaliações...</div>;
  }

  if (error) {
    return <div className="container text-center mt-4 text-danger">{error}</div>;
  }

  return (
    <div className="container avaliacoes-container">
      <h3 className="text-center mb-4">Minhas Avaliações</h3>

      {avaliacoes.length === 0 ? (
        <p className="text-center">Nenhuma avaliação encontrada.</p>
      ) : (
        <ul className="lista-avaliacoes">
          {avaliacoes.map((item) => (
            <li key={item.id} className="avaliacao-item">
              <div>
                <strong>{item.name}</strong><br />
                Local: {item.location}<br />
                Escore médio: {item.averageScore} - Camadas: {item.layerCount}
              </div>
              <button 
                className="btn-visualizar" 
                onClick={() => visualizar(item.id)}
                disabled={loadingDetalhes}
              >
                {loadingDetalhes && avaliacaoSelecionada?.id === item.id ? 'Carregando...' : 'Visualizar'}
              </button>
            </li>
          ))}
        </ul>
      )}

      {avaliacaoSelecionada && (
        <div className="box resultado-box mt-4">
          <h5 className="text-center">Detalhes da Avaliação</h5>

          <div className="mt-3">
            <p className="fw-bold">Nome:</p>
            <p>{avaliacaoSelecionada.name}</p>
          </div>

          <div className="mt-3">
            <p className="fw-bold">Local:</p>
            <p>{avaliacaoSelecionada.location}</p>
          </div>

          <div className="mt-3">
            <p className="fw-bold">Escore médio Qe-VESS:</p>
            <div className="escore-box">{avaliacaoSelecionada.averageScore}</div>
            <a
              href="https://doi.org/10.1016/j.soilbio.2006.01.013"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ball et al. (2017)
            </a>
          </div>

          <div className="box mt-3">
            <p className="fw-bold">Decisão de manejo:</p>
            <p>{avaliacaoSelecionada.managementDescription}</p>
          </div>

          <div className="box mt-3">
            <p className="fw-bold">Amostras:</p>
            {avaliacaoSelecionada.samples.map((sample, sIndex) => (
              <div key={sample.id} className="mt-2">
                <p><strong>Amostra {sIndex + 1}:</strong> {sample.name}</p>
                <p>Local: {sample.location}</p>
                {sample.otherInfo && <p>Outras informações: {sample.otherInfo}</p>}
                
                <p className="fw-bold mt-2">Camadas:</p>
                <ul>
                  {sample.layers.map((layer) => (
                    <li key={layer.id}>
                      Camada {layer.layerNumber}: Comprimento - {layer.length}cm, Nota - {layer.score}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {avaliacaoSelecionada.images.length > 0 && (
            <div className="box mt-3">
              <p className="fw-bold">Imagens:</p>
              <div className="d-flex flex-wrap">
                {avaliacaoSelecionada.images.map((image) => (
                  <div key={image.id} className="me-3 mb-3">
                    <img 
                      src={`data:${image.contentType};base64,${image.data}`} 
                      alt={image.fileName}
                      style={{ maxWidth: '200px', maxHeight: '200px' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="box mt-3">
            <p className="fw-bold">Outras observações:</p>
            <p>{avaliacaoSelecionada.otherObservations || 'Nenhuma observação adicional'}</p>
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