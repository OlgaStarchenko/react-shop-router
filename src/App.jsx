import MainPage from "./pages/MainPage";
import Catalog from "./pages/Catalog";
import Contacts from "./pages/Contacts";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
}
