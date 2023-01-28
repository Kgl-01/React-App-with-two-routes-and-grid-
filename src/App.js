import { Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./pages/form-page/form.component";
import GridPage from "./pages/grid-page/grid-page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Form />} />
          <Route path="grid" element={<GridPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
