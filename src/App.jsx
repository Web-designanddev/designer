import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import CardDeal from "./components/CardDeal";
import AboutUs from "./components/AboutUs";
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop component

const App = () => (
  <div dir="rtl">
    <div className="overflow-hidden bg-gray-950">
      <Navbar />
    </div>
    <div className="contact-sec sec-pad min-h-screen">
      <div className="boxWidth">
        <Hero />
      </div>
    </div>
    <div>
      <AboutUs />
      <CardDeal />
      <Projects />
      <Services />
      <Testimonials />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
    <ScrollToTop /> {/* Include ScrollToTop component */}
  </div>
);

export default App;
