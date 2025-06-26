import React from 'react';
import './Avaliacoes.css';
import { useNavigate } from 'react-router-dom';

const Avaliacoes = () => {
    const navigate = useNavigate();

  return (
    <div className="container py-5">

      <form className="avaliacoes-form mx-auto">
        <div className="mb-4">
          <label className="form-label">Local / Propriedade (GPS)</label>
          <input type="text" className="form-control input-lg" placeholder="Coordenadas GPS" />
        </div>

        <div className="mb-4">
          <label className="form-label">Avaliador</label>
          <input type="text" className="form-control input-lg" placeholder="Nome do avaliador" />
        </div>

        <div className="mb-4">
          <label className="form-label">Número de Camadas a Avaliar</label>
          <select className="form-select input-lg">
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>

        {[1, 2, 3].map((num) => (
          <div className="row mb-3" key={num}>
            <div className="col-md-6">
              <label className="form-label">Comprimento Camada {num}</label>
              <input type="text" className="form-control input-lg" placeholder="cm" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Score Camada {num}</label>
              <input type="number" className="form-control input-lg" placeholder="0 a 5" />
            </div>
          </div>
        ))}

        <div className="mb-4">
          <label className="form-label">Outras informações importantes</label>
          <textarea
            className="form-control input-lg"
            rows={5}
            placeholder={`Ex: Amostra muito úmida, raízes achatadas, tipo de solo, mês/ano da coleta...`}
          />
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">
          <button
                      type="button"
                      className="btn btn-avaliar"
                      onClick={() => navigate('/resultado-avaliacao')}

                    >
                      Avaliar
                    </button>
          <button
            type="button"
            className="btn btn-voltar"
            onClick={() => navigate('/')}
          >
            Voltar
          </button>
        </div>

      </form>
    </div>
  );
};

export default Avaliacoes;