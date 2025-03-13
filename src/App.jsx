import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Auth } from "./page";
const App = () => {
  return (
    <main className="bg-slate-300/20 h-[100vh]">
      <Router>
        <Routes>
          <Route path="/quick-aid" element={<Auth/>} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
