import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactPage } from "./pages/Contact";
import { HomePage } from "./pages/Home";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
