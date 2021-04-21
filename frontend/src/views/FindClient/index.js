import React, { useState } from 'react';
import * as S from './styles';
import Cpf from "react-input-mask";

//components
import Header from '../../components/Header'
import LoanRequest from '../../components/LoanRequest'

function FindClient() {
  const [cpf, setCpf] = useState("");

  return (
    <S.Container>
      <Header />
      <LoanRequest />
      <S.Content>
        <S.Title>Busque o Cliente</S.Title>
        <S.Input>
          <Cpf mask="999.999.999-99" className="cpf"/>
          <S.Search>Buscar</S.Search>
        </S.Input>
        <S.Client>
          <S.Text>Cliente encontrado</S.Text>
          <S.Cpf>096.019.159-31</S.Cpf>
          <S.Name>Sulamita Althaus</S.Name>
          <S.Button>Solicitar</S.Button>
        </S.Client>

      </S.Content>
    </S.Container>
  )
}

export default FindClient;
