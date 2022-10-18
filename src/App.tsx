import GlobalStyles from "./globalStyles";
import { PostProvider } from "./hooks/usePost";
import { AppRoutes } from "./routes";

function App() {
  return (
    <PostProvider>
      <GlobalStyles />
      <AppRoutes />
    </PostProvider>
  );
}

export default App;
