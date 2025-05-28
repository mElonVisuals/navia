import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<div className="text-white p-10 text-3xl">Dashboard Page</div>} />
        <Route path="/about" element={<div className="text-white p-10 text-3xl">About Page</div>} />
      </Routes>
    </Router>
  );
}
