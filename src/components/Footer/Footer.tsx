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
                    asd
                </div>
            </div>
        </section>
        
        <small>&copy; {new Date().getFullYear()} Mi CV. Todos los derechos reservados.</small>
    </footer>
    );
} 
export default Footer;
