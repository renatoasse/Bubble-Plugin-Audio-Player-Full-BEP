function(instance, properties, context) {
var style = $(`<style>
  .${instance.data.sliderclass} {
  -webkit-appearance: none;
  position: absolute;
  top: 40%;
  width: 98%;
  height: 3px;
  border-radius: 3px;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;

background-image: -webkit-gradient(linear,
        left top, 
        right top, 
        color-stop(0%, ${properties.color}),
        color-stop(0%, ${properties.background}));
    
    background-image: -moz-linear-gradient(left center,
        ${properties.color} 0%, ${properties.color} 0%,
        ${properties.background} 0%, ${properties.background} 100%);

}

.${instance.data.sliderclass}:hover {
  opacity: 1;
}

.${instance.data.sliderclass}::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 15px;
  height: 15px;
  border-style: none;
  border-radius: 15px;
  background: ${properties.color};
  cursor: pointer;
}

.${instance.data.sliderclass}::-moz-range-thumb {
  -webkit-appearance: none;
  width: 15px;
  height: 15px;
  border-style: none;
  border-radius: 15px;
  background: ${properties.color};
  cursor: pointer;
}
</style>`);
    
$(style).appendTo('head');    
    
var newPlayer = instance.data.newPlayer;
    
    if(properties.url != null){

  newPlayer.setAttribute("src",properties.url);
  
    } else {
instance.publishState('error',"URL Empty");
    }
   
var slider = document.getElementById(instance.data.sliderid);  
    
     slider.oninput = function() {
    newPlayer.currentTime = this.value;
}
  
     
 newPlayer.addEventListener('loadeddata', function() {

 if (newPlayer.readyState >= 2){ 
    Play();   
 } else {
     instance.publishState('error',"Load data error");
     instance.triggerEvent('error');
 }
});   


 function Play() {   
    if (properties.autoplay === true){
       newPlayer.play(); 
   }
    newPlayer.loop = properties.loop;  
   newPlayer.onpause = function() {
       if (newPlayer.currentTime > 0 && newPlayer.ended === false ){
   instance.publishState('event',"pause");
       } else {
   instance.publishState('event',"stop");
       }
};     
     
    newPlayer.onplay = function() {
   instance.publishState('event',"play");         
};        
  
  newPlayer.onended = function() {
  instance.publishState('event','ended');    
  instance.triggerEvent('ended');
};   

     
     if (newPlayer.duration > 0) {
    instance.publishState('durationvalue',newPlayer.duration);
    slider.setAttribute("max",newPlayer.duration);
     }
     
     
    var hd = Math.floor(newPlayer.duration / 3600);
    var md = Math.floor(newPlayer.duration % 3600 / 60);
    var sd = Math.floor(newPlayer.duration % 3600 % 60);  
   
    var showHD;
    var showMD ;
    var showSD;
   
   
   showHD = hd > 0 ? hd + ":" : "";
   
   if (md === 0) {
     showMD = "00:"
   } else if (md < 10) {
     showMD = "0" + md + ":"
   } else showMD = md + ":"
   
   if (sd === 0) {
     showSD = "00"
   } else if (sd < 10) {
     showSD = "0" + sd
   } else showSD = sd
       
       var display = showHD + showMD + showSD;
       instance.data.duration = display;
       instance.publishState('duration',display);
     
   newPlayer.ontimeupdate = function() {
       
      slider.value = newPlayer.currentTime;
    instance.publishState('currenttimevalue',newPlayer.currentTime);
       
    var val = ($(slider).val() - $(slider).attr('min')) / ($(slider).attr('max') - $(slider).attr('min'));
    var percent = val * 100;
       
    $(slider).css('background-image', '-webkit-gradient(linear, left top, right top, ' +
        'color-stop(' + percent + '%, '+ properties.color +'), ' +
        'color-stop(' + percent + '%, '+ properties.background +')' +
        ')');

    $(slider).css('background-image',
        '-moz-linear-gradient(left center, '+ properties.color +' 0%, '+ properties.color +' ' + percent + '%, '+ properties.background +' ' + percent + '%, '+ properties.background +' 100%)');

         
    var hct = Math.floor(newPlayer.currentTime / 3600);
    var mct = Math.floor(newPlayer.currentTime % 3600 / 60);
    var sct = Math.floor(newPlayer.currentTime % 3600 % 60); 
    
    var showH ;
    var showM ;
    var showS;
   
   
   showH = hct > 0 ? hct + ":" : "";
   
   if (mct === 0) {
     showM = "00:"
   } else if (mct < 10) {
     showM = "0" + mct + ":"
   } else showM = mct + ":"
   
   if (sct === 0) {
     showS = "00"
   } else if (sct < 10) {
     showS = "0" + sct
   } else showS = sct
      
       var CurrentTime = showH + showM + showS;
       instance.publishState('currenttime',CurrentTime); 
       
   }
    }
}