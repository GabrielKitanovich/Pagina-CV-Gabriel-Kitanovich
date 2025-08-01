import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import '../styles/Home.css';



function Home() {
    return (
        <div className="Home">
            <Header />
            <Hero />
            <Footer />
        </div>
    );
};

export default Home;