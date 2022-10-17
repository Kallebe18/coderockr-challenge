import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactPage } from "./pages/Contact";
import { PostsPage } from "./pages/Posts";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<PostsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
