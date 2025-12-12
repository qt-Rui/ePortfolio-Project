import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import SelfAssessment from "./pages/SelfAssessment";
import CodeReview from "./pages/CodeReview";
import Project1Narrative from "./pages/narratives/Project1Narrative";
import Project2Narrative from "./pages/narratives/Project2Narrative";
import Project3Narrative from "./pages/narratives/Project3Narrative";

export default function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/self-assessment" element={<SelfAssessment />} />
        <Route path="/code-review" element={<CodeReview />} />

       
        <Route path= "/pages/narratives/Project1Narrative" element= {<Project1Narrative />} />
        <Route path= "/pages/narratives/Project2Narrative" element={<Project2Narrative />} />
        <Route path="/pages/narratives/Project3Narrative" element={<Project3Narrative />} />

        
      </Routes>

      <Footer />
    </>
  )
}