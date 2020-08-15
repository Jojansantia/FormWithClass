import React, { Component } from 'react'

export default class Persona extends Component {
    render() {
        const {form} = this.props
        const {email} = form
        return (
            <div>
                <h1>
                    {email || null}
                </h1>
            </div>
        )
    }
}
