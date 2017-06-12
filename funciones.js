function verAlerta(titulo,contenido){
    document.getElementById('alerta-titulo').innerHTML = titulo;
    document.getElementById('alerta-mensaje').innerHTML = contenido;
    document.querySelector('.alerta').classList.add('ver');
    setTimeout(function(){
        document.querySelector('.alerta').classList.remove('ver')
    },4000);
    navigator.vibrate('800');
}
function geolocalizar(){            
    //COMPROBAR QUE SE PUEDE GEOLOCALIZAR
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(verPosicion);
    }
}
            
function verPosicion(coordenadas){
    //DENTRO DEL OBJETO COORDENADAS OBTENEMOS EL ATRIBUTO COORDS, QUE DENTRO TIENE LA LONGITUD Y LATITUD
    lat=coordenadas.coords.latitude;
    long= coordenadas.coords.longitude; 
    localStorage.setItem('lat',lat);
    localStorage.setItem('long',long);
    verAlerta('Ubicación guardada','Selecciona el botón de Navegar para ver el mapa.');
}
function posicionUsuario(coordenadas){
    latUser= coordenadas.coords.latitude;
    longUser= coordenadas.coords.longitude; 
    localStorage.setItem('latUser',latUser);
    localStorage.setItem('longUser',longUser);
}
var map;
function mostrarMapa(){
    lati = localStorage.getItem('lat');
    long = localStorage.getItem('long');
    var coordenadas = {lat: parseFloat(lati), lng: parseFloat(long)};
    navigator.geolocation.getCurrentPosition(posicionUsuario);
        latUser=parseFloat(localStorage.getItem('latUser'));
        //longUser=parseFloat(localStorage.getItem('longUser'));
        longUser=-100.0010719;
        var coordenadasUser = {lat: latUser, lng: longUser};
   var map = new google.maps.Map(document.getElementById('mapa'), {
            zoom: 17,
            center: new google.maps.LatLng(lati, long)
        });
        var marker = new google.maps.Marker({
            position:coordenadas,
            icon: "autoMap.png",
            map: map
        });
       var marker1 = new google.maps.Marker({
            position:coordenadasUser,
            icon: "userMap.png",
            map: map
        });
    
}