import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Apl2 from './Apl2';
import App from './App';

class Apl extends React.Component{
  state ={
    clients: [
      {id: 1, nom: "Julio"},
      {id: 2,nom:"Hazard"},
      {id: 3,nom:"Halland"}
    ]
  }
  
  
  render(){
    const ttl="Liste De Clients"
    const element = <li>Kimmich</li>
    const elements = this.state.clients.map((client)=><li>{client.nom} <button>X</button></li>)
    return <div>
      <h1>{ttl}</h1>
      <ul>
        {element}
        {elements}
      </ul>
    </div>
  }
}



const rootElement2 = document.getElementById("root");
ReactDOM.render(<Apl />,rootElement2);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

