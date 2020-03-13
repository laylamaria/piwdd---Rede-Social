import React from 'react';
import "./Page.css";
import logo from '../logo.svg';
class Page extends React.Component {
    render() {
        return <div className="Page">

            <div className="Menu">

                <div className="imagem">
                    <img src={logo} className="logo" alt="logo"></img>
                </div>

                <div className="botoes">
                    <button className="botao">Linha do Tempo</button>
                    <button className="botao">Perfil</button>
                </div>

                <div className="usuario">
                    <p className="nome" >Layla Maria</p>
                </div>

            </div>


            <div className="Users">
                <div className = "user">
                    <h3>Layla Maria</h3>
                    <p> texto texto texto textp texto </p>
                </div>

                <div className = "user">
                    <h3> Paula Luana</h3>
                    <p> texto texto texto textp texto </p>
                </div>

                <div className = "user">
                    <h3> Alessandra Oliveira</h3>
                    <p> texto texto texto textp texto </p>
                </div>

                <div className = "user">
                    <h3> Júlia Cardoso</h3>
                    <p> texto texto texto textp texto </p>
                </div>


            </div>

        </div>;
    }
}
export default Page;