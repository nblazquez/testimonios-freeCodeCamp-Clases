import React, { Component } from 'react';
import './App.css';
import Testimonio from './componentes/Testimonio';

const data = require('./datos/testimonios.json');

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='contenedor-principal'>
          <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
          {data.map((detail:any, index:Number) => {
            return (
              <Testimonio
                nombre={detail.nombre}
                pais={detail.pais}
                imagen={detail.imagen}
                cargo={detail.cargo}
                empresa={detail.empresa}
                testimonio={detail.testimonio}
              />
            )
          })}
        </div>
      </div>
    );
  };
};

export default App;
