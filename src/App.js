
import React, { Component } from 'react'
import Formulario from './components/Formulario'
import Listado from './components/Listado'

export default class App extends Component {
  
  state = {
    email: '',
    age: 0,
    select: '',
    techs: ["React"],
    descripcion: '',
    errormessage: '',
    formulario: []
  };

  setForm = (event) => {
    event.preventDefault()

    let email = this.state.email
    let age = this.state.age
    let select = this.state.select
    let techs = this.state.techs
    let descripcion = this.state.descripcion

    let informacion = {
      email, age, select, techs, descripcion
    }

    let formulario = this.state.formulario
    formulario.push(informacion)
    
    this.setState({
      email: '',
      age: 0,
      select: '',
      techs: ["React"],
      descripcion: '',
      errormessage: '',
      formulario
    })
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === "age") {
      let newval = parseInt(val)
      if (val !=="" && !Number(val)) {
        err = <strong>Your age must be a number</strong>;
        this.setState({errormessage: err});
        return;
      }
      this.setState({[nam]: newval});
      this.setState({errormessage: err});
    }else if(nam === 'techs'){
        val = Array.from(
        event.target.selectedOptions,
        (option) => option.value
      )
      this.setState({[nam]: val});
    }else{
      this.setState({[nam]: val});

    }
  }

  render() {

    return (
      <>
        <Formulario
          state={this.state}
          myChangeHandler={this.myChangeHandler}
          setForm={this.setForm}
        />
        <Listado
        formulario={this.state.formulario}
        />
      </>
    );
  }
}