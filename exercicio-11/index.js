function addPlayer() {
    const position = document.getElementById("position").value
    const player = document.getElementById("player").value
    const numberPlayer = document.getElementById("numberPlayer").value

    // console.log({position, player, numberPlayer})
    if (confirm(`Deseja escalar o seguinte jogador: Posição: ${position} Nome: ${player} Camiseta: ${numberPlayer}`)) {
        const players = document.getElementById("players")
        const playerItem = document.createElement("li")
        playerItem.id = `player-${numberPlayer}`
        playerItem.innerText = `${position}: ${player} (n° ${numberPlayer})`
        players.appendChild(playerItem)
        console.log(playerItem.id)
        document.getElementById("position").value = ""
        document.getElementById("player").value = ""
        document.getElementById("numberPlayer").value = ""

    }  else {
        document.getElementById("position").value = ""
        document.getElementById("player").value = ""
        document.getElementById("numberPlayer").value = ""
    }
    
}

function removePlayer() {
    const players = document.getElementById("players")
    const numberPlayer = document.getElementById("numberToRemove").value
    const removedPlayer = document.getElementById(`player-${numberPlayer}`)

    if (removedPlayer == null) {
        alert("Jogador Invalido!")
    } else {
        
        if (confirm(`Deseja remover o seguinte jogador? ${removedPlayer.innerText}`)) {
            players.removeChild(removedPlayer)
        }
    }
    document.getElementById("numberToRemove").value = ""

}