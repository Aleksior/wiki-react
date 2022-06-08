import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { ErrorPage } from "./Pages/ErrorPage";

function App() {
  return (
    <Router>
      <div className='container'>
        <div className='main-content'>
          <nav className="navigation-bar">
            <Link to="/">Encyklopedia</Link>
            <Link to="/about">O mnie</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <div className="App">
          </div>
        </div>

      </div>
    </Router>

  );
}

export default App;
