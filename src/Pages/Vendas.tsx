import React from "react";
import { useData } from "../Context/DataContext";
import { useState } from 'react';
import { NavLink } from "react-router-dom";


const StyleGeneral: React.CSSProperties = {
    textAlign: "left"
}

const BoxBig: React.CSSProperties = {
  justifyContent: "space-between", 
  alignItems: "center",        
  ...StyleGeneral
}


const StyleTable: React.CSSProperties = {
    fontWeight: "600",
    ...StyleGeneral
};

const Link: React.CSSProperties = {
    textDecoration: "none",
    cursor:"pointer",
    fontWeight:"500",
    color: "var(--color-1)",
    ...StyleGeneral
};


const Vendas = () => {
  const { data } = useData();
  if (!data) return null;


const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 5; // Altere para a quantidade que preferir

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;

const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

const totalPages = Math.ceil(data.length / itemsPerPage);
  return (
    <section>
          {/* O MAP COMEÇA AQUI */}
          {currentItems.map((item) => {
            return (
              <div style={BoxBig} className="box flex mb" key={item.id}>
               <div><NavLink to={`/vendas/${item.id}`} style={Link}>{item.id}</NavLink></div>
               <div><p>{item.nome}</p></div>
               <div><p className={`status-box ${item.status}`}>{item.status}</p></div>             
               <div><p> {(item.preco ?? 0).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
               </p></div>
              </div>
            );
          })}

          {/* --- CONTROLES DE PAGINAÇÃO --- */}
        <div className="controlPag">
          <button className="pagination"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          
          <span className="number">Página {currentPage} de {totalPages}</span>
          
          <button className="pagination"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Próximo
          </button>
        </div>
    </section>
  );
};

export default Vendas;