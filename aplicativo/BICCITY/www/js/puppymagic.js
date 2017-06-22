/*jshint browser:true */
/*global $ */

$(document).ready(function(){
    var $pv=0.2;
    var $np=0;
    $(document).on("click", "#comida", function(evt){
        
        var $valor = $("#bval").html();
        
        
        if($valor != 0){
            
            if($valor==5){
                document.getElementById("imgpuppy").src = "../images/panda2.png";
            }
            
            $valor = $valor - 1;
            $("#bval").html($valor);
            
            $np = $np + 2;
            $("#percent").html($np);
            
            $pv = $pv + 0.2;
            $("#progress").css('width', $pv + '%');
            
        }
        
        if($valor ==0){
            $("#bval").html($valor);
            
            document.getElementById("imgpuppy").src = "../images/panda3.png";
             
            $("#progress").css('width', $pv + '%');
            document.getElementById("pmsg").style.display = "block";
            //alert(" Obrigado por alimentar nosso bebê,\n Agora ele está feliz e bem alimentado!",function(){},"");  
            
        }
        
        
    });
    
    
});