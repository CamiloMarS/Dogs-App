import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';

/*=================== Mis componentes =========================*/
import Encabezado from '../Encabezado';
import Busquedad from '../Busquedad';
import Lista from '../Lista';
/*=================== Mis componentes =========================*/

class Root extends Component {
  constructor(props) {
      super(props);
      this.state = {
          buscar: ''
      };//end state
  }//end constructor

  cambiarBusquedad = (e, {value}) => {
    this.setState({
      buscar: value
    });
  };//cambiarBusquedad

  render(){
     return (
       <Container textAlign='center'>
          <Encabezado/>
          <Busquedad cambiarBusquedad={this.cambiarBusquedad}/>
          <Lista filtro={this.state.buscar}/>
       </Container>
     );
   }
}

export default Root;
