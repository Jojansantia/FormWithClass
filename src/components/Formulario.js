import React, { Component } from 'react'

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

	render() {
    const { guardarForm, setScreen } = this.props
    const {email, age, select, techs, descripcion, check, alert } = this.state

    const setChecked = check => {
      this.setState({...this.state, check})
    }

    const  setForm = (event) => {
      event.preventDefault()

      if(email.trim() === '' &&
        age === 0  &&
        select.trim() === '' &&
        techs.length === 0 &&
        descripcion.trim() === '' 
      ){
        setAlert('Todos los campos son obligatorios.')
        return;
      }
      if(email.trim() === ''){
        setAlert('El email es obligatorio.')
        return;
      }
      if(age === 0){
        setAlert('La edad es obligatoria.')
        return;
      }
      if(select.trim() === ''){
        setAlert('Escoja un ejemplo prueba.')
        return;
      }
      if(techs.length === 0){
        setAlert('Escoja una o varias tecnologías..')
        return;
      }
      if(descripcion.trim() === ''){
        setAlert('La descripción es obligatoria.')
        return;
      }
      if(check){
        guardarForm(this.state) 
        setScreen()
      }else{
        setAlert('Debe aceptar los términos y condiciones.')
      }
    }

    const myChangeHandler = (event) => {
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

  const setAlert = (alert) => {
    this.setState({alert});
    setTimeout(() => {
      this.setState({alert: ''});
    }, 2000);
  }

		return (
			<div className="container rounded-lg shadow w-50 border pb-2">
        <h1 className="text-center">FORMULARIO</h1>
        <form onSubmit={setForm}>
          {alert &&
            <div className="alert alert-danger" role="alert">
              ¡Error! {alert}
           </div>
          }
          <div className="form-group d-flex flex-row">
            <label forhtml="email" className="my-auto pr-2 font-weight-bold">Email: </label>
            <input type="email" value={email} onChange={myChangeHandler} name="email" className="form-control" id="email" placeholder="name@examplecom"/>
          </div>
          <div className="form-group d-flex flex-row">
            <label forhtml="age" className="my-auto pr-2 font-weight-bold">Edad:</label>
            <input type="text" value={age || ''} onChange={myChangeHandler} name="age" className="form-control" id="age" placeholder="Edad"/>
          </div>
          <div className="form-group">
            <label forhtml="exampleFormControlSelect1" className="font-weight-bold">Example select</label>
            <select className="form-control" value={select} onChange={myChangeHandler} name="select" id="exampleFormControlSelect1">
              <option value="">-- Seleccione --</option>
              <option value="Prueba 1">Prueba 1</option>
              <option value="Prueba 2">Prueba 2</option>
              <option value="Prueba 3">Prueba 3</option>
              <option value="Prueba 4">Prueba 4</option>
              <option value="Prueba 5">Prueba 5</option>
            </select>
          </div>
          <div className="form-group">
            <label forhtml="exampleFormControlSelect2" className="font-weight-bold">Example multiple select</label>
            <select multiple className="form-control"  value={techs} onChange={myChangeHandler} name="techs" id="exampleFormControlSelect2">
              <option value="Angular">Angular</option>
              <option value="React">React</option>
              <option value="Vue">Vue</option>
              <option value="Vanilla">Vanilla</option>
            </select>
          </div>
          <div className="form-group">
            <label forhtml="exampleFormControlTextarea1" className="font-weight-bold">Example textarea</label>
            <textarea 
              className="form-control" value={descripcion} 
              onChange={myChangeHandler} maxLength="200" style={{resize: 'none'}} 
              name="descripcion" id="exampleFormControlTextarea1" rows="3">
            </textarea>
          </div>

          <div className="form-group form-check">
            <input type="checkbox" name="check"  checked={check} onChange={() => setChecked(!check)} className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" forhtml="exampleCheck1">Acepto los términos y condiciones</label>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary w-25">Submit</button></div>
        </form>
      </div>
		)
	}
}
