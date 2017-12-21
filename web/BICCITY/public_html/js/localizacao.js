/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var latitude;
var longitude;
var geocoder;
var cidadeEndereco;
var cidadeLocal;

var onSuccess  = function(position) {
        latitude=position.coords.latitude;
        longitude=position.coords.longitude;
        geocoder = new google.maps.Geocoder();
        RetornaLocal();
    };

    // onError Callback recebe a Pssição de Erro
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    /*Função get endereço String via coordenadas de latitude e longitude*/

function RetornaLocal() {
  var latlng = new google.maps.LatLng(latitude,longitude);
  geocoder.geocode({'latLng': latlng}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
         if (results[1]) {
        //Pegando endereço Completo
        cidadeEndereco=results[0].formatted_address.toString();
             
        //find country name
        for (var i=0; i<results[0].address_components.length; i++) {
            for (var b=0; b<results[0].address_components[i].types.length;b++) {

              //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
                if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                    //this is the object you are looking for
                    city= results[0].address_components[4];
                    state= results[0].address_components[5];
                    
                    
                    break;
                }
            }
        }
        
       // $("#loc").html(city.long_name +","+ state.short_name );
        document.getElementById('loc').innerHTML= city.long_name +","+ state.short_name ;
       // $("#ct1").html(city.long_name);
        //city data
        ////alert(latitude);
        //alert(pais);
		//alert(city.long_name +", " + state.short_name);
        //cidadeLocal=city.short_name;
         
          
        } else {
          alert("Nenhum Resultado encontrado!");
        }
      } else {
        alert("Geocoder falhou devido: " + status);
      }
    });
}