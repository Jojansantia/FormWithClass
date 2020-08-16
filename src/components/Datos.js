import React, { Component } from 'react'

export default class Datos extends Component {
	render() {
		const {form} = this.props
		const {email, age, techs, descripcion } = form
		return (
			<>
				<div className="card m-1" style={{width: '48%'}}>
					<div className="card-body">
						<h5 className="card-title">{email}</h5>
						<h6 className="card-subtitle mb-2 text-muted">{age} años</h6>
						<p className="card-text flex-wrap">{descripcion}</p>
						<div className="flex-wrap flex-row d-flex">
						<p className="">Tecnologias:</p>
						{
							techs.map((tec, index) => (
								<p className="mx-1 " key={index}>{tec}</p>
							))
						}
						</div>
					</div>
				</div>
			</>
		)
	}
}
