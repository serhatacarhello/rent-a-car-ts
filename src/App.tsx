import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main-page";
import Header from "./components/header";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
};
