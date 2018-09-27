import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import provincias from '../json/provincias.json'
import localidades from '../json/localidades.json'

class Form extends Component {

  constructor(){
   super();
  }

  state = {
      name: '',
      cuil:'',
      street:'',
      number:'',
      prov:'',
      local:'',
      email:'',
      message:'',
      isPasswordVisible: false,
      password: '',
      successPage:true,
      itemsProv:[],
      itemsLoc:[],
    }
   
  componentDidMount(){

  this.setState({
   
    itemsProv: provincias,
    itemsLoc: localidades

  })
  
console.log(localidades)
  }
    
      handleSubmit = (e) => {
        e.preventDefault();
          fetch('http://www.mocky.io/v2/5baa82193000002c00a68472', {
            method: 'post',
            body: JSON.stringify(this.state)
          }).then(response => response)
          .then(console.log);
     
        setTimeout(() => {
          this.setState({ 
            stateRes: true,
            successPage:false,
            message: '¡Usted se ha registrado exitosamente!' 
          });
        }, 1000)
      }

      handleChange = (e) => {
        const { target: { name, value }} = e;
        this.setState({
          [name]: value
        });
      }
    
  
      render () {
        const { name,cuil ,street,number, prov, local, email,password } = this.state;
        
        return (
          <div className="col-md-6 bg-white mx-auto py-4 cont-ext">
          <div className="container">
          <div className="row">
          <div className="col-md-9 mx-auto pt-5">
          {
            this.state.successPage ?
            <div>
          <h2 className="title">Registro</h2>
          <form onSubmit={this.handleSubmit} id="form">

          <div className="form-goup">
            <label htmlFor="name">Nombre completo</label>
            <input
              className="form-control"
              type="text"
              value={name.value}
              name="name"
              placeholder="Juan Carlos"
              onChange={this.handleChange}
              required
            />
            </div>
           
            <div className="form-goup">
            <label htmlFor="name">N° de CUIL</label>
            <InputMask
              mask="99-99999999-9" 
              maskChar=''
              className="form-control"
              value={cuil.value}
              name="cuil"
              placeholder="Ej.: 23-45678901-2"
              onChange={this.handleChange}
              required
            />
           
            </div>

            <div className="row">
            <div className="col-md-8">
              <div className="form-goup">
              <label htmlFor="name">Calle</label>
              <input 
                className="form-control"
                type="text"
                value={street.value}
                name="street"
                placeholder="Ej.: Av. de Mayo"
                onChange={this.handleChange}
                required
              />
              </div>
            </div>

          <div className="col-md-4">
            <div className="form-goup">
            <label htmlFor="name">Número</label>
            <input
              className="form-control"
              type="number"
              value={number.value}
              name="number"
              placeholder="Ej.: 3651"
              onChange={this.handleChange}
              required
            />
            </div>
            </div>
            </div>

            <div className="row">

            <div className="col-md-6">
            <div className="form-goup">
              <label htmlFor="name">Provincia</label>
              <select class="form-control"
              value={prov.value}
              name="prov"
              onChange={this.handleChange}
              required
              >
              <option>Seleccionar</option>

                {this.state.itemsProv.map( prov => (
                    <option key="{city.name">{prov.name}</option>
                ))}
              </select>
            </div>
            </div>

            <div className="col-md-6">
            <div className="form-goup">
              <label htmlFor="name">Localidad</label>
              <select class="form-control"
              value={local.value}
              name="local"
              onChange={this.handleChange}
              required
              >
              <option>Seleccionar</option>

                {this.state.itemsLoc.map( item => (
                  item.cities.map(city => (
                    <option key="{city.name">{city.name}</option>
                  ))
                ))}
              </select>
            </div>
            </div>

            </div>
            
            <div className="form-goup">
            <label htmlFor="name">E-mail</label>
            <input
             className="form-control"
              type="email"
              value={email.value}
              name="email"
              placeholder="Ingresá tu dirección de correo"
              onChange={this.handleChange}
              required
            />
            </div>

            <div className="form-goup">
            <label htmlFor="password">Constraseña</label>
              {
                this.state.isPasswordVisible ?
                <input
                className="form-control"
                type='text'
                name="password"
                pattern="^(?=.*?[a-z])(?=.*?[0-9]).{8,}$"
                placeholder="Debe ser alfanumérica de al menos 8 caracteres"
                onChange={(e) => this.setState({password: e.target.value})}
                /> :
                <input
                className="form-control"
                type='password'
                name="password"
                pattern="^(?=.*?[a-z])(?=.*?[0-9]).{8,}$"
                placeholder="Debe ser alfanumérica de al menos 8 caracteres"
                onChange={(e) => this.setState({password: e.target.value})}
                />
              }
            
            <div className="d-flex align-items-center">
            <div class="checkbox">
              <input className="m-0 chk" name="showpass" type="checkbox"
              onChange={() => this.setState({isPasswordVisible: !this.state.isPasswordVisible})}
              />
              </div>
              <label className="m-0 ml-2" htmlFor="showpass">Mostrar contraseña</label>
              </div>
            </div>

            <button type="submit" className="btn float-right mt-4">Finalizar</button>
          </form>
          </div>
          :
          <div className="row success-template">
          <div className="col mt-md-5 pt-md-4 text-center">
            <img src={require("../assets/img/check.png")} className="img-fluid" alt="logo check"
            onClick={() => this.setState({successPage:true})}
            />
            <h4 className="mt-4 succ-text">¡Te registraste exitosamente!</h4>
          </div>
          </div>
          }
          </div>
          </div>
          </div>
          </div>
        );
      }
}

export default Form;