// type e interface servem basicamente pra mesma coisa.
interface RepositoryItemProps {
  // Só precisamos tipar os atributos que são utilizados na aplicação e não tudo que vem da api
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export function RepositoryItem(props: RepositoryItemProps) {


  return (
    <li>
      <strong>{props.repository?.name ?? 'Default'}</strong>
      <p>{props.repository?.description ?? 'Default'}</p>

      <a href={props.repository?.html_url ?? 'Default'}>
        Acessar reposiorio
      </a>
  </li>
  );
}