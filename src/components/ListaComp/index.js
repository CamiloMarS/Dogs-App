import React, { Component } from 'react';
import { List, Button, Icon } from 'semantic-ui-react';
import Imagen from '../Imagen';

class  ListaComp extends Component{
  constructor(props) {
    super(props);
    this.state = {
      mostrarImagen: false,
      raza: ''
    }
  }//end constructor

  mostrarImagen = (m) => {
      this.setState({
        mostrarImagen: true,
        raza: m
      });
  }; //end mostrarImagen

  cerrarImagen = () => {
    this.setState({
      mostrarImagen: false
    });
  }; //end cerrarImagen

  render(){
     const { lista } = this.props;
     const { mostrarImagen, raza } = this.state;
     let contenido = lista.map((m, i)=>(
        <List.Item key={i}>
            <List.Content floated='right'>
                <Button color='red' onClick={()=>this.mostrarImagen(m)}>
                  <Icon name='paper plane'/>
                     Ver foto
                </Button>
            </List.Content>
            <Icon circular name='paw'/>
            <List.Content>
                {m}
            </List.Content>
        </List.Item>
     ));
     return (
       <List divided verticalAlign='middle'>
          {contenido}
          {mostrarImagen ? <Imagen raza={raza} cerrarImagen={this.cerrarImagen}/> : null}
       </List>
     );
  };//end render

}//end class

export default ListaComp;
