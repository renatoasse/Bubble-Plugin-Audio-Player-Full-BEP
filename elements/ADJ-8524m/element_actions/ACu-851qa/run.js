function(instance, properties, context) {
instance.publishState('event',"stop");    
instance.data.newPlayer.currentTime = 0;

instance.data.newPlayer.pause();
   instance.publishState('currenttime',"00:00");
   instance.publishState('currenttimevalue',0);
}