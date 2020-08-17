import React, { Component } from 'react'
import Datos from './Datos'

export default class Listado extends Component {

	render() {
		const {formulario, setScreen , onRemove, onEdit} = this.props

		return (
			<>
        <h1 className="text-center">LISTADO</h1>
				<div className="d-flex flex-wrap flex-row justify-content-around">
					{formulario.length === 0 ?
						<h3>-- No hay información -- </h3>
					:
					(
						formulario &&
							formulario.map((form, index) => (
								<Datos
									key={index}
									onRemove={onRemove}
									onEdit={onEdit}
									form={form}
								/>
							))
					)}
				</div>
				<div className="text-center">
					<button type="button" onClick={setScreen} className="btn btn-success w-25 mt-2">Ir a Formulario</button>
				</div>
			</>
		)
	}

}
