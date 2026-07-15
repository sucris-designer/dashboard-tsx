import React from "react";
import { useData } from "../Context/DataContext";
import DateRange from "./DateRange";
import Meses from "./Meses";
import { data, useLocation } from "react-router-dom";

const Header = () =>{
   const [title, settitle] = React.useState('Resumo')
   const location = useLocation();
   const { data } = useData();
   React.useEffect(()=>{
      if(location.pathname ==="/"){
         settitle("Resumo");

         document.title = "Fintech | Resumo"
      }else if (location.pathname ==="/Vendas"){
         settitle("Vendas");
         document.title = "Fintech | Vendas"
      }else if (location.pathname.startsWith("/vendas/")) {
      settitle("Venda");
      document.title = "Fintech | Venda";
         
      }
   },[location]);

   let nomeCliente = "";
   if (location.pathname.startsWith("/vendas/") && data) {
      // Divide o caminho por "/" e pega o último segmento (o ID)
      const urlParts = location.pathname.split("/");
      const idDaUrl = urlParts[urlParts.length - 1];
      
      // Procura na lista global a venda com o ID correspondente
      const vendaEncontrada = data.find((venda) => venda.id === idDaUrl);
      if (vendaEncontrada) {
         nomeCliente = vendaEncontrada.nome;
      }
   }
   
   return(
   <header >
      <div className="daterange">
         <DateRange/>
         <div className="box mb bg-3">
         <h1 className="mb bg-3">{title}</h1>
         <p className="tx">
         {nomeCliente}
         </p>
         </div>
      </div>
         <Meses/>
   </header>
   );
}

export default Header