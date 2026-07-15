import { useData } from "../Context/DataContext";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { IVenda } from "../Context/DataContext";
import Loading from "../Components/Loading";


const Venda = () => {

  const {id} = useParams();
  const { data, loading } = useFetch<IVenda>(`https://data.origamid.dev/vendas/${id}`);
if (loading) return <Loading />;
if (data === null) return null;
  return (
    <section>
     <div className="box mb"><h3>ID:</h3>{data.id}</div>
     <div className="box mb"><h3>Nome</h3>{data.nome}</div>             
    <div className="box mb"><h3>Preço:</h3>{(data.preco ?? 0).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
    })}</div>
    <div className="box mb"><p className={`status-box ${data.status}`}>{data.status}</p></div>
    </section>
  );
};

export default Venda;