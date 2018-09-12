import React, { Component } from 'react';
import axios from 'axios';
import { Segment, Dimmer, Loader } from 'semantic-ui-react';
import ErrorLista from '../ErrorLista';
import ListaComp from '../ListaComp';

class  Lista extends Component {
  constructor(props) {
      super(props);
      this.state = {
        mascotas: [],
        mensajeError: ''
      }
  } //end constructor

  componentDidMount(){
    axios.get('https://dog.ceo/api/breeds/list')
    .then(response=>{
      this.setState({mascotas: response.data.message});
    })
    .catch(err=>{
      this.setState({
        mensajeError: err.message
      });
    })
  }

  validatedMascotasFilter = (mascostasArray, filtro)=>{
      let listaFiltrada;
      console.log("mascostasArray ===> ", mascostasArray );
      listaFiltrada = (filtro.length) ? mascostasArray.filter(m=>!(m.indexOf(filtro) === -1)) : mascostasArray;
      return listaFiltrada;
  }
  render (){
    const { mascotas, mensajeError } = this.state;
    const { filtro } = this.props;
    let contenido;
    if(mensajeError.length > 0){
      return <ErrorLista mensaje={mensajeError}/>
    }

    if (mascotas.length > 0) {
      contenido = <ListaComp lista={this.validatedMascotasFilter(mascotas, filtro)}/>
    }else{
      contenido = <Dimmer active inverted> <Loader inverted>Cargando...</Loader></Dimmer>
    }

    return (
      <Segment>
          {contenido}
          <br/>
      </Segment>
    );
  }//end render
}; //end class

export default Lista;
