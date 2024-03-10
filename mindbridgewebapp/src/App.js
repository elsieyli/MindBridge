import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Button/>
      </Router>
    </div>
  );
}

export default App;
