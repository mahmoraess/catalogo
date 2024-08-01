// Para cada objeto renderizado, adicione um botão.
// Utilize o atributo onClick para o botão.
// No valor do onClick, passe a função adicionarItemPedidos, 
// por exemplo: onClick={() => adicionarItemPedidos(produto)}
// No conteúdo do botão, coloque o texto "Selecionar" ou algo semelhante.
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
              <button onClick={()=> adicionarItemPedidos(produto)}>Selecionar Produto</button>
            </div>
              )
          }
      </div>
  );
}
