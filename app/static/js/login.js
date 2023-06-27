$(".input_text").focus(function(){
    $(this).prev('.fa').addclass('glowIcon')
})
$(".input_text").focusout(function(){
    $(this).prev('.fa').removeclass('glowIcon')
})
$(document).ready(function() {
    // Obtener referencia al enlace de inicio de sesión
    var loginLink = $("#loginLink");
  
    // Obtener referencia a la ventana emergente de inicio de sesión
    var loginFormContainer = $("#loginFormContainer");
  
    // Mostrar u ocultar la ventana emergente al hacer clic en el enlace de inicio de sesión
    loginLink.click(function(e) {
      e.preventDefault(); // Evitar que el enlace redirija a una nueva página
      loginFormContainer.toggle(); // Alternar la visibilidad de la ventana emergente
    });
  });