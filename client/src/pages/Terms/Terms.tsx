import React, { useState } from 'react';
import './Terms.css';
import { useNavigate } from 'react-router-dom';

const Terms = () => {
  const [aceitou, setAceitou] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="container py-5">

      <div className="terms-content">
        <p>
          O presente termo e condições de uso visa regular a utilização dos USUÁRIOS ao Aplicativo VESS.
          Ao acessar o Aplicativo VESS, o USUÁRIO expressamente aceita e concorda com as disposições destes Termos e Condições de Uso.
        </p>

        <h5>DO OBJETIVO</h5>
        <p>
          Este aplicativo é uma ferramenta gratuita de uso, desenvolvido para fornecer aos agricultores, pesquisadores e profissionais da área agrícola
          uma avaliação prática, acessível e de baixo custo para avaliar a qualidade da estrutura do solo.
        </p>
        <p>
          O aplicativo permite que os usuários concluam uma autoavaliação sobre suas práticas agrícolas a partir da qualidade estrutural do solo obtida,
          sugerindo melhorias nas práticas de manejo e contribuindo para melhorar a sustentabilidade em suas ações de manejo do solo.
        </p>

        <h5>COMUNICAÇÕES</h5>
        <p>
          O aplicativo VESS disponibiliza o endereço de e-mail <strong>rachelguimaraes@utfpr.edu.br</strong> como o Canal de Atendimento para receber
          as comunicações do USUÁRIO.
        </p>

        <h5>COMPARTILHAMENTO DE DADOS COM OS DESENVOLVEDORES</h5>
        <p>
          Os desenvolvedores do aplicativo têm como princípio da atuação o respeito ao USUÁRIO, agindo sempre em conformidade com as disposições do
          Marco Civil da Internet (Lei Federal n. 12965/14) e com a Lei Geral de Proteção de Dados Pessoais (Lei 13.709/18).
        </p>
        <p>
          Ao compartilhar os resultados das avaliações com os desenvolvedores, você possibilita que mais pesquisas e melhorias no aplicativo sejam realizadas.
          Dados pessoais como nome, e-mail e coordenadas de localização <em>não serão divulgados</em>.
        </p>
        <p>
          O aplicativo pode ser acessado por qualquer dispositivo móvel conectado ou não à Internet, independentemente de localização geográfica.
        </p>
        <p>
          Em vista das diferenças que podem existir entre as legislações locais e nacionais, ao acessar o aplicativo, o USUÁRIO concorda que a legislação aplicável
          para fins destes Termos e Condições de Uso será aquela vigente na República Federativa do Brasil.
        </p>

        <div className="form-check text-center mt-4">
          <input
            className="form-check-input"
            type="checkbox"
            id="aceiteCheckbox"
            checked={aceitou}
            onChange={() => setAceitou(!aceitou)}
          />
          <label className="form-check-label ms-2" htmlFor="aceiteCheckbox">
            Li e concordo com os termos e condições de uso do aplicativo.
          </label>
        </div>

        {aceitou && (
          <div className="d-flex justify-content-center mt-4">
            <button
              className="btn btn-termos"
              onClick={() => navigate('/Configuracoes')}
            >
              Voltar para Configurações
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Terms;