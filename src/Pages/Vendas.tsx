import React from "react";
import { useData } from "../Context/DataContext"; // Ajuste o import se necessário

const StyleGeneral: React.CSSProperties = {
    textAlign: "left"
}

const StyleTable: React.CSSProperties = {
    fontWeight: "600",
    ...StyleGeneral
};




const Vendas = () => {
  const { data } = useData();
  if (!data) return null; 
  return (
    <section>
        <div className="flex box" style={StyleTable}>
            <div><h3>ID</h3></div>
            <div><h3>Nome Cliente</h3></div>
            <div><h3>Status</h3></div>
            <div><h3>Preço</h3> </div>
        </div>
    
          {/* O MAP COMEÇA AQUI */}
          {data.map((item) => {
            return (
              <div style={StyleGeneral} className="box flex mb" key={item.id}>
               <div><p>{item.id}</p></div>
               <div><p>{item.nome}</p></div>
               <div><p className={`status-box ${item.status}`}>{item.status}</p></div>             
               <div><p> {item.preco.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
               </p></div>
              </div>
            );
          })}
    </section>
  );
};

export default Vendas;