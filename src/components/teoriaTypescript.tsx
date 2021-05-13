/* 
  Nesse exemplo eu poderia ter uma tarefa de adicionar a cidade e a uff e a partir dai poderia ficar perdido na forma de acessar essa informação
*/
// type User = {
//   name: string
//   email: string
//   address: {
//     city: string
//     state?: string // a interrogação diz que não é obrigatório
//   }
// }
// Qualquer lugar que eu colocar variavel:tipo da variavel o typescript vai reconhecer que tenho q seguir a variavel com esse tipo
// function showWelcomeMessage(user: User) {
//   return `Welcome ${user.name}, your e-mail is ${user.email}. Your city is ${user.address.city} and your state is ${user.address.state}`;
// }

// // automaticamente o ts reconhece o retorno como string
// const message = showWelcomeMessage({
//   name: 'John Doe',
//   email: 'john@doe.com',
//   address: {
//     city: 'New York',
//     state: 'NY',
//   }
// })

// showWelcomeMessage('queijo') // Apesar da minha função teoricamente esperar receber um objeto isso não daria erro devido a tipagem dinamica.

// Cidade - UF