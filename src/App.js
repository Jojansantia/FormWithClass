
import React, { Component } from 'react'
import Formulario from './components/Formulario'
import Listado from './components/Listado'

export default class App extends Component {
  
  state = {
    formulario: [],
    mostrarForm: true,
    loading: false,
    selectedData: []
  };

  guardarForm = (newForm) => {
console.log("dasd");
    this.setState(state => ({
      formulario: [
        ...state.formulario,
        newForm
      ]
    }))
  } 

  editarForm = (newForm) => {
    let formulario = this.state.formulario.map(form => form.id === newForm.id ? newForm : form)
    this.setState({formulario})
  }

  componentDidMount () {
    this.setState({loading: true})
    let formulario = JSON.parse(localStorage.getItem('data'));
    if(formulario){
      this.setState({formulario, loading: false})
    }
  }

  componentDidUpdate (prevProps, prevState) {
    let lenght1 = prevState.formulario.length
    let lenght2 = this.state.formulario.length
    if(lenght1 !== lenght2){
      localStorage.setItem('data', JSON.stringify(this.state.formulario));
    } 
  }

  setScreen = () => {
    let mostrarForm = !this.state.mostrarForm
    this.setState({mostrarForm })
  }

  onRemove = (form) => {
    let formulario =  this.state.formulario.filter(_form => ( form.id !== _form.id ))
    this.setState({formulario})
  }

  onEdit = (selectedData) => {
    if(selectedData){
      this.setState({selectedData, mostrarForm:true})
    }else{
      this.setState({selectedData: []})
    }
  }

  render() {
console.log(this.state.formulario);
    return (
      <>
        <div className="py-2">
          {
            this.state.mostrarForm 
              ?   
                <Formulario
                  selectedData={this.state.selectedData}
                  guardarForm={this.guardarForm}
                  setScreen={this.setScreen}
                  onEdit={this.onEdit}
                  editarForm={this.editarForm}
                />
              :
                <Listado
                  formulario={this.state.formulario}
                  setScreen={this.setScreen}
                  onRemove={this.onRemove}
                  onEdit={this.onEdit}
                />
          }
        </div>
      </>
    );
  }
}