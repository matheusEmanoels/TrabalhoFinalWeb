import React, { useState, useRef } from 'react';
import { BsCamera } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Avaliar.css';

const Avaliar = () => {
  const [camadas, setCamadas] = useState(3);
  const [fotos, setFotos] = useState<File[]>([]);
  const [local, setLocal] = useState('');
  const [avaliador, setAvaliador] = useState('');
  const [manejo, setManejo] = useState('');
  const [observacoes, setObservacoes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const dados = {
      escore: 3.1,
      manejo: 'Amostras com escores Qe-VESS de 3-3.9 indicam um solo com qualidade estrutural razoável que pode ser melhorado...',
      camadas: [...Array(camadas)].map((_, i) => ({
        comprimento: (document.getElementById(`comp${i}`) as HTMLInputElement)?.value || '',
        nota: (document.getElementById(`nota${i}`) as HTMLInputElement)?.value || '',
      })),
      outrasInfo: (document.getElementById('outrasInfo') as HTMLTextAreaElement)?.value || '',
    };

    try {
      // Preparar os dados conforme a estrutura do request
      const assessmentData = {
        name: "Avaliação Completa",
        user_name: avaliador,
        location: local,
        managementDescription: manejo,
        otherObservations: observacoes,
        samples: [
          {
            name: "Amostra 01",
            location: local,
            otherInfo: observacoes,
            layers: [...Array(camadas)].map((_, i) => ({
              layerNumber: i + 1,
              length: parseFloat((document.getElementById(`comp${i}`) as HTMLInputElement)?.value || '0'),
              score: parseInt((document.getElementById(`nota${i}`) as HTMLInputElement)?.value || '0')
            }))
          }
        ]
      };

      console.log(assessmentData)
      
      const formData = new FormData();
      formData.append('assessment', JSON.stringify(assessmentData));
      console.log(formData)
      
      // Adicionar imagens
      fotos.forEach(file => {
        formData.append('images', file);
      });

      // Enviar para o backend
      const response = await axios.post('http://localhost:8025/api/assessments', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      navigate('/ResultadoAvaliacao', { state: { ...dados, novaAvaliacao: true } });
    } catch (error) {
      console.error('Erro ao enviar avaliação:', error);
      alert('Ocorreu um erro ao enviar a avaliação. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
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
            type="button"
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
          <input 
            type="text" 
            className="form-control input-custom" 
            value={local}
            onChange={(e) => setLocal(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Avaliador:</label>
          <input 
            type="text" 
            className="form-control input-custom" 
            value={avaliador}
            onChange={(e) => setAvaliador(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Descrição do manejo:</label>
          <textarea
            className="form-control info-box"
            rows={3}
            value={manejo}
            onChange={(e) => setManejo(e.target.value)}
            required
          />
        </div>

        {[...Array(camadas)].map((_, i) => (
          <div key={i}>
            <div className="mb-3">
              <label className="form-label">Comprimento camada {i + 1} (cm):</label>
              <input 
                type="number" 
                id={`comp${i}`} 
                className="form-control input-custom" 
                step="0.1"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Nota camada {i + 1}:</label>
              <input 
                type="number" 
                id={`nota${i}`} 
                className="form-control input-custom" 
                min="1"
                max="4"
                required
              />
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
            value={observacoes}
            onChange={(e) => setObservacoes(e.target.value)}
            placeholder={`Sugestões que contribuam para a construção de um histórico de avaliação da propriedade ou do grau de dificuldade de avaliação:\n- amostra muito úmida/seca\n- solo muito duro\n- raízes, avaliação realizada em época específica, tipo de solo...`}
          />
        </div>

        <div className="text-center">
          <button 
            type="submit" 
            className="btn btn-avaliar"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                ENVIANDO...
              </>
            ) : 'AVALIAR'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Avaliar;