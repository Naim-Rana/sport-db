const allPlayers =async () => {
    const searchValue = document.getElementById("search-box").value;
    document.getElementById("search-box").value='';
    const url =`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
    
    const res =await fetch(url);
    const data =await res.json();
    console.log(data);
    console.log(data.player);
    console.log(data.player[0].strPlayer);
}
