document.addEventListener('DOMContentLoaded', function () {


    // input_sexo

    let input_nombre = document.getElementById("input_nombre");
    let input_email = document.getElementById("input_email");
    let input_mensaje = document.getElementById("input_mensaje");
    let boton_enviar = document.getElementById("boton_enviar");
    boton_enviar.addEventListener('click', function (e) {

      e.preventDefault();

   
    // enviar_consulta);
    

        //Expresion regluar utilizada para indentificar un email valido
        var re = /\S+@\S+\.\S+/;











        if (input_nombre.value.length > 0 && input_mensaje.value.length > 0 && re.test(input_email.value) ) {
           
          //console.log("asd");
          sendData();
           
        }
      
    } );

    //-----------------------------------------AJAX----------------------------
    let baseURL = 'https://web-unicen.herokuapp.com/api/groups/';
    let groupID = '26';
    let collectionID = 'test_test';
    
    // let contenedor = document.querySelector("#result");
    
    function sendData(){





      
      var sexo = document.getElementsByName("sexo");
      var input_sexo = "No Definido";

      for(var i = 0; i < sexo.length; i++) {
        if(sexo[i].checked)
        input_sexo = sexo[i].value;
      }









     
      // let name = document.querySelector("#name").value;

      let data = {
        "thing": {
           "sexo": input_sexo,
          "nombre": input_nombre.value,
          "email": input_email.value,
          "mensaje": input_mensaje.value
        }


      };
      fetch(baseURL + groupID + "/" + collectionID, {
        "method": "POST",
        "headers": { "Content-Type": "application/json" },
        "body": JSON.stringify(data)
      }).then(function(r){
        if(!r.ok){
          console.log("error")
        }
        // console.log(r.json());
        return r.json()
      })
      .then(function(json) {
        alert("Consulta enviada!");
        // console.log(JSON.stringify(json));
        // contenedor.innerHTML = JSON.stringify(json);
      })
      .catch(function(e){
        console.log(e)
      })
    
    }
    
    
    





});