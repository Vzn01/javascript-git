function addPlayer(){
    var posicao = document.getElementById('posicao').value
    var name = document.getElementById('Name').value
    var number = document.getElementById('number').value

    var confirmation = confirm('Escalar ' + name + ' na posição ' + posicao)

    if(confirmation)
    {
        var teamList = document.getElementById('team-list')
        var playerItem = document.createElement('li')
        playerItem.id = "player-"+number
        playerItem.innerText = posicao + " :" +name+ " ( " + number +" )  "
        teamList.appendChild(playerItem)

        document.getElementById("position").value = ""
        document.getElementById("name").value = ""
        document.getElementById("number").value = ""
    }
}

function RemoveJogador(){
        var number = document.getElementById("numeroRemover").value;
        var jogadorRemove = document.getElementById("player-"+number);

        var confirmacao = confirm("Você deseja excluir o jogador: "+jogadorRemove.innerText + "?" )

        if(confirmacao){
            document.getElementById("team-list").removeChild(jogadorRemove);
            document.getElementById("numeroRemover").value = "";
        }

}