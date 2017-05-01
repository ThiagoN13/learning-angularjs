/*eslint angular/controller-as-vm: [2,"viewModel"]*/
angular.module('app')
  .controller('listaDeContatosController', _listaDeContatosController)
  .controller('formContatosController', _formContatosController);

function _formContatosController($scope, $document, $state, $location, $resource) {
  var viewModel = this,
    contatoIndice = $state.params.indice,
    modal = $document[0].querySelector('#formModal');

  viewModel.fecharModal = fecharModal;
  viewModel.rotaAnterior = rotaAnterior;
  viewModel.operadoras = [
    {nome: 'Oi', codigo: '11', categoria: 'Celular'},
    {nome: 'Vivo', codigo: '25', categoria: 'Celular'},
    {nome: 'Tim', codigo: '41', categoria: 'Celular'},
    {nome: 'GVT', codigo: '33', categoria: 'Fixo'},
    {nome: 'Embratel', codigo: '21', categoria: 'Fixo'}
  ];

  viewModel.title = 'Salvar Contato';

  //Inicia a rota com a modal aberta.
  abrirModal();


  if(!$state.params.indice) {
    var btnSalvarContato = $document[0].querySelector('[name="salvarContato"]');
    btnSalvarContato.addEventListener('click', salvarContato);
  }else{
    viewModel.contatos = [];
    var ContatoResource = $resource('/contatos');
    ContatoResource.query(function(contatos) {
      viewModel.contatos = contatos;
      viewModel.contato = contatos[contatoIndice];
    });

    var btnAlterarContato = $document[0].querySelector('[name="salvarContato"]');
    btnAlterarContato.addEventListener('click', alterarContato);
  }

  function abrirModal() {
    modal.classList.add('show', 'modal-backdrop');
    modal.style = 'background: rgba(0, 0, 0, .5)';
  }

  function fecharModal(callback) {
    modal.classList.remove('show');
    callback();
  }

  function rotaAnterior() {
    $location.path('#!/contatos');
  }

  function salvarContato() {
    var ContatosResource = $resource('/contatos/salvar');
    var contatosResource = new ContatosResource();
    viewModel.contato.data = new Date();
    contatosResource.contato = angular.copy(viewModel.contato);
    contatosResource.$save();
    rotaAnterior();
    $scope.$emit('contato.reload');
  }

  function alterarContato() {
    var ContatoResource = $resource('/contatos/editar');
    var contatosResource = new ContatoResource();
    viewModel.contato.data = new Date();
    viewModel.contatos.splice(contatoIndice, 1, viewModel.contato);
    contatosResource.contatos = viewModel.contatos;
    contatosResource.$save();
    rotaAnterior();
    $scope.$emit('contato.reload');
  }

}

// contoller para lista contatos
function _listaDeContatosController($state, $location, $resource) {
  var viewModel = this;

  viewModel.selecionarTodos = selecionarTodos;
  viewModel.removerSelecionados = removerSelecionados;
  viewModel.selecionarContato = selecionarContato;
  viewModel.desselecionarContatos = desselecionarContatos;
  viewModel.ordenarPor = ordenarPor;
  viewModel.selecionarFavorito = selecionarFavorito;

  viewModel.title = 'Lista de Telefonica';

  function selecionarTodos(contatos) {
    contatos.forEach(function(contato) {
      if(viewModel.contatosToggle) contato.selecionado = true;
      else contato.selecionado = false;
    });
  }

  function removerSelecionados(contatos) {
    var isSelecionado = contatos.some(function(contato) {
      return contato.selecionado;
    });

    if(isSelecionado) {
      viewModel.contatos = contatos.filter(function(contato) {
        return !contato.selecionado;
      });
      var ContatosResource = $resource('/contatos/remover'),
        contatosResource = new ContatosResource();

      contatosResource.contatos = viewModel.contatos;
      contatosResource.$save();
      viewModel.$emit('contato.reload');
    }

  }

  function selecionarContato(contato) {
    contato.selecionado = true;
  }

  function desselecionarContatos(contatos) {
    viewModel.contatosToggle = false;
    contatos.forEach(function(contato) {
      if(contato.selecionado) {
        contato.selecionado = false;
      }
    });
  }

  function ordenarPor(nomeDoCampo) {
    viewModel.campo = nomeDoCampo;
    viewModel.reverso = !viewModel.reverso;
  }

  function selecionarFavorito(contato) {
    var ContatosResource = $resource('/contatos/editar');
    var contatosResource = new ContatosResource();
    contato.isFavorito = !contato.isFavorito;
    console.log(viewModel.contatos);
    contatosResource.contatos = angular.copy(viewModel.contatos);
    contatosResource.$save();
  }
}
