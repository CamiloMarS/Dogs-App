import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react';

class Encabezado extends Component {
  constructor(props){
    super(props);
  }

  render() {
        return (
        <Header color='brown' as='h1' icon>
          <Icon name='paw' color='brown'/>
          <Header.Content>
              Catalago de Perruchis
          </Header.Content>
          <Header.Subheader>
            Catalago de mascotas de perros, chidos, lindos y bonitos!!!.
          </Header.Subheader>
        </Header>
    );
  }
}
export default Encabezado;
