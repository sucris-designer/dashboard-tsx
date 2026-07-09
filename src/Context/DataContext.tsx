import React from 'react';
import useFetch from '../Hooks/useFetch';

type IDataContext ={
    loading: boolean;
    error: string | null;
    data: IVendas[] | null;

}

type IVendas ={
    id: String;
    nome: String;
    preco: number;
    status: "pago" | "processando" | "falha";
    data: string;
    pagamento: "boleto" | "pix" | "cartao";
    parcelas: number | null;
}



// 1. Criamos o contexto (adicionamos o 'const' que faltava)
export const DataContext = React.createContext<IDataContext | null>(null);


export const useData = () => {
    const context = React.useContext(DataContext);
    if(!context) throw new Error("useData precisa estar em dataContextProvider");
    return context;
}
// 2. Criamos o Provider usando a sintaxe correta com 'const' e tipagem limpa
export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const {data, loading, error} = useFetch<IVendas[]>
('https://data.origamid.dev/vendas/')

    return (
    <DataContext.Provider value={{data, loading, error}}>
      {children}
    </DataContext.Provider>
  );
};