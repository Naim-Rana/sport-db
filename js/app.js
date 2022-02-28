const allPlayers =async () => {
    const searchValue = document.getElementById("search-box").value;
    document.getElementById("search-box").value='';
    const url =`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
    
    const res =await fetch(url);
    const data =await res.json();
    showPlayersDetails(data.player);
    console.log(data);
    console.log(data.player);
    console.log(data.player[0].strPlayer);
}
const showPlayersDetails = (players) => {
    console.log(players);
    const parent = document.getElementById("player-container");
    for(const player of players){
        console.log(player);
        // const parent = document.getElementById("player-container");

        const div = document.createElement("div");
        div.innerHTML =`
            <div class="card p-3 border  mb-3">
                    <div class="pro-pic w-50 mx-auto">
                    <img class="w-100"src="${player.strThumb}" alt="">
                    </div>
                    <div class="w-50 mx-auto">
                        <h4 class=" text-center"> ${player.strPlayer} </h4>
                        <h6 class="text-center"> ${player.strNationality}</h6>
                        <p>Description</p>
                        <div class="all-button">
                            <button class="btn py-1 px-2  btn-danger">Delete</button>
                            <button onclick="details('${player.strPlayer}','${player.idPlayer}')" class="btn py-1 px-2 btn-success">Details</button>
                        </div>
                    </div>
                
            </div>
        `;
        parent.appendChild(div);
    }
   
}

const details =async (playerName,playerId) => {
    console.log("player name:",playerName ,' ','id:',playerId);
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${playerId}
    `;
    // console.log(url);
    const res =await fetch(url);
    const data =await res.json();
    // console.log
    displayDetails(data.players[0]);
}

const displayDetails = (player) => {
    console.log(player);
    const detailsContainer = document.getElementById("details-container");
    const div = document.createElement("div");
    div.innerHTML =`
        <div class="pro-pic w-100 mx-auto">
            <img class="w-100"src="${player.strThumb}" alt="">
        </div>
        <div class="w-50 mx-auto">
            <h4 class=" text-center"> ${player.strPlayer} </h4>
            <h6 class="text-center"> ${player.strNationality}</h6>
            <p>Description</p>
            <div class="all-button">
                <button class="btn py-1 px-2  btn-danger">Delete</button>
                <button onclick="details('${player.strPlayer}','${player.idPlayer}')" class="btn py-1 px-2 btn-success">Details</button>
            </div>
        </div>
    `;
    detailsContainer.appendChild(div);
}