import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useState, useEffect } from "react";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}


export function RepositoryList() {
  // Geralmente sempre que for causar uma alteração no layout da aplicação jogo num estado (uma troca de valor em uma variavel renderizada)
  // se eu botasse sem o [] do lado de repository eu diria que era apenas um repositorio botando o [] se torna um array de repositorios 
  // <>Repository[] - tipagem generica - um array de Repository
  const [repositories, setRepositories]  = useState<Repository[]>([]);

  // Se eu passar o [] vazio o useEffect vai executar apenas uma vez quando o componente for exibido em tela(renderizado)
  // Cuidado pra não deixar o useEffect sem o segundo parametro, pois vai cair num loop infinito
  // Atualizar uma variavel dentro da função do useEffect que está sendo usada como dependecia (dentro do []) também irá gerar um loop infinito
  // Pois vou acionar o useEffect através da mudança da variavel e dentro dela mudo a variavel novamente e o useEffect será acionado novamente 
  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  },[]);

  /* 
    Se eu der um console.log(repositories) vou perceber que esse console é exbido duas vezes, uma com o array vazio que é o estado inicial do repositorio
    e outra com a informação alterada, por isso devemos ter cuidado, pois cada vez que o useEffect é acionado é como se tudo dentro  da 
    function RepositoryList() fosse executado novamente. 
    Lembrando se uma propriedade for alterada esse comportamento também acontece
    Lembrando também que o que estiver dentro de useEffect só vai ser executado com a mudança do que for colocado na dependencia []
    Em resumo toda vez q o componente for renderizado novamente tudo dentro dessa função será executado novamente
  */
  // console.log(repositories);

  return (
    <section className="repository-list">
      <h1>Lista de repostórios</h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}
        
      </ul>
    </section>
  )
}