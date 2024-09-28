document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  
}
function mudar(results){
    var cores = ["primary","secondary",  "success",  "info",  "warning", "danger", "light", "dark"];
    var temp = 0;

   if(cores.indexOf(results.input1) > 0){

    if(results.buttonIndex === 1){
        document.getElementById("body").className = `bg-${results.input1} text-white`;
    }
}
else{
    navigator.notification.alert("inválido");
}
}

function mudaTema() {
    navigator.notification.prompt(
        'Deseja mudar o tema?',  // message
        mudar,				// callback to invoke with index of button pressed
        'Tema',            // title
        'Sim,Não' ,        // buttonLabels
        'dark'        
    );
}