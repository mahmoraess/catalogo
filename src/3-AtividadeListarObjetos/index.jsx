// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaProdutos`
// dentro desse `<div>`.
import { useState } from "react";

export default function Home() {

  const [listaProdutos, setProdutos] = useState([
    { id: 1, nome: 'Rainha Vermelha', preco: 'R$ 50,00'},
    { id: 2, nome: 'Espada de Vidro', preco: 'R$ 50,00'},
    { id: 3, nome: 'Prisão do Rei', preco: 'R$ 50,00'}
  ]);

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