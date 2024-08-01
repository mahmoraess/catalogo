// Crie o estado `listaPedidos`.
// Dentro do componente, crie a função `adicionarItemPedidos`.
// A função recebe um parâmetro, que pode ser nomeado como `objeto`.
// Dentro da função, utilize `setListaPedidos` para adicionar o `objeto` à `listaPedidos`.
// Exemplo: `setListaPedidos([...listaPedidos, objeto]);`
import { useState } from "react";

export default function Home() {

  const [listaProdutos, setProdutos] = useState([
    { id: 1, nome: 'Rainha Vermelha', preco: 'R$ 50,00'},
    { id: 2, nome: 'Espada de Vidro', preco: 'R$ 50,00'},
    { id: 3, nome: 'Prisão do Rei', preco: 'R$ 50,00'}
  ]);

  const [listaPedidos, setListaPedidos] = useState([]);

  const adicionarItemPedidos = (objeto) => {
        setListaPedidos([...listaPedidos,objeto])
  }

  return (
      <div>
          <h1>Livros</h1>

          {
            listaProdutos.map((produto)=>
            <div key={produto.id}>
              <p>{produto.nome}</p>
              <p>{produto.preco}</p>
            </div>
              )
          }
      </div>
  );
}