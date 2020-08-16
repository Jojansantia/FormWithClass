import React, { Component } from 'react'
import Persona from './Persona'

export default class Listado extends Component {

	render() {
		const {formulario, setScreen} = this.props

		return (
			<>
        <h1 className="text-center">LISTADO</h1>
				<div className="d-flex flex-wrap flex-row justify-content-around">
					{
						formulario &&
							formulario.map((form, index) => (
								<Persona
									key={index}
									form={form}
								/>
							))
					}
				</div>
				<div className="text-center">
					<button type="button" onClick={setScreen} className="btn btn-primary m-auto">Ir a Formulario</button>
				</div>
			</>
		)
	}

}
