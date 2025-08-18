import { Route, Routes } from "react-router";
import PublicLayout from "./components/PublicLayout";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    import("@/App.css");
  }, []);

  return (
    <Routes>
      <Route path="*" element={<PublicLayout />} />
    </Routes>
  );
}

export default App;
