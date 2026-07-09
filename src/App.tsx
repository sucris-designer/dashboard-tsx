import React from "react";
import Sidenav from "./Components/Sidenav";
import Header from "./Components/Header";
import Resumo from "./Pages/Resumo";
import { DataContextProvider } from "./Context/DataContext";

function App() {
  return (
    <DataContextProvider>
    <div>
      <Sidenav />
      <main>
        <Header />
        <Resumo />
      </main>
    </div>
    </DataContextProvider>

  );
}

export default App;


