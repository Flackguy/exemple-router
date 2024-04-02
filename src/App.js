import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Accueil from "./pages/Accueil";
import Contact from "./pages/Contact";
import Detail from "./pages/Detail";

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
