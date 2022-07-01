import LandingPage from "./pages/landing/LandingPage";
import { Routes, Route } from "react-router-dom";
import BlogPage from "./pages/blog/BlogPage";
function App() {
  return (
    <div className="font-mono">
      <header>
        <title>Development Growth</title>
      </header>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App;
