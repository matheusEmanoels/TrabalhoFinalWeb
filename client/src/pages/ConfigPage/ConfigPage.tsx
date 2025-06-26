import React from 'react';
import './ConfigPage.css';
import { useNavigate } from 'react-router-dom';

const ConfigPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="w-100" style={{ maxWidth: '700px' }}>
        <form>
          <div className="mb-4">
            <label className="form-label">Nome</label>
            <input type="text" className="form-control input-lg" placeholder="Digite seu nome" />
          </div>

          <div className="mb-4">
            <label className="form-label">E-mail</label>
            <input type="email" className="form-control input-lg" placeholder="exemplo@dominio.com" />
          </div>

          <div className="mb-4">
            <label className="form-label">País</label>
            <input type="text" className="form-control input-lg" placeholder="Digite seu país" />
          </div>

          <div className="mb-4">
            <label className="form-label">Endereço</label>
            <input type="text" className="form-control input-lg" placeholder="Digite seu endereço" />
          </div>

          <div className="mb-5">
            <label className="form-label">Idioma</label>
            <select className="form-select input-lg">
              <option value="pt">Português</option>
              <option value="en">Inglês</option>
              <option value="es">Espanhol</option>
            </select>
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