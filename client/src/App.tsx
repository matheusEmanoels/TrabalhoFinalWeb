import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuPage from './pages/MenuPage/MenuPage';
import Header from './components/Header/Header';
import ConfigPage from './pages/ConfigPage/ConfigPage';
import Terms from './pages/Terms/Terms';
import Avaliacoes from './pages/Avaliacoes/Avaliacoes';
import Avaliar from './pages/Avaliar/Avaliar';
import ResultadoAvaliacao from './pages/ResultadoAvaliacao/ResultadoAvaliacao';
import Equipamentos from './pages/Equipamentos/Equipamentos';
import OndeAmostrar from './pages/OndeAmostrar/OndeAmostrar';
import QuandoAmostrar from './pages/QuandoAmostrar/QuandoAmostrar';
import EstracaoAmostra from './pages/EstracaoAmostra/EstracaoAmostra';
import ExposicaoAgregados from './pages/ExposicaoAgregados/ExposicaoAgregados';
import AtribuicaoVESS from "./pages/AtribuicaoVESS/AtribuicaoVESS.tsx";
import DecisaoManejo from "./pages/DecisaoManejo/DecisaoManejo.tsx";
import InformacoesComplementares from "./pages/InformacoesComplementares/InformacoesComplementares.tsx";
import VESS from "./pages/VESS/VESS.tsx";
import SobreApp from "./pages/SobreApp/SobreApp.tsx";
import QualidadeEstrutural from "./pages/QualidadeEstrutural/QualidadeEstrutural.tsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/Equipamentos" element={<Equipamentos/>} />
        <Route path="/Configuracoes" element={<ConfigPage/>} />
        <Route path="/termos" element={<Terms />} />
        <Route path="/header" element={<Header />} />
        <Route path="/Avaliacoes" element={<Avaliacoes />} />
        <Route path="/Avaliar" element={<Avaliar />} />
        <Route path="/ResultadoAvaliacao" element={<ResultadoAvaliacao />} />
        <Route path="/OndeAmostrar" element={<OndeAmostrar />} />
        <Route path="/QuandoAmostrar" element={<QuandoAmostrar />} />
        <Route path="/EstracaoAmostra" element={<EstracaoAmostra />} />
        <Route path="/ExposicaoAgregados" element={<ExposicaoAgregados />} />
        <Route path="/AtribuicaoVESS" element={<AtribuicaoVESS />} />
        <Route path="/DecisaoManejo" element={<DecisaoManejo />} />
        <Route path="/InformacoesComplementares" element={<InformacoesComplementares />} />
        <Route path="/VESS" element={<VESS />} />
        <Route path="/SobreApp" element={<SobreApp />} />
        <Route path="/QualidadeEstrutural" element={<QualidadeEstrutural />} />







\
      </Routes>
    </Router>
  );
}
export default App;
