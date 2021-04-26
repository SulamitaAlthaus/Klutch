import React, { useState } from 'react';
import * as S from './styles';
import Cpf from "react-input-mask";
import { Link } from 'react-router-dom';

//components
import Header from '../../components/Header';
import LoanRequest from '../../components/LoanRequest';
import { useDispatch } from 'react-redux';

import api from '../../services/api';

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
          dispatch({ type: 'ADD_USER', 
          save: {userId: response.data.id, userName: response.data.name, 
            userPhone: response.data.phone, userCPF: response.data.cpf}})
      
          if (response.data == null) {
            setMessageErr("Cliente não encontrado")
          }
        }).catch(err => {
          console.log(err)
        })
    }
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
            <Link to="/cartao"><S.Button>Solicitar</S.Button></Link>
          </S.Client>
        </> : null}
        {messageErr ? <S.MessageErr>{messageErr}</S.MessageErr> : null}

      </S.Content>
    </S.Container>
  )
}

export default FindClient;
