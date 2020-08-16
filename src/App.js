
import React, { Component } from 'react'
import Formulario from './components/Formulario'
import Listado from './components/Listado'

export default class App extends Component {
  
  state = {
    formulario: []
  };

  guardarForm = (newForm) => {
    let formulario = this.state.formulario
    formulario.push(newForm)
    this.setState({formulario})
  } 
  render() {
    return (
      <>
        <Formulario
          guardarForm={this.guardarForm}
          
        />
        <Listado
          formulario={this.state.formulario}
        />
      </>
    );
  }
}