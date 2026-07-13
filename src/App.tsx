import React from "react";
import Sidenav from "./Components/Sidenav";
import Header from "./Components/Header";
import Resumo from "./Pages/Resumo";
import { DataContextProvider } from "./Context/DataContext";
import "./Style.css";
import Vendas from "./Pages/Vendas";


function App() {
  return (
    <DataContextProvider>
    <div className="container">
      <Sidenav />
      <main>
        <Header />
        <Resumo />
        <Vendas/>
      </main>
    </div>
    </DataContextProvider>
  );
}

export default App;


