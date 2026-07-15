import React from "react";
import { useData } from "../Context/DataContext";
import DateRange from "./DateRange";
import Meses from "./Meses";
import { useLocation } from "react-router-dom";

const Header = () =>{
   const [title, settitle] = React.useState('Resumo')
   const location = useLocation();
   React.useEffect(()=>{
      if(location.pathname ==="/"){
         settitle("Resumo");
         document.title = "Fintech | Resumo"
      }else if (location.pathname ==="/Vendas"){
         settitle("Vendas");
         document.title = "Fintech | Vendas"
      }
   },[location]);
   
   return(
   <header >
      <div className="daterange">
         <DateRange/>
         <h1 className="box mb bg-3">{title}</h1>
      </div>
         <Meses/>
   </header>
   );
}

export default Header