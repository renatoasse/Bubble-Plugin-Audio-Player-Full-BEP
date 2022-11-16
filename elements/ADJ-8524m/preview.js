function(instance, properties) {
var sliderclass = "sliderclass"+Math.random().toString(36).substring(2,7);
var sliderid = "slider"+Math.random().toString(36).substring(2,7);    
var slider = $(`<div>
  <input type="range" class="${sliderclass}" id="${sliderid}" min="0" value="0">
</div>`);

 var style = $(`<style>
  .${sliderclass} {
  -webkit-appearance: none;
  position: absolute;
  top: 40%;
  width: 98%;
  height: 3px;
  border-radius: 3px;
  background: ${properties.background};
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.${sliderclass}:hover {
  opacity: 1;
}

.${sliderclass}::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 15px;
  height: 15px;
  border-style: none;
  border-radius: 15px;
  background: ${properties.color};
  cursor: pointer;
}

.${sliderclass}::-moz-range-thumb {
  -webkit-appearance: none;
  width: 25px;
  height: 25px;
  border-style: none;
  border-radius: 15px;
  background: ${properties.color};
  cursor: pointer;
}
</style>`);
    
$(style).appendTo('head');  

$(slider).appendTo('body');    

}