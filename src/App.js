import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import { Home } from "./pages/Home";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
