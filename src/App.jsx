import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, OverSpeeding, NoHelmetDetection, IllegalParking } from "./pages";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overspeeding" element={<OverSpeeding />} />
          <Route path="/illegalparking" element={<IllegalParking />} />
          <Route path="/nohelmetdetection" element={<NoHelmetDetection />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
