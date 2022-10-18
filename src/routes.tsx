import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PostPage } from "./pages/Post";
import { PostsPage } from "./pages/Posts";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<PostsPage />} />
          <Route path="/post" element={<PostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
