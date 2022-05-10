import React from 'react';

//siempre tiene que tener una funcion con el nombre del componente 
function Pelicula() {
  //variable 
  let rating = 5.8;
  let generos = ["action", "drama"];
  return (
    //en un componente solo puedo terminar con una sola etiqueta , no puedo tener muchas sueltas 
    <div>
      <h2>
        titulo de pelicula
      </h2>
      <p>no podria solo tener el h2 y la p , deben estar dentro de un div </p>
      <h3> rating {rating}</h3>
      <p>en vez de usar for usamos map en react </p>
      <ul>
        {
          generos.map(genero =>
            <li>
              este es el genero de  {genero}
            </li>)
        }
      </ul>
    </div>

  );
}


export default Pelicula //siempre tiene que ser exportado 
