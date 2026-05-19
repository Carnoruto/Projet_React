import { BrowserRouter, Routes, Route } from "react-router-dom";

import Accueil from "../pages/Accueil";
import AlerteDetail from "../pages/AlerteDetail";
import Profil from "../pages/Profil";
import Parametres from "../pages/Parametres";
import NotFound from "../pages/NotFound";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/alerte/:id" element={<AlerteDetail />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/parametres" element={<Parametres />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
