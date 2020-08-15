import React, { Component } from 'react'
import Persona from './Persona'

export default class Listado extends Component {

	render() {
		const {formulario} = this.props
		return (
			<>
				{
					formulario &&
						formulario.map(form => (
							
								<Persona
									key={form.age}
									form={form}
								/>
							
						))
				
				}
					
			</>
		)
	}

}
