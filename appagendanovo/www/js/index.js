   function SalvarAnotacao(){
    novaAnotacao = document.getElementById("anotacoes").value
    novoTel = document.getElementById("tele").value

    document.getElementById("anotacoes").valeu = ""
    document.getElementById("tele").valeu = ""

    document.getElementById("anotacoes-salvas").innerHTML += "<p>" + novaAnotacao + " " + novoTel + "</p>"

    document.getElementById("anotacoes").valeu = ""
    document.getElementById("tele").valeu = ""

    alert("Anotação salva com sucesso")
}

document.getElementById("botao-salvar").addEventListener("click",function(){
    SalvarAnotacao()
    navigator.vibrate(3000);
    // navigator.vibrate([1000,1000,1000])
})
