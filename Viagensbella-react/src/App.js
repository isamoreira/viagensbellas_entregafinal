import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Contatos from "./views/contato";
import ContatosCreate from "./views/contato/Create";
import Pacotes from "./views/pacote";
import PacotesCreate from "./views/pacote/Create";
import Menu from "./components/Menu";
import Footer from "./components/Footer";


import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contatos" element={<Contatos />} />
          <Route path="/Contatos-Create" element={<ContatosCreate />} />
          <Route path="/Contatos-Update/:id" element={<ContatosCreate />} />
          <Route path="/Pacotes" element={<Pacotes/>} />
          <Route path="/Pacotes-Create" element={<PacotesCreate />} />
          <Route path="/Pacotes-Update/:id" element={<PacotesCreate />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
