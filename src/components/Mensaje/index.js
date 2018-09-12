import React, { Component } from 'react';

class  Mensaje extends Component {
  constructor(props) {
      super(props);
  }

  render(){
     const styles = {
        color: this.props.color,
        fontSize: this.props.size
     };
     return (
       <h3 style={styles}>{this.props.contenido}</h3>
     )
  }//end render

}//emd class

export default Mensaje;
