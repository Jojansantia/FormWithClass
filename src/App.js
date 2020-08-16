
import React, { Component } from 'react'
import Formulario from './components/Formulario'
import Listado from './components/Listado'

export default class App extends Component {
  
  state = {
    formulario: [],
    mostrarForm: false,
    loading: false
  };

  guardarForm = (newForm) => {
    let formulario = this.state.formulario
    formulario.push(newForm)
    // this.setState({formulario})
    localStorage.setItem('data', JSON.stringify(formulario));  
  } 

  componentDidMount () {
    this.fetchData()
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.userId !== this.props.userId) {
      this.fetchData()
    }
  }

  fetchData = () => {
    this.setState({loading: true})

    let formulario = JSON.parse(localStorage.getItem('data'));
    if(formulario){
      this.setState({formulario, loading: false})
    }
  }

  setScreen = () => {
    let mostrarForm = !this.state.mostrarForm
    this.setState({mostrarForm })
  }
  render() {
    return (
      <>
        <div className="py-2">
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