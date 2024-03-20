import "./styles/App.css";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Emotion from "./pages/Emotion";
import Test from "./pages/Test";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/emotion" element={<Emotion />} />
        <Route path="/docs" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
