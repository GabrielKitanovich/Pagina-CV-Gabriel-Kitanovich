import './Footer.css';

function Footer() {
    return (
    <footer className="Footer">

        <section className='Footer-info'>


            <div className="Footer-contact">

                <div className="Footer-contact-row">
                    <span className="Footer-contact-title">
                        <b>Información de Contacto</b>
                    </span>
                </div>

                <div className="Footer-contact-row">
                    <span className="Footer-contact-text">
                        <b>+54 9 261 2077 129</b>
                    </span>
                </div>

                <div className="Footer-contact-row">
                    <span className="Footer-contact-text">
                        <b>gabriel.kitanovich@gmail.com</b>
                    </span>
                </div>

                <div className="Footer-contact-row">
                    <span className="Footer-contact-text">
                        <b>Carrodilla, Luján de Cuyo - Mendoza</b>
                    </span>
                </div>

            </div>


            <div className='Footer-social'>

                <h1 className="Footer-social-title">
                        Redes Sociales
                </h1>


                <div className="Footer-social-links">

                    <a className='Footer-social-link' href="https://www.instagram.com/gabrielkitanovich/" target="_blank" rel="noopener noreferrer">
                        <img src="/whatsapp-glyph-black-logo-svgrepo-com.png" alt="" />
                    </a>

                    <a className='Footer-social-link' href="https://github.com/GabrielKitanovich" target="_blank" rel="noopener noreferrer">
                        <img src="/25231.png" alt="" />
                    </a>

                    <a className='Footer-social-link' href="mailto:gabriel.kitanovich@gmail.com">
                        <img src="/606745_gmail_512x512.png" alt="" />
                    </a>

                    <a className='Footer-social-link' href="https://www.linkedin.com/in/gabriel-kitanovich/" target="_blank" rel="noopener noreferrer">
                        <img src="/606786_linkedin_512x512.png" alt="" />
                    </a>

                </div>
            </div>


            <div className='Footer-nav'>
                <div className='Footer-nav-title'>
                    <b>Navegación</b>
                </div>
                <nav className='Footer-nav-links'>
                    <ul className='Footer-nav-links-list'>
                        <li><a href="#about">Sobre mí <img src="/paper-plane-512.png" alt=""/></a></li>
                        <li><a href="#skills">Habilidades <img src="/paper-plane-512.png" alt=""/></a></li>
                        <li><a href="#experience">Experiencia <img src="/paper-plane-512.png" alt=""/></a></li>
                        <li><a href="#contact">Contacto <img src="/paper-plane-512.png" alt=""/></a></li>
                    </ul>
                </nav>
            </div>

        </section>
        
        <small>&copy; {new Date().getFullYear()} Mi CV. Todos los derechos reservados.</small>
    </footer>
    );
} 
export default Footer;
