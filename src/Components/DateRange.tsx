import React from "react";
import DateInput from "./DateInput";
import { useData} from "../Context/DataContext";
  
const DateRange = () =>{
   const {inicio, setInicio, final, setFinal} = useData();

   return (
    <form className="box flex mb" onSubmit={(e) => e.preventDefault()}>    
    <DateInput type="date" label="Início" value={inicio} onChange={({target}) => setInicio(target.value)} />
    <DateInput type="date"  label="Final" value={final} onChange={({target}) => setFinal(target.value)} />
    </form>

   );
}

export default DateRange    