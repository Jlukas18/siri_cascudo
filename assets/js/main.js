function trocaTela() {
  document.getElementById('page-todos').setAttribute('hidden', true)
  document.getElementById('page-novos').removeAttribute('hidden')
}

let buscar = document.getElementById('buscar2')
let preco = document.getElementById('preco')
let codigoProduto = document.getElementById('codigo-produto')
let produto = document.getElementById('produto')
let tbody = document.getElementById('tbody')

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
      pedidos => pedidos.codigo == codigoProduto.value
    )
    console.log(filtrados[0].product)
    produto.value = filtrados[0].product
    preco.value = filtrados[0].price
  }
}

function adicionarProutos() {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${codigoProduto.value}</td>
    <td>${produto.value}</td>
    <td>${quantidade.value}</td>
    <td>${preco.value}</td>
    `
  tbody.appendChild(tr)
}

function limparDadosInpBuscar() {
  codigoProduto.value = ''
  listarTabelaProdutos(listaPedidos)
}

addEventListener('load', () => adicionarProutos())
