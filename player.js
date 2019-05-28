var Player = function(name,id,x,y,rotate,img){
    this.x=x;
    this.y=y;
    this.name=name;
    this.id=id;
    this.rotate=rotate;
    this.img=img;
    this.speed=0;
    this.max_speed=5;
    this.hp=100;
    this.rotating=false;
    this.rotating_direction=true;
}
Player.prototype.draw= function(){
  ctx.translate(this.x,this.y);
ctx.rotate(this.rotate*Math.PI/180);
   ctx.translate(-50,-37);
  ctx.drawImage(this.img,0,0);
  ctx.translate(-50,-37);
  ctx.rotate(-(this.rotate*Math.PI/180));
ctx.translate(this.x,this.y) ;
ctx.setTransform(1, 0, 0, 1, 0, 0);
 }

Player.prototype.update=function(){
  if (this.y<45){
    this.y=46;
  }
  if(this.y>720-45){
    this.y=720-46;
  }
  if(this.x<45){
    this.x=46;
  }
  if(this.x>1280-45){
    this.x=1280-46;
  }
  if(this.rotating==true){
    if(this.rotating_direction==true){
      this.rotate-=1.8;
    }else {
      this.rotate+=1.8;
    }
  };

  if(this.speed>this.max_speed){
    this.speed=this.max_speed;
  }
  if(this.speed<0){
    this.speed=0;
  }
  if(this.speed>0){
    this.x+=this.speed*(Math.sin(this.rotate*Math.PI/180));
    this.y-=this.speed*(Math.cos(this.rotate*Math.PI/180))
  }
}
module.exports = {
  Player : Player


}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


/*
Тут тупа конструктор игрока для сервера тут отрисовка
изменение скорости вращение
у пользователя тупа инпут данных
они идут сюда и обрабатываются а потом просто на канвасе
всё отрисовывается

*/
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
