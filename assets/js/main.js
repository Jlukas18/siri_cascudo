
let listaPedidos= [
  {
    id: 1,
    product: "Hamburguer de Siri",
    price: 7.8,
    
  },
  {
      id: 2,
      product: "Hamburguer Bob Esponja",
      price: 7.9,
      
  },
  {
    id: 3,
    product: "Refri",
    price: 7.2,
    
  },
  {
      id: 4,
      product: "Salmão grelhado",
      price: 7.3,
      
  },
  {
      id: 5,
      product: "Salsichão",
      price: 7.4,
      
  }
  
];

let buscar=document.getElementById("buscar2");
let precoProduto=document.getElementById("precoProduto");
let codigoProduto=document.getElementById("codigo-produto");
let produto=document.getElementById('produto');
let qty=document.getElementById('quantidade');
let valor=CalculaTotalProduto();

function trocaTela() {
  document.getElementById('page-todos').setAttribute('hidden', true)
  document.getElementById('page-novos').removeAttribute('hidden')
}

function filtrarDadosPorNome() {
  alert("entrou!!");
  let filtrados = [];

  if (buscar.value.toLowerCase() !== "") {
    filtrados =listaPedidos.filter(pedidos=>pedidos.id == codigoProduto.value);
  } 
 
  //eu preciso filtrar o id,mas o input tem que receber onome do filtrado.Como faz??
  produto.value=filtrados.product;
}

/*function listarTabelaProdutos(filtrados = undefined) {
  console.log('Entrou na função');
  let trTds = "";
  let lista = [];
  let dados = document.getElementById("dados");

  lista = filtrados === undefined ? listaPedidos : filtrados;

  lista.forEach((pedidos) => {
    trTds += `<tr><td>${pedidos.id}</td>`;
    trTds += `<td>${pedidos.product}</td>`;
    trTds += `<td>${pedidos.qty}</td>`;
    trTds += `<td>${pedidos.valor)}</td>`;??????????
  });
  dados.innerHTML = trTds;

  if (lista.length === 0) {
   dados.innerHTML = `<tr><td colspan="5">Nenhum nome encontrado</td></tr>`;
  }
}

CalculaTotalPedido()
*/

//fazer função para adcionar produtos na tabelaProdutos,recebendo dos inputs!


function CalculaTotalProduto(total,produtos) {
  return total + produtos.price*qty;
}



function CalculaTotalPedido(total,pedido) {
  return total + pedido.price;
}
document.getElementById("demo").innerHTML = listaPedidos.reduce(Compra, 0);
//so vai funcionar quando tiver produtos listados na tabela!


function limparDadosInpBuscar() {
  codigoProduto.value="";
  listarTabelaProdutos(listaPedidos);
}

function btnSalvarPedido(){
  //vai trocar de tela(contrario da primeira troca) e vai adcionar o PEDIDO na tabela
  document.getElementById('page-novos').setAttribute('hidden', true)
  document.getElementById('page-todos').removeAttribute('hidden')

}


addEventListener("load", () => listarTabelaProdutos());


