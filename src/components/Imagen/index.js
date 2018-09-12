import React, { Component } from 'react';
import { Modal, Image, Dimmer, Loader, Header } from 'semantic-ui-react';
import axios from 'axios';
import './imagen.css';

class Imagen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cargando: true,
      url: ''
    }
  }//end super

  componentDidMount(){
      const { raza } = this.props;
      axios.get(`https://dog.ceo/api/breed/${raza}/images/random`)
      .then(res=>{
        this.setState({
          cargando: false,
          url: res.data.message
        });
      })
      .catch((error)=>{
        console.log(`Error => ${error}`);
      });
  };//end componentDidMount

  render(){
      const {raza, cerrarImagen } = this.props;
      const {cargando, url} = this.state;
      let contenido;

      if(cargando){
        contenido = <Dimmer active><Loader size='massive'>Cargando imagen...</Loader></Dimmer>
      } else {
        contenido = <Image fluid rounded src={url}/>
      }

      return(
          <Modal open basic size='small' onClose={cerrarImagen} closeIcon className="content-modal">
            <Header>{raza.toUpperCase()}</Header>
            <Modal.Content>
              {contenido}
              <p>Un perro bonito y gordito!</p>
            </Modal.Content>
          </Modal>
      );
  };//end render
}

export default Imagen;
