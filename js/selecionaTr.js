let idEdicao;
let nomeEdicao;
let emailEdicao;
let crmEdicao;

var trClicada = document.querySelector(".tabela");
var tabelaPacientes = document.getElementById("tabela-pacientes");


// Crie um objeto vazio para armazenar os dados de edição
var dadosEdicao = {};





botaoEditar = document.querySelector("#botao-editar")
botaoExcluir = document.querySelector("#botao-excluir")


botaoEditar.disabled = true;
botaoExcluir.disabled = true;
botaoDetalhes.disabled = true;



trClicada.addEventListener("click", function(event) {
  // Remove a classe "selecionada" de todas as <tr> em "tabela-pacientes".
  botaoEditar.disabled = false;
  botaoExcluir.disabled = false;
  botaoDetalhes.disabled = false


  var trs = tabelaPacientes.querySelectorAll("tr");
  trs.forEach(function(tr) {
    tr.classList.remove("selecionada");
  });

  var alvoEvento = event.target;
  var paiDoAlvo = alvoEvento.parentNode;
  paiDoAlvo.classList.add("selecionada");

  // Salvados os dados para enviar para o modal de update
  dadosEdicao.idEdicao = paiDoAlvo.querySelector(".info-id").textContent;
  dadosEdicao.nomeEdicao = paiDoAlvo.querySelector(".info-nome").textContent;
  dadosEdicao.emailEdicao = paiDoAlvo.querySelector(".info-email").textContent;
  dadosEdicao.crmEdicao = paiDoAlvo.querySelector(".info-crm").textContent;
  dadosEdicao.especialidadeEdicao = paiDoAlvo.querySelector(".info-especialidade").textContent;

  //jogar aqui para a pagina de perfil/detalhes

      var nomeDetalhe = document.querySelector("#nome-detalhe");
      //nomeDetalhe.textContent = dadosEdicao.nomeEdicao;
      nomeDetalhe = dadosEdicao.nomeEdicao


  // Agora você tem os dados de edição no objeto "dadosEdicao"
  console.log(dadosEdicao.nomeEdicao)
  console.log(dadosEdicao)
  console.log( dadosEdicao.idEdicao)

  
});


document.addEventListener('click', function(event) {
  if (!isTableOrDescendantOfTable(event.target)) {
    // Aqui você pode realizar a ação desejada para elementos fora das tabelas

    
    botaoEditar.disabled = true;
    botaoExcluir.disabled = true;
    botaoDetalhes.disabled = true



    var trs = tabelaPacientes.querySelectorAll("tr");
  trs.forEach(function(tr) {
    tr.classList.remove("selecionada");
  });
  }
});

// Função para verificar se o elemento ou seus ancestrais são tabelas
function isTableOrDescendantOfTable(element) {
  while (element) {
    if (element.tagName === 'TABLE') {
      return true; // O elemento é uma tabela
    }
    element = element.parentElement; // Verifique o ancestral seguinte
  }
  return false; // Não é uma tabela nem pertence a uma tabela
}




tr = document.querySelector("tr")
tr.addEventListener("mouseover", function() {
  // Quando o mouse passa por cima, você pode adicionar qualquer ação desejada aqui
  // Por exemplo, muda a cor de fundo
});




  

//var nomeDetalhe = document.querySelector("#nome-detalhe");
      //nomeDetalhe.textContent = dadosEdicao.nomeEdicao;
     // nomeDetalhe = dadosEdicao.nomeEdicao




     botaoExcluir.addEventListener("click", function() {
      // Coloque aqui o código a ser executado quando o botão for clicado

      var confirmaExclusao = window.confirm("Você tem certeza de que deseja continuar?");
      if (confirmaExclusao) {

        fetch(`http://localhost:8080/medicos/${dadosEdicao.idEdicao}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
        // Outros cabeçalhos, se necessário
    },
})
.then(response => {
    if (response.ok) {
        console.log(`O médico com ID ${dadosEdicao.idEdicao} foi excluído com sucesso.`);
        location.reload();
    } else {
        console.error(`Falha ao excluir o médico com ID ${dadosEdicao.idEdicao}.`);
    }
})
.catch(error => {
    console.error('Ocorreu um erro durante a exclusão:', error);
});
            


      

  


        console.log(dadosEdicao.idEdicao + "excluido")

        
      }

  });


    //  var alvoEvento = event.target;
    //  var paiDoAlvo = alvoEvento.parentNode;

    //  dadosEdicao.idEdicao = paiDoAlvo.querySelector(".info-id").textContent;



    