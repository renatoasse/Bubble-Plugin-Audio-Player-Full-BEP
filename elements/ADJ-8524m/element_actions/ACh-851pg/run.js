function(instance, properties, context) {
instance.data.newPlayer.play();
instance.publishState('durationvalue',instance.data.newPlayer.duration);
instance.publishState('duration',instance.data.duration);

}