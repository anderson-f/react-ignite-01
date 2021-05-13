import { useState } from 'react';

// sempre que começa com use é um hook
// O useState substitui o two way data binding fazendo com que a dom monitore apenas os itens que estão no useState

// imutabilidade

// usuarios = ['diego3g', 'diegof', 'danileao']
// usuarios.push('rafacamarda')

// novoUsuarios[...usuarios, 'rafacamarda]

// O conceito de imutabilidade é ao invés de alterar algo existe é criar uma cópia e iniciar uma nova variavel
// alterando algo existente é mais custoso

export function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    console.log('Incrementing')
    setCounter(counter + 1)
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>Increment</button>
    </div>
  )
}