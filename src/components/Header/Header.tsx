import './Header.css';
function Header() { 
    return (
    <header className="Header">
            <div>
                <nav className="Header-nav">
                    <ul className="Header-nav-list">
                        <li ><a href="#about">Sobre mí</a></li>
                        <li><a href="#skills">Habilidades</a></li>
                    </ul>
                </nav>
            </div>
            <div className="Header-title">
                <h1 className="Header-h1">Gabriel Kitanovich</h1>
                <h2 className="Header-h2">Técnico en Programación</h2>
            </div>
            <div>
                <nav className="Header-nav">
                    <ul className="Header-nav-list">
                        <li><a href="#experience">Experiencia</a></li>
                        <li><a href="#contact">Contacto</a></li>
                    </ul>
                </nav>
            </div>
    </header>
    );
}
export default Header;
