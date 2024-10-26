import { BrowserRouter } from "react-router-dom";

import { Sobre, Contato, Experiencia, Feedbacks, Hero, Navbar, Tech, Trabalhos, StarsCanvas } from './components';

const App = () => {
  return(
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Sobre />
        <Tech />
        <Experiencia />
        <Trabalhos />
        <Feedbacks />
        <div className="relative z-0">
          <Contato />
          <StarsCanvas />
        </div>
      </div>
      
    </BrowserRouter>
  )
}


export default App