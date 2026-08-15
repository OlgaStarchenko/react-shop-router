import MainPage from "./pages/MainPage";
import Catalog from "./pages/Catalog";
import Contacts from "./pages/Contacts";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
}
