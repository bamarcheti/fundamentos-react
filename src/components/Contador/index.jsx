import React, { Component } from "react"
import './Contador.css'
import Botoes from './components/Botoes'
import Display from './components/Display'
import PassoForm from './components/PassoForm'

class Contador extends Component {
  state = {
    passo: this.props.passo || 1,
    valor: this.props.valor || 0,
  }

  inc = () => {
    this.setState({
      valor: this.state.valor + this.state.passo
    })
  }

  dec = () => {
    this.setState({
      valor: this.state.valor - this.state.passo
    })
  }

  mudarPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso
    })
  }

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <PassoForm passo={this.state.passo} onPassoChange={this.mudarPasso} />

        <Display valor={this.state.valor} />

        <Botoes onInc={this.inc} onDec={this.dec} />
      </div>
    )
  }
}

export default Contador