import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './ResultadoAvaliacao.css';

const ResultadoAvaliacao = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dados = location.state;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  const handleFinalizar = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      if (!dados?.id_avaliacao) {
        throw new Error('ID da avaliação não encontrado');
      }

      const requestBody = {
        managementDecision: dados.manejo,
        additionalInfo: dados.outrasInfo,
      };

      console.log(dados.id_avaliacao)

      const response = await fetch(`http://localhost:8025/api/assessments/${dados.id_avaliacao}/finalize`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || `Erro ao finalizar: ${response.statusText}`);
      }

      const responseData = await response.json();
      console.log('Avaliação finalizada com sucesso:', responseData);
      
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocorreu um erro ao finalizar');
      console.error('Erro ao finalizar avaliação:', err);
    } finally {
      setIsLoading(false);
    }
  };

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
      
      {error && <div className="alert alert-danger">{error}</div>}
      
      <div className="d-flex justify-content-center gap-3">
        <button 
          className="btn-vess" 
          onClick={handleFinalizar}
          disabled={isLoading}
        >
          {isLoading ? 'FINALIZANDO...' : 'FINALIZAR'}
        </button>
        <button 
          className="btn-vess" 
          onClick={() => navigate('/Avaliar')}
          disabled={isLoading}
        >
          PRÓXIMA AMOSTRA
        </button>
      </div>
    </div>
  );
};

export default ResultadoAvaliacao;