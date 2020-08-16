import React, { Component } from 'react'

export default class Formulario extends Component {

  state ={
    email: '',
    age: 0,
    select: '',
    techs: ["React"],
    descripcion: '',
    check: false,
    errormessage: '',
  }   

	render() {
    const { guardarForm } = this.props
    const {email, age, select, techs, descripcion, check, errormessage } = this.state

    const setChecked = check => {
      this.setState({...this.state, check})
    }

    const  setForm = (event) => {
      event.preventDefault()
      guardarForm(this.state)
    }

  const myChangeHandler = (event) => {
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

		return (
			<div className="container m-auto">
        <h1 className="text-center">FORMULARIO</h1>
        <form onSubmit={setForm}>
          {errormessage}
          <div className="form-group">
            <label forhtml="exampleFormControlInput1">Email address</label>
            <input type="email" value={email} onChange={myChangeHandler} name="email" className="form-control" id="exampleFormControlInput1" placeholder="name@examplecom"/>
          </div>
          <div className="form-group">
            <label forhtml="exampleFormControlInput1">Edad</label>
            <input type="text" value={age || ''} onChange={myChangeHandler} name="age" className="form-control" id="exampleFormControlInput1" placeholder="Edad"/>
          </div>
          <div className="form-group">
            <label forhtml="exampleFormControlSelect1">Example select</label>
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
            <label forhtml="exampleFormControlSelect2">Example multiple select</label>
            <select multiple className="form-control"  value={techs} onChange={myChangeHandler} name="techs" id="exampleFormControlSelect2">
              <option value="Angular">Angular</option>
              <option value="React">React</option>
              <option value="Vue">Vue</option>
              <option value="Vanilla">Vanilla</option>
            </select>
          </div>
          <div className="form-group">
            <label forhtml="exampleFormControlTextarea1">Example textarea</label>
            <textarea 
              className="form-control" value={descripcion} 
              onChange={myChangeHandler} maxLength="200" style={{resize: 'none'}} 
              name="descripcion" id="exampleFormControlTextarea1" rows="3">
            </textarea>
          </div>

          <div className="form-group form-check">
            <input type="checkbox" name="check"  checked={check} onChange={() => setChecked(!check)} className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" forhtml="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
		)
	}
}
