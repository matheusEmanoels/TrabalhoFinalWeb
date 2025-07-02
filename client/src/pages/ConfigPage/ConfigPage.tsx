import React, { useEffect, useState } from 'react';
import './ConfigPage.css';
import { useNavigate } from 'react-router-dom';

interface UserConfig {
  name: string;
  email: string;
  country: string;
  address: string;
  language: string;
}

const ConfigPage: React.FC = () => {
  const navigate = useNavigate();
  const [config, setConfig] = useState<UserConfig>({
    name: '',
    email: '',
    country: '',
    address: '',
    language: 'pt'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const savedConfig = localStorage.getItem('userConfig');
    if (savedConfig) {
      setConfig(JSON.parse(savedConfig));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setConfig(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Salva diretamente no localStorage
      localStorage.setItem('userConfig', JSON.stringify(config));
      setSuccess(true);
      setError(null);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError('Erro ao salvar configuração');
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <div className="container vh-100 d-flex align-items-center justify-content-center">
        <div className="w-100" style={{ maxWidth: '700px' }}>
          <form onSubmit={handleSubmit}>
            {error && <div className="alert alert-danger mb-4">{error}</div>}
            {success && <div className="alert alert-success mb-4">Configuração salva com sucesso!</div>}

            {/* Campos do formulário (mantidos iguais) */}
            <div className="mb-4">
              <label className="form-label">Nome</label>
              <input
                  type="text"
                  className="form-control input-lg"
                  name="name"
                  value={config.name}
                  onChange={handleChange}
                  required
              />
            </div>

            <div className="mb-4">
              <label className="form-label">E-mail</label>
              <input
                  type="email"
                  className="form-control input-lg"
                  name="email"
                  value={config.email}
                  onChange={handleChange}
                  required
              />
            </div>

            <div className="mb-4">
              <label className="form-label">País</label>
              <input
                  type="text"
                  className="form-control input-lg"
                  name="country"
                  value={config.country}
                  onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Endereço</label>
              <input
                  type="text"
                  className="form-control input-lg"
                  name="address"
                  value={config.address}
                  onChange={handleChange}
              />
            </div>

            <div className="mb-5">
              <label className="form-label">Idioma</label>
              <select
                  className="form-select input-lg"
                  name="language"
                  value={config.language}
                  onChange={handleChange}
              >
                <option value="pt">Português</option>
                <option value="en">Inglês</option>
                <option value="es">Espanhol</option>
              </select>
            </div>

            <div className="text-center mb-4">
              <button
                  type="submit"
                  className="btn btn-termos"
                  disabled={isLoading}
              >
                {isLoading ? 'Salvando...' : 'Salvar'}
              </button>
            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-center gap-5">
              <button
                  type="button"
                  className="btn btn-termos"
                  onClick={() => navigate('/termos')}
              >
                Termos e Condições
              </button>
              <button
                  type="button"
                  className="btn btn-termos"
                  onClick={() => navigate('/')}
              >
                Voltar
              </button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default ConfigPage;