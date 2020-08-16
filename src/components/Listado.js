import React, { Component } from 'react'
import Persona from './Persona'

export default class Listado extends Component {

	render() {
		const {formulario} = this.props
console.log(formulario);
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

					
			</>
		)
	}

}
