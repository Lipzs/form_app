import React, { Component } from 'react';
import api from '../../services/api';

import DateField from '../../components/date';
import Switch from '@material-ui/core/Switch';

import './styles.css'

export default class form extends Component {

  constructor(props) {
    super(props);

    this.baseState = {
      nome: '',
      telefone: '',
      whatsapp: false,
      marca: '',
      modelo: '',
      ano: '',
      placa: '',
      data: new Date(),
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
    this.setState({ telefone: e.target.value })
  }

  onChangeWhatsapp(e) {
    this.setState({ whatsapp: e.target.checked })
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

  async onSubmit(e) {
    e.preventDefault();

    const usuario = {
      nome: this.state.nome,
      telefone: this.state.telefone,
      whatsapp: this.state.whatsapp,
      marca: this.state.marca,
      modelo: this.state.modelo,
      idade: this.state.idade,
      placa: this.state.placa,
      data: this.state.data
    }; 


    try {
      const response = await api.post('schedule', usuario);
      console.log(response.data);
    } catch(e) {
      console.log(e.response.data);
    }
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
          Form App
        </h1>
          <form onSubmit={this.onSubmit}>
            <fieldset>
              <legend>Novo agendamento</legend>
              <div className="form">
                <section className="field-1">
                    {/* <p>Nome completo: *</p> */}
                    <input type="text" value={this.state.nome}
                      onChange={this.onChangeNome} placeholder="Nome Completo"/>

                    {/* <p>Telefone:</p>  */}
                    <input type="text" value={this.state.telefone}
                      onChange={this.onChangeTelefone} placeholder="Telefone"/>
                  </section>
                <section className="field-2">
                  <p>Possui WhatsApp?: </p>  
                  <Switch
                    checked={this.state.whatsapp}
                    onChange={this.onChangeWhatsapp}
                    name="whatsApp"
                    inputProps={{ 'aria-label': 'whatsapp checkbox' }}
                  />
                  {/* <input type="checkbox" checked={this.state.whatsapp}
                    onChange={this.onChangeWhatsapp} /> */}
                </section>
                <section className="field-3">
                  {/* Marca: * */}
                  <input type="text" value={this.state.marca}
                    onChange={this.onChangeMarca} placeholder="Marca"/>
                  {/* Modelo: * */}
                    <input type="text" value={this.state.modelo}
                      onChange={this.onChangeModelo} placeholder="Modelo"/>
                </section>
                <section className="field-4">
                  {/* Ano:  */}
                  <input type="text" value={this.state.ano}
                    onChange={this.onChangeAno} placeholder="Ano"/>
                  {/* Placa: * */}
                  <input type="text" value={this.state.placa}
                    onChange={this.onChangePlaca} placeholder ="Placa"/>
                </section>
                  <DateField value={ this.state.data } onChange={ (e) => {this.onChangeData(e)}}/>
                <br />
                <br />
                <section className="buttons">
                  <button type="submit">Enviar</button>
                  <button type="button" value="Limpar"
                    onClick={this.onReset}>Limpar</button>
                </section>
                * Campos obrigatórios
              </div>
          </fieldset>
        </form>
        {/* {
          contexto.erros && <ul>{erros}</ul>
        }

        <h2>Dados recebidos:</h2>
        { contexto.usuario && <ul>{usuario}</ul> } */}
      </>
    ); // fim do return
  } // fim do render()  
}