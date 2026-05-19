import "./Header.css";
import logo from "../icons/Logo_Montreal.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo de Montréal" className="logo" />
        
      </div>

      <div className="header-right">
        <img src="/icons/user.png" alt="Utilisateur" className="user-icon" />
        <a href="#" className="compte">Mon compte</a>
      </div>
    </header>
  );
}
