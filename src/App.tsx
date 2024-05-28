import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./pages/Home";

function App() {

  return (
    <div className="w-full h-screen bg-yellow-50">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
