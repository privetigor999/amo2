import React from "react";
import { MainLayout } from "./layout/MainLayout/MainLayout";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";

import "./App.css";

export const App: React.FC = () => {
  return (
    <MainLayout>
      <Header />
      <Main />
      <Footer />
    </MainLayout>
  );
};

export default App;
