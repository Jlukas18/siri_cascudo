
let listaPedidos= [
  {
    id: 1,
    product: "Hamburguer de Siri",
    qty: 5,
    price: 7.8,
    
  },
  {
      id: 2,
      product: "Hamburguer de Siri 2",
      qty: 5,
      price: 7.9,
      
  },
  {
    id: 3,
    product: "Hamburguer de Siri 3",
    qty: 5,
    price: 7.2,
    
  },
  {
      id: 4,
      product: "Hamburguer de Siri 4",
      qty: 5,
      price: 7.3,
      
  },
  {
      id: 5,
      product: "Hamburguer de Siri 5",
      qty: 5,
      price: 7.4,
      
  }
  
];

let buscar = document.getElementById("buscar2");
let precoProduto=document.getElementById("precoProduto");
let codigoProduto=document.getElementById("codigo-produto");

/*function listarTabelaProdutos(filtrados = undefined) {
  console.log('Entrou na função');
  let trTds = "";
  let lista = [];
  let dados = document.getElementById("dados");

  lista = filtrados === undefined ? listaPedidos : filtrados;

  lista.forEach((produtos) => {
    trTds += `<tr><td>${produtos.id}</td>`;
    trTds += `<td>${produtos.product}</td>`;
    trTds += `<td>${produtos.qty}</td>`;
    trTds += `<td>${produtos.price}</td>`;
  });
  dados.innerHTML = trTds;

  if (lista.length === 0) {
   dados.innerHTML = `<tr><td colspan="5">Nenhum nome encontrado</td></tr>`;
  }
}*/

function filtrarDadosPorNome() {
  alert("entrou!!");
  let filtrados = [];

  if (buscar.value.toLowerCase() !== "") {
    filtrados =listaPedidos.filter(produtos=>produtos.id == codigoProduto.value);
  } 
  else {
    filtrados =  listaPedidos;
  }
  console.log(filtrados);
}


/*function CalculaTotalPedido(total,produtos) {
  return total + produtos.price*produtos.qty;
}
document.getElementById("demo").innerHTML = listaPedidos.reduce(Compra, 0);*/ 
//so vai funcionar quando tiver produtos listados na tabela!



function limparDadosDaTelaForm() {
  alert('ai meu deus funciona pelo amor de deus!');
  codigoProduto.value="";
  listarTabelaProdutos(listaPedidos);
}

function trocaTela() {
  document.getElementById('page-todos').setAttribute('hidden', true)
  document.getElementById('page-novos').removeAttribute('hidden')
}

//addEventListener("load", () => listarTabelaProdutos());


