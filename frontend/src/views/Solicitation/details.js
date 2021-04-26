import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

import api from '../../services/api'

//components
import LoanRequest from '../../components/LoanRequest';

function Details() {
  const data = useSelector(state => state);
  const [user, setUser] = useState("");
  const [bank, setBank] = useState("");
  const date = (format(new Date, 'dd/MM/yyyy'));



  async function loadClient() {
    await api.get(`/showuser/${data.user[0].userCPF}`)
      .then(response => {
        setUser(response.data)
        setBank(response.data.bank)
      }).catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    loadClient();
  }, [])


  return (
    <S.Container>
      <S.Header>
        <S.Files />
        <LoanRequest title={"Detalhe de Solicitação"} plus={true} />
      </S.Header>
      <S.ContentDetails>
        <S.DetailsLeft>
          <S.DataDetails>Solicitação gerada por<span id="variable">Sistema Credfica</span></S.DataDetails>
          <S.Square>
            <S.DataDetails id="square">Valor Total<S.ValueSquare>R$ {data.data[0].totalLoan}</S.ValueSquare></S.DataDetails>
            <S.DataDetails id="square">Valor a depositar<S.ValueSquare>R$ {data.data[0].totalLoan}</S.ValueSquare></S.DataDetails>
            <S.DataDetails id="square">Frente do cartão<S.File /><S.Download>Ver Comprovante</S.Download></S.DataDetails>
            <S.DataDetails id="square">Verso do cartão<S.File /><S.Download>Ver Comprovante</S.Download></S.DataDetails>
            <S.DataDetails id="square">Selfie com cartão<S.File /><S.Download>Ver Comprovante</S.Download></S.DataDetails>
          </S.Square>
        </S.DetailsLeft>
        <S.DetailsRight>
          <S.DataDetails>Fluxo da Solicitação:<span id="variable">{data.contract[0].tipeContract}</span></S.DataDetails>
          <S.SquareRight>
            <S.DataDetails id="squareRight">
              <S.TextRight>Modalidade:</S.TextRight>
              <S.ValueSquare>
                <S.Text id="textCard">Cartão de Crédito<S.Card id="imageCard" /></S.Text>
                <S.Text id="textRight">Número do cartão: {data.card[0].cardNumber}</S.Text>
                <S.Text id="textRight">Validade: {data.card[0].dateValue} CVC: {data.card[0].cvc}</S.Text>
                <S.Text id="textRight">{data.data[0].installment} parcelas de: R$ {data.data[0].installmentsValue}</S.Text>
                <S.Text id="textRight">Tabela: {data.data[0].tableName}</S.Text>
              </S.ValueSquare>
            </S.DataDetails>
            <S.DataDetails id="squareRight">
              <S.TextRight>Informações do Cliente:</S.TextRight>
              <S.ValueSquare id="userData">
                <S.Text id="textRight">Nome: {user.name}</S.Text>
                <S.Text id="textRight">CPF: {user.cpf}</S.Text>
                <S.Text id="textRight">Agência: {bank.agency}</S.Text>
                <S.Text id="textRight">Banco: {bank.label}</S.Text>
                <S.Text id="textRight">Tipo de Conta: {bank.accountTypeLabel}</S.Text>
                <S.Text id="textRight">Número da conta: {bank.accountNumber}</S.Text>
              </S.ValueSquare>
            </S.DataDetails>
            <S.DataDetails id="solicitationData">
              <S.TextRight>Informações Gerais:</S.TextRight>
              <S.ValueSquare>
                <S.Text id="textRight">Data: {date}</S.Text>
                <S.Options>
                  <S.ButtonOptions id="orange"><S.ImageAlert />Aguardando</S.ButtonOptions>
                  <S.Bottom>
                    <S.ButtonOptions id="blue"><S.ImageConclude />Pré Aprovar</S.ButtonOptions>
                    <S.ButtonOptions id="red"><S.ImageAlert />Reprovar</S.ButtonOptions>
                  </S.Bottom>
                </S.Options>
              </S.ValueSquare>
            </S.DataDetails>
          </S.SquareRight>
        </S.DetailsRight>
      </S.ContentDetails>
    </S.Container>
  )
}

export default Details;
