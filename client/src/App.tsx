import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuPage from './pages/MenuPage/MenuPage';
import Header from './components/Header/Header';
import ConfigPage from './pages/ConfigPage/ConfigPage';
import Terms from './pages/Terms/Terms';
import Avaliacoes from './pages/Avaliacoes/Avaliacoes';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/Equipamentos" element={<div>Equipamentos</div>} />
        <Route path="/Configuracoes" element={<ConfigPage/>} />
        <Route path="/termos" element={<Terms />} />
        <Route path="/header" element={<Header />} />
        <Route path="/Avaliacoes" element={<Avaliacoes />} />


      </Routes>
    </Router>
  );
}

export default App;
