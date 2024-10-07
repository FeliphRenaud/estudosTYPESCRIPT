import React from 'react'

interface Props {
  name: string
  age: number
  ocupation: string
}

const ShowUser = (props: Props) => {
  return (
    <div>
      <h1> Apresentando o Usuario</h1> 
      <h2>o nome do usuario é: {props.name}</h2>
      <h2>Sua idade é: {props.age}</h2>
      <h2>E ele trabalha como {props.ocupation}</h2>
    </div>
  )
}

export default ShowUser