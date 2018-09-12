import React, {Component} from 'react';
import {Input, Container} from 'semantic-ui-react';

class Busquedad extends Component {
  render(){
      return(
        <Container>
          <Input icon='search' placeholder='Buscar por raza...' size='big' onChange = {this.props.cambiarBusquedad}/>
        </Container>
      );
  }
}

export default Busquedad;
