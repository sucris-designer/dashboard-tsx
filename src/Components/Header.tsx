import React from "react";
import { useData } from "../Context/DataContext";
import DateRange from "./DateRange";
import Meses from "./Meses";

const Header = () =>{
   return(
   <div>
      <DateRange/>
      <Meses/>
   </div>
   );
}

export default Header