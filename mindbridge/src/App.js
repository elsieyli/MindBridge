import "./styles/App.css";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Emotion from "./pages/Emotion";
import Test from "./pages/Test";
import { AuthenticationGuard } from "./components/AuthenticationGuard";
import { useAuth0 } from "@auth0/auth0-react";
import { PageLoader } from "./components/PageLoader";
import { CallbackPage } from "./pages/Callback";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }

  return (
      <Routes>
        <Route path="/" element={<AuthenticationGuard component={Home} />} />
        <Route path="/profile" element={<AuthenticationGuard component={Profile} />} />
        <Route path="/emotion" element={<AuthenticationGuard component={Emotion} />} />
        <Route path="/docs" element={<AuthenticationGuard component={Test} />} />
        <Route path="/callback" element={<CallbackPage />} />
      </Routes>
  );
}

export default App;
