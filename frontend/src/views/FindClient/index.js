import React, { useState } from 'react';
import * as S from './styles';
import Cpf from "react-input-mask";
import { useDispatch } from 'react-redux';

//components
import Header from '../../components/Header'
import LoanRequest from '../../components/LoanRequest'

import api from '../../services/api'

function FindClient() {
  const [cpf, setCpf] = useState("");
  const [user, setUser] = useState();
  const [messageErr, setMessageErr] = useState();
  const dispatch = useDispatch();

  async function loadClient(cpf) {
    if (cpf == '' || cpf.includes("_")) {
      setMessageErr("Preencha o CPF corretamente")
    } else {
      await api.get(`/showuser/${cpf}`)
        .then(response => {
          setUser(response.data)
          setMessageErr("")
          if(response.data == null){
            setMessageErr("Cliente não encontrado")
          }
        }).catch(err => {
          console.log(err)
        })
    }
  }

  async function redirect(name, id){
    dispatch({ type: 'ADD_DATA', save: {name: "name", id: "id"}})
  }


  return (
    <S.Container>
      <Header />
      <LoanRequest title={"Solicitar Empréstimo"} />
      <S.Content>
        <S.Title>Busque o Cliente</S.Title>
        <S.Input>
          <Cpf mask="999.999.999-99" placeholder="Preencha o CPF" className="cpf"
            onChange={e => setCpf(e.target.value)} />
          <S.Search onClick={e => loadClient(cpf)}>Buscar</S.Search>
        </S.Input>
        {user ? <>
          <S.Client>
            <S.Text>Cliente encontrado</S.Text>
            <S.Cpf>{user.cpf}</S.Cpf>
            <S.Name>{user.name}</S.Name>
            <S.Button onClick={e => redirect(user.name,user._id)}>Solicitar</S.Button>
          </S.Client>
        </> : null}
        {messageErr ? <S.MessageErr>{messageErr}</S.MessageErr> : null}

      </S.Content>
    </S.Container>
  )
}

export default FindClient;
