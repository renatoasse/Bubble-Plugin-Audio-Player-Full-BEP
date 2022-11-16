function(instance, properties, context) {
var Mute = instance.data.newPlayer;
 if (instance.data.muted == false){
  Mute.muted = true;
     instance.data.muted = true;
     instance.publishState('mute','On')
 }else {
     Mute.muted = false;
     instance.data.muted =false;
     instance.publishState('mute','Off')
 }
 

}