   function SalvarAnotacao(){
    novaAnotacao = document.getElementById("anotacoes").value
    novoTel = document.getElementById("tele").value

    document.getElementById("anotacoes").valeu = ""
    document.getElementById("tele").valeu = ""

    document.getElementById("anotacoes-salvas").innerHTML += "<p>" + novaAnotacao + " " + novoTel + "</p>"



    document.getElementById("anotacoes").valeu = ""
    document.getElementById("tele").valeu = ""

    alert("Anotação salva com sucesso")


localStorage.listaContatos =  novaAnotacao

}

document.getElementById("botao-salvar").addEventListener("click",function(){
    SalvarAnotacao()
  
    
})

if(localStorage.listaContatos){
document.getElementById("lista-Contatos").innerHTML = localStorage.
listaContatos
}
