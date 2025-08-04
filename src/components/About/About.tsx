import "./About.css";

function About() {
  return (
    <>
      <div id="about" className="About-container">


        <div className="About-content-container">

          <h1 className="About-title">Sobre mí.</h1>

          <h2 className="About-subtitle">Estudiante, con una sólida educación y una actitud proactiva hacia el desarrollo laboral y el aprendizaje continuo.</h2>

          <div className="About-content">

            <p>
                Soy una persona con capacidad de adaptación y un gran deseo de aprender, enfocándome en desarrollar habilidades para aplicar a nivel profesional.
            </p>

          </div>

        </div>

        <div className="About-image-container">
            <img className="About-image" src="/about-image.jpeg" alt="Gabriel Kitanovich" />
        </div>

      </div>
    </>
  );
}
export default About;
