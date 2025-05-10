import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Landing from "./pages/Landing";
import SubmitOpinion from "./pages/SubmitOpinion";
import MindMap from "./pages/MindMap";

export default function App() {
  return (
    <>
      <NavBar />
      <main className="max-w-5xl mx-auto p-6">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/submit" element={<SubmitOpinion />} />
          <Route path="/map" element={<MindMap />} />
        </Routes>
      </main>
    </>
  );
}
