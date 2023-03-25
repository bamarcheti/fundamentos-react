import React from 'react'
import produtos from '../../data/produtos.js'

function Repeticao() {
  return (
    <div>
      <h2>Repetição</h2>
      <ul>
        {produtos.map((prod) => (
          <li key={prod.id}>
            {prod.id} - {prod.nome} = R$ {prod.preco}
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Repeticao
