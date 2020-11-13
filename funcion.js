function color1(){
        document.getElementById("opc1");
        document.body.style.backgroundColor=' #F5A9E1';
}

function color2(){
    document.getElementById("opc2");
        document.body.style.backgroundColor='#FA8258';
}
function color3(){
    document.getElementById("opc2");
        document.body.style.backgroundColor='#E6E6E6';
}
var lista = document.getElementById('lista');
lista.style.display='none'

function mostrarlista(){
    lista = document.getElementById('lista');
    var estado = lista.style.display;
    if(estado == 'none')
        lista.style.display = 'block';
    else
        lista.style.display = ' none';
}

var productos = document.getElementById('salida');
productos.style.display='none'

function compras(){
    productos = document.getElementById('salida');
    var estado = productos.style.display;
    if(estado == 'none')
        productos.style.display = 'inline';
   

    var _nom = document.getElementById("producto").value;
    var _precio = document.getElementById("precio").value;
    var _cantidad = document.getElementById("cantidad").value;
    var _importe = _cantidad * _precio;
    
    
    
    var fila="<tr><td>"+_nom+"</td><td>"+_precio+"</td><td>"+_cantidad+"</td><td>"+_importe+"</td></tr>";

    var btn = document.createElement("TR");
    
   	btn.innerHTML=fila;
    document.getElementById("salida").appendChild(btn);
}
var contador = 0;
function likes(){
  contador++;
  document.getElementById('info').innerHTML=contador + " Me gusta";
    
}
