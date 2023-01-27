import { Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./pages/form-page/form.component";
import GridPage from "./pages/grid-page/grid-page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/grid" element={<GridPage />} />
      </Routes>
    </div>
  );
}

export default App;
