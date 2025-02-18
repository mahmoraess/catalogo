// Dentro do `map`, crie um botão para cada item.
// Utilize o atributo `onClick` para definir a ação do botão.
// No valor do `onClick`, chame a função `removerItemPedidos`.
// Passe o identificador (`id`) do item como parâmetro para `removerItemPedidos`, o mesmo que você usa no `map`.
// No conteúdo do botão, coloque o texto "Remover".
import { useState } from "react";

import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header title="Bem-vindo à Loja de Livros" />
      <Home />
      <Footer desenvolvedor="Maria Antônia Moraes" />
    </div>
  );
}


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

  const removerPedido = (id) => {
    let remover = false;
    let listaAux = listaPedidos.filter((produto) => {
      if (remover == false) {
        if (produto.id !== id) {
            return produto
        } else {
            remover = true;
            return null
        }
      } else {
        return produto
      }
    });
    setListaPedidos(listaAux);
  }

  return (
      <div>
          <h1>Livros</h1>

          {
            listaProdutos.map((produto)=>
            <div key={produto.id}>
              <p>{produto.nome}</p>
              <p>{produto.preco}</p>
              <button onClick={()=> adicionarItemPedidos(produto)}>Selecionar</button>
            </div>
              )
          }
          {
            listaPedidos.map((produto)=>
             <div key={produto.id}>
              <p>{produto.nome}</p>
              <p>{produto.preco}</p>
              <button onClick={()=> removerPedido(produto.id)}>Remover</button>
            </div>
            )
          }
      </div>
  );
}
