const formulario = document.getElementById('contenedor');
//evento
formulario.addEventListener("submit",eventoform,)
const val1 =400000;


//finciones

function eventoform(e){
    e.preventDefault();
    const cantidad =document.getElementById('cantidad').value ;
    //const color = document.getElementById('color').value;
    const total =cantidad*val1;
    const respuesta = document.getElementById('print');
    const op = document.getElementById('color').value;
   
    
    if(op==='rojo'){
        respuesta.innerHTML=`<h1>total:$ ${total}</h1>
        <h1>Cantidad: ${cantidad}</h1>
        <style>
        div{
            width: 30px;
            height: 30px;
            background-color:red;
            border-radius:50%;
        }
        </style>
        <div></div>
        `;
        
    }else if(op==='verde'  ){
        respuesta.innerHTML=`<h1>total:$ ${total}</h1>
        <h1>Cantidad: ${cantidad}</h1>
        <style>
        div{
            width: 30px;
            height: 30px;
            background-color:green;
            border-radius:50%;
        }
        </style>
        <div></div>
      
        `;   
    }else if(op==='azul'  ){
        respuesta.innerHTML=`<h1>total:$ ${total}</h1>
        <h1>Cantidad: ${cantidad}</h1>
        <style>
        div{
            width: 30px;
            height: 30px;
            background-color:blue;
            border-radius:50%;
        }
        </style>
        <div></div>
      
        `; 

}else if(op==='negro'  ){
    respuesta.innerHTML=`<h1>total:$ ${total}</h1>
    <h1>Cantidad: ${cantidad}</h1>
    <style>
    div{
        width: 30px;
        height: 30px;
        background-color:black;
        border-radius:50%;
    }
    </style>
    <div></div>
  
    `; 
}
}