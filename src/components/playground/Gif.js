import React, { Component } from 'react';
import PropsTypes from 'prop-types'

class Gif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gif: "" //empieza como null
    }
  }
  /* es comun tener un */
  apiCall(url,handler){ //handler: consecuencia
    fetch(url)
      .then(response => response.json())
      .then(data => handler(data))
      .catch(error => console.log(error))
  }
  componentDidMount(){
    console.log('me monté ! ')

    this.apiCall("https://api.giphy.com/v1/gifs/random?api_key=FSHnaiOlYd2NXPdn06Qdh64qxmGRVM69&tag=&rating=g", this.mostrarGif)
  }
  mostrarGif = (data)=>{
    console.log("soy" + data);
    this.setState({
      gif: data.data.image_url
      
    })
    
  }
  componentDidUpdate(){
    console.log('me actualice :) ');
   /* prueba playground
    fetch("https://api.giphy.com/v1/gifs/random?api_key=FSHnaiOlYd2NXPdn06Qdh64qxmGRVM69&tag=&rating=g")
    .then(response => {response.json()})
    .then(data => {
      this.setState({
        gif: data.data.image_url
      })
    })
    .catch(e =>{
      console.log(e)
    }) */
  }
  render() {
    console.log("renderizo:")
    let contenido;
    if(this.state.gif == ""){
      contenido = "cargando";
    }else {
      contenido =  <img src={this.state.gif}></img>
    }
    return (
      <div>
       {contenido} {/* variable */}
        <button> Random gif</button>
      </div>
     
    )
  } 
}

export default Gif //siempre tiene que ser exportado 
