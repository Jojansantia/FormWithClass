import React, { Component } from 'react'

export default class Datos extends Component {
	render() {
		const {email, age, select, techs, descripcion } = this.props.form
		return (
			<>
				<div className="card m-1 rounded-lg shadow col-5" >
					<div className="card-body">

						<div className="d-flex flex-row  flex-wrap justify-content-between align-items-center">
							<h5 className="card-title">{email}</h5>
							<h6 className="card-subtitle mb-2 text-muted">{age} años</h6>
						</div>

							<h6 className="font-weight-bold">Descripción:</h6>
							<p className="card-text ">{descripcion}</p>

						<div className="flex-wrap flex-row d-flex">
							<p className="font-weight-bold">Tecnologias:</p>
							{
								techs.map((tec, index) => (
									<div key={index} className="d-flex flex-row">
										<p className="mx-1 " key={index}>{tec}</p>
										{techs[techs.length - 1] !== tec && ","}
									</div>
								))
							}
						</div>

						<div className="d-flex flex-row">
							<h6 className="font-weight-bold">Lenguaje:</h6>
							<p className="mx-1 ">{select}</p>
						</div>

					</div>
				</div>
			</>
		)
	}
}
