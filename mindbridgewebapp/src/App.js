import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Emotion from "./pages/Emotion";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Emotion" element={<Emotion />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
