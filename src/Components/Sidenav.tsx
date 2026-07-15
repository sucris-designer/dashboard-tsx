import React from "react";
import { useData } from "../Context/DataContext";
import FintechSVG from "../assets/FintechSVG";
import Resumo from "../Pages/Resumo";
import Vendas from "../Pages/Vendas";
import resumoIcon from "../assets/icons/resumo.svg";
import vendasIcon from "../assets/icons/vendas.svg";
import contatoIcon from "../assets/icons/contato.svg";
import sairIcon from "../assets/icons/sair.svg";
import webhooksIcon from "../assets/icons/webhooks.svg";
import configuracoesIcon from "../assets/icons/configuracoes.svg";
import { NavLink } from "react-router-dom";

const Sidenav = () =>{
    const {data} = useData();
    
    return <nav className="box bg-3 sidenav">
            <FintechSVG title="Fintech Dashboard" />            
            <ul className="">
                <li>
                    <span>
                    <img src={resumoIcon} alt="" />
                    </span>
                    <NavLink to={"/"}>Resumo</NavLink>
                </li>
                <li>
                    <span>
                    <img src={vendasIcon} alt="" />
                    </span>
                    <NavLink to={"/Vendas"}>Vendas</NavLink>
                </li>
                <li>
                    <span>
                    <img src={configuracoesIcon} alt="" />
                    </span>

                    <a href="">Configurações</a>
                </li>
                <li>
                    <span>
                    <img src={webhooksIcon} alt="" />
                    </span>
                    <a href="">Webhook</a>
                </li>
                <li>
                    <span>
                    <img src={sairIcon} alt="" />
                    </span>
                    <a href="">sair</a>
                </li>
            </ul>
    </nav>
}

export default Sidenav