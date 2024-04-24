function functionPrincipal(callback){
    alert('Hago algo y llamo al callback avisando que terminé');
    callback('Miguel');
}

functionPrincipal(function(nombre){
    alert('me llamo ' + nombre);
});