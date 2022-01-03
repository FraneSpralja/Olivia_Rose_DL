$(function(){
    $("a").click(function(event){
        // con este IF se asegura que 'this.hash' tenga valor antes de anular el comportamiento determinado (scroll rápido)
        if (this.hash !==""){
            // Previene el comportamiento de click predeterminado
            event.preventDefault();
            // Guarda ek valor del hash en una variable llamada gato
            var gato = this.hash;
            $('html, body').animate({
                //Usa el método 'animate' para animar el scroll y hacerlo de una forma suave
                scrollTop: $(gato).offset().top
            }, 800, function(){
                //800 identifica el numero opcional de milisegundos que se demora cada sección en llegar al área
                window.location.hash = gato;
                // agrega el hash(#) a la URL cuando haya terminado de desplazarse (comportamiento de click predeterminado)
            })
        } //fin del IF
    });
    $('[data-toggler="popover"]').popover();
});
