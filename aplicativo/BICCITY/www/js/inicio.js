/*jshint browser:true */
/*global $ */

function initial() {
        
   
   // document.getElementById('msg').value="aqui";
        var texto = 0;
        var id = setInterval(frame, 100);
        function frame() {

          if (texto == 100) {
               $("#msg").html("Fazendo login e entrando!!");
               $("#nuser").html("paulo!!");
               clearInterval(id);
              
            //   activate_page("#user"); 
             activate_page("#denuncia");  
                
               return false;
              
            } else {
                texto++;
            }

        }
         
    }



