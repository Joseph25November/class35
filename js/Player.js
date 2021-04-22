class Player{
constroctor(){

}
getCount(){
    var croc = database.ref("playerCount")
    croc.on("value",function(data){
      playerCount = data.val()
    })
  }
  updateCount(state){
    database.ref("/").update({
      playerCount:state
    })
  }
  update(name){
      var sponge = "player" + playerCount
      database.ref(sponge).set({
          name:name
      })
  }
}

