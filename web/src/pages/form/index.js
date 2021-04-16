import React, { Component } from 'react';
import axios from 'axios';

import DateField from '../../components/date';

export default class form extends Component {

  constructor(props) {
    super(props);
    this.backendUrl = 'http://localhost:9950/usuarios';

    this.baseState = {
      nome: '',
      telefone: '',
      whatsapp: false,
      marca: '',
      modelo: '',
      ano: '',
      placa: '',
      data: '',
      contexto: {}
    } 
    this.state = this.baseState;

    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeTelefone = this.onChangeTelefone.bind(this);
    this.onChangeWhatsapp = this.onChangeWhatsapp.bind(this);
    this.onChangeMarca = this.onChangeMarca.bind(this);
    this.onChangeModelo = this.onChangeModelo.bind(this);
    this.onChangeAno = this.onChangeAno.bind(this);
    this.onChangePlaca = this.onChangePlaca.bind(this);
    this.onChangeData = this.onChangeData.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  onChangeNome(e) {
    this.setState({ nome: e.target.value })
  }

  onChangeTelefone(e) {
    this.setState({ email: e.target.value })
  }

  onChangeWhatsapp(e) {
    this.setState({ whatsapp: e.target.value })
  }
  onChangeMarca(e) {
    this.setState({ marca: e.target.value })
  }

  onChangeModelo(e) {
    this.setState({ modelo: e.target.value })
  }

  onChangeAno(e) {
    this.setState({ ano: e.target.value })
  }
  onChangePlaca(e) {
    this.setState({ placa: e.target.value })
  }

  onChangeData(e) {
    this.setState({ data: e.target.value })
  }

  onReset(e) {
    this.setState(this.baseState);
  }

  onSubmit(e) {
    e.preventDefault();

    const usuario = {
      nome: this.state.nome,
      telefone: this.state.telefone,
      whatsapp: this.state.whatsapp,
      marca: this.state.marca,
      modelo: this.state.modelo,
      idade: this.state.idade,
      placa: this.state.placa,
      data: this.state.data,
    }; 

    axios.post(this.backendUrl, usuario)
      .then(res => this.setState({ contexto: res.data }))
      // .catch(erro => this.setState({ contexto: erro.response.data }));

    this.setState(this.baseState);
  }

  render() {
    const contexto = this.state.contexto;
    let erros = [];
    if (contexto.erros) {
      erros = contexto.erros.map(
        (erro, idx) => (
          <li key={idx}>{erro.msg}</li>));
    }
    let usuario = [];
    if (contexto.usuario) {
      usuario = [
        (<li key='1'>
          <b>Nome:</b> {contexto.usuario.nome}
        </li>),
        (<li key='2'>
          <b>Telefone:</b> {contexto.usuario.telefone}
        </li>),
        (<li key='3'>
          <b>Possui whatsapp?:</b> {contexto.usuario.whatsapp}
        </li>),
        (<li key='4'>
          <b>Marca:</b> {contexto.usuario.marca}
        </li>),
        (<li key='5'>
          <b>Modelo:</b> {contexto.usuario.modelo}
        </li>),
        (<li key='6'>
          <b>Ano:</b> {contexto.usuario.ano}
        </li>),
        (<li key='7'>
          <b>Placa:</b> {contexto.usuario.placa}
        </li>),
        (<li key='8'>
          <b>Data:</b> {contexto.usuario.data}
        </li>)
      ]
    }

    return (
      <>
        <h1>
          Manipulando formulários com Node.js, Express e React
        </h1>
          <form onSubmit={this.onSubmit}>
            <fieldset>
              <legend>Novo Usuário</legend>
              Nome completo: *<br />
                <input type="text" value={this.state.nome}
                  onChange={this.onChangeNome} /><br />
              Telefone: <br />
                <input type="text" value={this.state.email}
                  onChange={this.onChangeTelefone} /><br />
              Possui WhatsApp?: * 
              <input type="checkbox" checked={this.state.whatsapp}
                onChange={this.onChangeWhatsapp} />
              <br />
              Marca: *<br />
                <input type="text" value={this.state.marca}
                  onChange={this.onChangeMarca} /><br />
              Modelo: *<br />
                <input type="text" value={this.state.modelo}
                  onChange={this.onChangeModelo} /><br />
              Ano: *<br />
              <input type="text" value={this.state.ano}
                onChange={this.onChangeAno} /><br />
              Placa:<br />
              <input type="text" value={this.state.placa}
                onChange={this.onChangePlaca} /><br />
              <DateField value={this.state.data} onChange={this.onChangeDate}/>
              <br />
              <br />
              <input type="submit" value="Enviar" />
              <input type="button" value="Limpar"
                onClick={this.onReset} />
              * Campos obrigatórios
          </fieldset>
        </form>
        {
          contexto.erros && <ul>{erros}</ul>
        }

        <h2>Dados recebidos:</h2>
        { contexto.usuario && <ul>{usuario}</ul> }
      </>
    ); // fim do return
  } // fim do render()  
}