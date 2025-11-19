import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import "./styles.css";
import Evento from "./componentes/Evento";
import Home from "./paginas/Home"
import CadastroEvento  from "./paginas/CadastroEventos";


function App() {
  return (
 
    <Router>
      <div className="app">
    
        {/* Cabeçalho do site */}
        <Header />
        
          {/* Menu de navegação */}
          <nav>
            
         </nav>

               {/* Rotas do site */}
        <main className="conteudo-principal">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/evento" element={<Evento />} />
          <Route path="/cadastro" element={<CadastroEvento />} />
                 
         </Routes>
        </main>

        {/* Rodapé do site */}
        <Footer />
      </div>
    </Router>
  );
}
export default App;
