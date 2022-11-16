function(instance, context) {
var audioid = "audio-player"+Math.random().toString(36).substring(2,7);
var audioclassid = "audio-class"+Math.random().toString(36).substring(2,7);
var sliderclass = "sliderclass"+Math.random().toString(36).substring(2,7);
var sliderid = "slider"+Math.random().toString(36).substring(2,7);

 var slider = $(`<input type="range" class="${sliderclass}" id="${sliderid}" min="0" value="0">`);
       
    
instance.data.newPlayer = document.createElement("AUDIO");    
    instance.data.newPlayer.setAttribute("id",audioid);
    instance.data.newPlayer.setAttribute("class",audioclassid);
    instance.data.newPlayer.setAttribute("preload", "metadata");
    instance.data.newPlayer.setAttribute("display","none");
    instance.data.newPlayer.muted = false;
    instance.data.newPlayer.controls = true;
       
    
    // Instances **
 instance.data.audioid = audioid;   
 instance.data.sliderclass = sliderclass; 
 instance.data.sliderid = sliderid;
 instance.data.muted = false;
 instance.publishState('mute','Off');
    
   // Create Elements**
$(slider).appendTo('body');
$(instance.canvas[0]).html(slider)  
}