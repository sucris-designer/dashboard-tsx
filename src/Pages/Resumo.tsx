import React from "react";
import { useData } from "../Context/DataContext";

const Resumo = () => {
  const { data } = useData();
  if (!data) return null; 
  return (
    <section>
     <p>Resumo</p>
      <div className="Resumo flex mb">
        <div className="box">
          <h2>Vendas</h2>
          <p>
            {data
              .filter((i: any) => i.status !== "falha")
              .reduce((acc: number, item: any) => acc + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </p>
        </div>

      <div className="box">
          <h2>Recebido</h2>
          <p>
            {data
              .filter((i: any) => i.status === "pago")
              .reduce((acc: number, item: any) => acc + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </p>
        </div>
         <div className="box">
          <h2>Processando</h2>
          <p>
            {data
              .filter((i: any) => i.status === "processando")
              .reduce((acc: number, item: any) => acc + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </p>
        </div>


        
      </div>
    </section>
  );
};

export default Resumo;