$(document).ready(function(){
  
   if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      
      var lon = position.coords.longitude;
      var lat = position.coords.latitude;
      var url = "https://fcc-weather-api.glitch.me/api/current?lon=" + lon + "&lat=" + lat;
      
    
      
      $.getJSON(url, function(data){
        var temp;
        temp = Math.round(data.main.temp);
        var fTemp;
        var cTemp = Math.round(data.main.temp);
        var tempSwap = true;
        var location = data.name;
        var country = data.sys.country;
        var weather = data.weather[0].description;
        var weatherIcon = data.weather[0].icon;
        console.log(data);
        fTemp = Math.round((temp * (9/5) + 32));
   
        
        $("#fTemp").html(fTemp + " &#8457;");
        
        $("#fTemp").click(function(){
          if(tempSwap === false){
              $("#fTemp").html(fTemp + " &#8457;");
              tempSwap = true;
          }else{
            $("#fTemp").html(cTemp + " &#8451;");
            tempSwap = false;
          }
        });
        
        $("#location").html(location + ", " + country);
        $("#weatherIcon").append("<img src=" + weatherIcon + '">')
        $("#weather").html(weather);

        
      });
     
    });
   }
 
  
});