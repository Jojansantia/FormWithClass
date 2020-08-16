import React, { Component } from 'react'
import {Validaciones} from './Validaciones'
export default class Formulario extends Component {

  state ={
    email: '',
    age: 0,
    select: '',
    techs: [],
    descripcion: '',
    check: false,
    alert: '',
  }   

  setForm = (event) => {
    event.preventDefault()
    let error = Validaciones(this.state, this.setAlert)
    if(!error){
      this.props.guardarForm(this.state) 
      this.props.setScreen()
    }
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;

    if (nam === "age") {
      let newval = parseInt(val)
      if (val !=="" && !Number(val)) {
        return;
      }
      this.setState({[nam]: newval});
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

  setAlert = (alert) => {
    this.setState({alert});
    setTimeout(() => {
      this.setState({alert: ''});
    }, 2000);
  }

  setChecked = check => {
    this.setState({check})
  }

	render() {
    const {email, age, select, techs, descripcion, check, alert } = this.state
    
		return (
			<div className="container rounded-lg shadow col-md-7 col-sm-9 col-11 border pb-2">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h1 className="text-center ">FORMULARIO</h1>
          <button type="button" onClick={this.props.setScreen} className="btn btn-info">Ver Listado</button>
        </div>
        <form onSubmit={this.setForm}>
          
          <div className="form-group d-flex flex-row">
            <label forhtml="email" className="my-auto pr-2 font-weight-bold">Email: </label>
            <input type="email" value={email} onChange={this.myChangeHandler} name="email" className="form-control" id="email" placeholder="name@examplecom"/>
          </div>

          <div className="form-group d-flex flex-row">
            <label forhtml="age" className="my-auto pr-2 font-weight-bold">Edad:</label>
            <input type="text" value={age || ''} onChange={this.myChangeHandler} name="age" className="form-control" id="age" placeholder="Edad"/>
          </div>

          <div className="form-group">
            <label forhtml="exampleFormControlSelect1" className="font-weight-bold">Lenguaje</label>
            <select className="form-control" value={select} onChange={this.myChangeHandler} name="select" id="exampleFormControlSelect1">
              <option value="">-- Seleccione --</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="TypeScript">TypeScript</option>
              <option value="PHP">PHP</option>
            </select>
          </div>

          <div className="form-group">
            <label forhtml="exampleFormControlSelect2" className="font-weight-bold">Tecnología</label>
            <select multiple className="form-control"  value={techs} onChange={this.myChangeHandler} name="techs" id="exampleFormControlSelect2">
              <option value="React">React</option>
              <option value="Angular">Angular</option>
              <option value="Vue">Vue</option>
              <option value="Vanilla">Vanilla</option>
            </select>
          </div>

          <div className="form-group">
            <label forhtml="exampleFormControlTextarea1" className="font-weight-bold">Example textarea</label>
            <textarea 
              className="form-control" value={descripcion} 
              onChange={this.myChangeHandler} maxLength="200" style={{resize: 'none'}} 
              name="descripcion" id="exampleFormControlTextarea1" rows="3">
            </textarea>
          </div>

          <div className="form-group form-check">
            <input type="checkbox" name="check"  checked={check} onChange={() => this.setChecked(!check)} className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" forhtml="exampleCheck1">Acepto los términos y condiciones</label>
          </div>

          {alert &&
            <div className="alert alert-danger" role="alert">
              ¡Error! {alert}
           </div>
          }

          <div className="text-center">
            <button type="submit" className="btn btn-success w-25">Submit</button>
          </div>

        </form>
      </div>
		)
	}
}
