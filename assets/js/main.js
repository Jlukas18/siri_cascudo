
let listaPedidos= [
  {
    id: 1001,
    product: "Super SMACH COMBO Progromado -Hamburguer + Fritas",
    price: R$55,
    
  },
  {
      id: 1002,
      product: "SMACH VariavelBurguer -Hamburguer com bacon",
      price: R$45,
      
  },
  {
    id: 1003,
    product: "SMACH BUG EM PROG - Hambuerguer meio torto",
    price: R$25,
    
  },
  {
      id: 1004,
      product: "Combo Econimico SMACH Char 1 - PAo com carne ",
      price: R$15,
      
  },
  {
      id: 1005,
      product: "Especial SMACH CSS - Hambuguer colorido e alinhado",
      price: R$65,
      
  },
  {
    id: 2001,
    product: "Refrigerante 350ml",
    price: R$8,
    
},
{
  id: 2002,
  product: "Agua 500ml",
  price: R$5,
  
},
{
  id: 2003,
  product: "Suco 350ml",
  price: R$7,
  
},
{
  id: 3001,
  product: "Sorvete 300ml",
  price: R$15,
  
},
{
  id: 3002,
  product: "Sobremesa doce SMACH ARRAY",
  price: R$50,
  
},
  
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


