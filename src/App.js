import { NavBar } from "./composants/NavBar";
import { About } from "./composants/About";
import { Services } from "./composants/Services";
import { Testimonials } from "./composants/testimonials";
import {Projects} from './composants/Projects';
import { Footer } from "./composants/Footer";
import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Services />
      <Testimonials />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
