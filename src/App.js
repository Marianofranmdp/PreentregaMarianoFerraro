import "./App.css";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemdetailContainer";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app-body">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />

          <Route path="/prueba" element={<h1>Prueba</h1>} />
          
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>Page not found: 404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
