import React, { useState } from "react"

function Input() {
  const [nome, setNome] = useState('Pedro')

  return (
    <div>
      <h3>{nome}</h3>
      <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
    </div>
  )
}

export default Input