import React, { useState, useRef } from 'react';
import { BsCamera } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Avaliar.css';

const Avaliar = () => {
  const [camadas, setCamadas] = useState(3);
  const [fotos, setFotos] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files);
      setFotos([...fotos, ...filesArray]);
    }
  };

  const removerFoto = (index: number) => {
    const novasFotos = [...fotos];
    novasFotos.splice(index, 1);
    setFotos(novasFotos);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const dados = {
      escore: 3.1,
      manejo: 'Amostras com escores Qe-VESS de 3-3.9 indicam um solo com qualidade estrutural razoável que pode ser melhorado...',
      camadas: [...Array(camadas)].map((_, i) => ({
        comprimento: (document.getElementById(`comp${i}`) as HTMLInputElement)?.value || '',
        nota: (document.getElementById(`nota${i}`) as HTMLInputElement)?.value || '',
      })),
      outrasInfo: (document.getElementById('outrasInfo') as HTMLTextAreaElement)?.value || '',
    };

    navigate('/ResultadoAvaliacao', { state: { ...dados, novaAvaliacao: true } });
  };

  return (
    <div className="container avaliacao-container">
      <div className="text-center mb-3">
        <div className="escore-vess-container">
          <button
            type="button"
            className="interrogacao"
            onClick={() => navigate('/EscoresVESS')}
            title="Ver escores VESS"
          >
            ?
          </button>
          <span className="ms-1">Escores VESS</span>
        </div>

        <div className="amostra-container">
          <span className="amostra-texto">Amostra Nº 01</span>
          <button className="btn btn-link editar-link">Editar</button>
        </div>
      </div>

      <div className="text-center mb-3">
        <p className="fw-bold pergunta">Quantas camadas de solo deseja avaliar?</p>
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            className={`btn camada-btn ${camadas === n ? 'selecionado' : ''}`}
            onClick={() => setCamadas(n)}
          >
            {n}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Local/propriedade (<a href="#">GPS</a>):</label>
          <input type="text" className="form-control input-custom" />
        </div>
        <div className="mb-3">
          <label className="form-label">Avaliador:</label>
          <input type="text" className="form-control input-custom" />
        </div>

        {[...Array(camadas)].map((_, i) => (
          <div key={i}>
            <div className="mb-3">
              <label className="form-label">Comprimento camada {i + 1}:</label>
              <input type="text" id={`comp${i}`} className="form-control input-custom" />
            </div>
            <div className="mb-3">
              <label className="form-label">Nota camada {i + 1}:</label>
              <input type="text" id={`nota${i}`} className="form-control input-custom" />
            </div>
          </div>
        ))}

        <div className="mb-3">
          <div className="camera-container">
            <div className="camera-icon-circle" onClick={handleCameraClick}>
              <BsCamera className="camera-icon" />
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                multiple
                style={{ display: 'none' }}
              />
            </div>
          </div>

          {fotos.length > 0 && (
            <div className="fotos-selecionadas mb-3">
              {fotos.map((foto, index) => (
                <div key={index} className="miniatura-foto">
                  <div className="miniatura-container">
                    <img
                      src={URL.createObjectURL(foto)}
                      alt={`Foto ${index + 1}`}
                      className="img-thumbnail"
                    />
                    <button
                      type="button"
                      className="btn-remover-foto"
                      onClick={() => removerFoto(index)}
                    >
                      ×
                    </button>
                  </div>
                  <span>{foto.name.length > 15 ? `${foto.name.substring(0, 12)}...` : foto.name}</span>
                </div>
              ))}
            </div>
          )}

          <label className="form-label">
            Outras informações importantes: <span className="interrogacao">?</span>
          </label>
          <textarea
            className="form-control info-box"
            rows={5}
            id="outrasInfo"
            placeholder={`Sugestões que contribuam para a construção de um histórico de avaliação da propriedade ou do grau de dificuldade de avaliação:\n- amostra muito úmida/seca\n- solo muito duro\n- raízes, avaliação realizada em época específica, tipo de solo...`}
          ></textarea>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-avaliar">
            AVALIAR
          </button>
        </div>
      </form>
    </div>
  );
};

export default Avaliar;
