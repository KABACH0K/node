const player = require('./player.js');
var  Players=[];
var test = new player.Player("Первый игрок",1,300,400,0,null);
test.speed=5;
test.rotate=45;
Players.push(test)


/*
Надо сделать коллизию с перебором примерно так

function collision_players() {
		var dx = player1.x-player2.x;
		var dy = player1.y-player2.y;
		var s = Math.sqrt( dy*dy + dx*dx );
		if(s<90){
			player1.x-=player1.speed*(Math.sin(player1.rotate*Math.PI/180));
			player1.y+=player1.speed*(Math.cos(player1.rotate*Math.PI/180));
			player2.x-=player2.speed*(Math.sin(player2.rotate*Math.PI/180));
			player2.y+=player2.speed*(Math.cos(player2.rotate*Math.PI/180));
		}

}
*/

function loop(){
  for(var i=0;i<Players.length;i++){
    Players[i].update();
  }
}
setInterval(function () {
loop();
},10);
module.exports = {
  Players : Players


}
