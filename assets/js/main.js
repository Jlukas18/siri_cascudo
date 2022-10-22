function trocaTela() {
  document.getElementById('page-todos').setAttribute('hidden', true)
  document.getElementById('page-novos').removeAttribute('hidden')
}

function exibirTelalistagem() {
  document.getElementById('page-novos').setAttribute('hidden', true)
  document.getElementById('page-todos').removeAttribute('hidden')
}


let buscar = document.getElementById('buscar2')
let preco = document.getElementById('preco')
let codigoProduto = document.getElementById('codigo-produto')
let produto = document.getElementById('produto')
let tbody = document.getElementById('tbody')
let tbodyPedidos=document.getElementById('tbodyPedidos')
let pedidos = []
let quantidade=document.getElementById('quantidade')
let cont=0;
let deliveryInput=document.getElementById('delivery-Input')
//let salaoInput=document.getElementById("salao-Input")
let valorProdutos=[];


let listaProdutos = [
  {
    codigo: 1001,
    product: 'Super SMACH COMBO Progromado -Hamburguer + Fritas',
    price: 55
  },
  {
    codigo: 1002,
    product: 'SMACH VariavelBurguer -Hamburguer com bacon',
    price: 45
  },
  {
    codigo: 1003,
    product: 'SMACH BUG EM PROG - Hambuerguer meio torto',
    price: 25
  },
  {
    codigo: 1004,
    product: 'Combo Econimico SMACH Char 1 - PAo com carne ',
    price: 15
  },
  {
    codigo: 1005,
    product: 'Especial SMACH CSS - Hambuguer colorido e alinhado',
    price: 65
  },
  {
    codigo: 2001,
    product: 'Refrigerante 350ml',
    price: 8
  },
  {
    codigo: 2002,
    product: 'Agua 500ml',
    price: 5
  },
  {
    codigo: 2003,
    product: 'Suco 350ml',
    price: 7
  },
  {
    codigo: 3001,
    product: 'Sorvete 300ml',
    price: 15
  },
  {
    codigo: 3002,
    product: 'Sobremesa doce SMACH ARRAY',
    price: 50
  }
]


function filtrarDadosPorNome() {
  let filtrados = []

  if (buscar.value !== '') {
    filtrados = listaProdutos.filter(
      produtos => produtos.codigo == codigoProduto.value
    )
    console.log(filtrados[0].product)
    produto.value = filtrados[0].product
    preco.value = filtrados[0].price
  }
}

function adicionarProdutos() {
  let tr = document.createElement('tr')

  tbody.innerHTML += `
    <tr>
      <td>${codigoProduto.value}</td>
      <td>${produto.value}</td>
      <td>${quantidade.value}</td>
      <td>${preco.value}</td>
    </tr>
    `
  tbody.appendChild(tr)
  valorProdutos.push(valorTotalProdutos())
  console.log(valorProdutos)
  document.getElementById("totalProduto").innerHTML = valorProdutos.reduce((previousValue,currentValue) => previousValue + currentValue, 0)
  
}

function limparDadosInpBuscar() {
  codigoProduto.value = ''
  listarTabelaProdutos(listaPedidos)
}

function limparFormulario() {
  codigoProduto.value = ''
  produto.value = ''
  quantidade.value = ''
  preco.value = ''
  tbody.innerHTML= ''
  exibirTelalistagem()
}


//o <td> tipo(deliveryInput talvez tenha que criar uma função para verificar se e salão ou delivery)

//como faço uma variavel receber o return da função??????

//o <td> valor do pedido tem que receber uma variavel contendo o return da função valorTotalProdutos()


function btnSalvarPedido() {

exibirTelalistagem()
let pedidos=[];
pedidos.push(tbody)

let tr = document.createElement('tr')
let valorTotal=valorTotalProdutos()


tbodyPedidos.innerHTML += 
  `
  <tr>
    <td>${cont}</td>
    <td>${pedidos.produto}</td>
    <td>${document.querySelector("input[name=delivery_1]:checked").value}</td>
    <td>${valorTotal}</td>
    <td>${btnStatus}</td>
  </tr>
  `
tbodyPedidos.appendChild(tr)

  
   //cont++
  
}

function gerarNumeroAleatorio() {
  let x = Math.floor((Math.random() * 1000) + 1);
document.getElementByClass("type").innerHTML = x;

}

// function randomNumber(a,b) {
// 	return Math.floor(Math.random() * (b - a + 1)) + a
// }

//funcao de calcular total dos produtos n esta funcionando corretamente,quantidade esta indefinido?
function valorTotalProdutos(){
  return quantidade.value*preco.value;
}




addEventListener('load', () => adicionarProdutos())

