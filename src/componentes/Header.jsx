
import { Link } from "react-router";
import "./header.css"
import logo from "../logo.png";
function Header() {
    return (
      <header>
        <img src={logo} className="logo" alt="logo" />
        <h2>Gerenciador de Eventos SENAI</h2>
        <nav>
          <Link to="/">Início</Link> | <Link to="/sobre">Sobre</Link> <Link to="/cadastro"> Cadastrar Evento</Link>|{" "}
        
        </nav>
      </header>
    );
  }
  export default Header;
  