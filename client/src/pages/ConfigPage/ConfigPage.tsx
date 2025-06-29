import React, { useEffect, useState } from 'react';
import './ConfigPage.css';
import { useNavigate } from 'react-router-dom';
import { configService } from '../../service/ConfigurationService';
import type { UserConfig } from '../../interface/UserConfig';


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

  // Carrega configuração existente ao montar o componente
  useEffect(() => {
    const loadConfig = async () => {
      try {
        const savedConfig = await configService.getConfig();
        setConfig(savedConfig);
      } catch (error) {
        console.error('Erro ao carregar configuração:', error);
      }
    };

    loadConfig();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setConfig(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await configService.saveConfig(config);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000); // Esconde mensagem após 3 segundos
    } catch (error) {
      setError(error.message || 'Erro ao salvar configuração');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="w-100" style={{ maxWidth: '700px' }}>
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="alert alert-danger mb-4">
              {error}
            </div>
          )}

          {success && (
            <div className="alert alert-success mb-4">
              Configuração salva com sucesso!
            </div>
          )}

          <div className="mb-4">
            <label className="form-label">Nome</label>
            <input
              type="text"
              className="form-control input-lg"
              placeholder="Digite seu nome"
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
              placeholder="exemplo@dominio.com"
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
              placeholder="Digite seu país"
              name="country"
              value={config.country}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Endereço</label>
            <input
              type="text"
              className="form-control input-lg"
              placeholder="Digite seu endereço"
              name="address"
              value={config.address}
              onChange={handleChange}
              required
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
              Termos e Condições de Uso
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