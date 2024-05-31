import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Albums from "./pages/Albums";

function App() {

  return (
    <div className="h-screen w-screen bg-zinc-900">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/albums" element={<Albums />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
