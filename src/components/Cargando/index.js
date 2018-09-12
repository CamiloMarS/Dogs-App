import React, { Component } from 'react';
import { Button, Loader } from 'semantic-ui-react'

class Cargando extends Component {
  constructor(args) {
     super(args);
     this.state = {
        loading: false
     }
     this.changeLoading = this.changeLoading.bind(this);
  }

  changeLoading = ()=>{
      this.setState((prevState, props)=>{
         return {loading: !prevState.loading}
      })
  };//end changeLoading

  render(){
    let contenido;
    if(this.state.loading){
      contenido = <Loader inline active/>
    }else{
      contenido = <span>No esta cargando</span>
    }
    return (
        <div>
          {contenido}
          <Button content='Cambiar Estado' onClick={this.changeLoading}></Button>
        </div>
    )
  }//end render
}

export default Cargando;
