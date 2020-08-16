
import React, { Component } from 'react'
import Formulario from './components/Formulario'
import Listado from './components/Listado'

export default class App extends Component {
  
  state = {
    formulario: [],
    mostrarForm: false
  };

  guardarForm = (newForm) => {
    let formulario = this.state.formulario
    formulario.push(newForm)
    this.setState({...this.state, formulario})
  } 

  setScreen = () => {
    let mostrarForm = !this.state.mostrarForm
    this.setState({...this.state, mostrarForm })
  }
  render() {
    return (
      <>
        <div className="py-3">
          {
            this.state.mostrarForm 
              ?   
                <Formulario
                  guardarForm={this.guardarForm}
                  setScreen={this.setScreen}
                />
              :
                <Listado
                  formulario={this.state.formulario}
                  setScreen={this.setScreen}
                />
          }
        </div>
      </>
    );
  }
}