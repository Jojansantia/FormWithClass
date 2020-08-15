import React, { Component } from 'react'

export default class Formulario extends Component {

  

	render() {
    const {state, myChangeHandler, setForm} = this.props
    const {email, age, select, techs, descripcion, errormessage } = state

		return (
			<div className="container m-auto">
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
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="form-group">
            <label forhtml="exampleFormControlSelect2">Example multiple select</label>
            <select multiple className="form-control" value={techs} onChange={myChangeHandler} name="techs" id="exampleFormControlSelect2">
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
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
		)
	}
}
