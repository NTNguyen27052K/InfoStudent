import { BrowserRouter, Route, Routes } from "react-router-dom";
import InfoStudent from "./Components/InfoStudent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<InfoStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
