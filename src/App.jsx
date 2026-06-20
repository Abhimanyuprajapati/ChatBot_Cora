import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Chatbot } from "./components/Chatbot";
import { NotFound } from "./components/NotFound";

function App() {
  
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Chatbot />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
export default App;
