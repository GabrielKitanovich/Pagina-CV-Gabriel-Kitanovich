import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import '../styles/Home.css';



function Home() {
    return (
        <div className="Home">
            <Header />
            <Hero />
            <About />
            <Footer />
        </div>
    );
};

export default Home;