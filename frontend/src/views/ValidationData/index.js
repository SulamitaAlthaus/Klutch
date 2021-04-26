import React, { useState } from 'react';
import * as S from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import api from '../../services/api'


//componentes
import Header from '../../components/Header'
import LoanRequest from '../../components/LoanRequest'
import Rows from '../../components/Table/rows'
import DataReview from '../../components/DataReview'

function ValidationData() {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);
  const [filter, setFilter] = useState(false);
  const [messageErr, setMessageErr] = useState(false);
  const table = useSelector(state => state.data[0]);
  const data = useSelector(state => state);
  let comissionValue = ((data.data[0].totalLoan / data.data[0].installment) * (data.data[0].comission / 100) * data.data[0].installment).toFixed(2);


  async function saveData() {
    if (!filter) {
      setMessageErr(true)
    } else {
      await api.post(`/newsolicitation`, {
        clientId: data.user[0].userId,
        installmentInterestValue: data.data[0].installmentInterestValue,
        comission: data.data[0].comission,
        comissionValue: comissionValue,
        cardNumber: data.card[0].cardNumber,
        desiredValue: data.data[0].desiredValue,
        totalLoan: data.data[0].totalLoan,
        installmentId: data.data[0].installment,
        installmentInterest: data.data[0].installment,
        rateTableId: data.data[0].idTable
      }).then(() => {
        setRedirect(true)
      }).catch((err) => {
        console.log(err)
      })
    }
  }

  function saveTypeContract(value) {
    setMessageErr(false)
    setFilter(true)
    dispatch({
      type: 'ADD_CONTRACT',
      saveTypeContract: { tipeContract: value }
    })
  }


  return (
    <S.Container>
      {redirect ? <Redirect to="/solicitacao" /> : null}
      <Header />
      <S.Top>
        <LoanRequest className="loanRequest" title={"Solicitar Empréstimo"} />
      </S.Top>
      <S.Content>
        <DataReview />
      </S.Content>
      <S.Text>Escolha o tipo de Contrato:</S.Text>{messageErr ? <S.MsgErr>Escolha o tipo de contrato</S.MsgErr> : null}
      <S.Buttons>
        <S.Button className="contract" onClick={e => saveTypeContract("Automático")}>Automático</S.Button>
        <S.Button className="contract" onClick={e => saveTypeContract("Manual")}>Manual</S.Button>
        <S.Button onClick={saveData}><S.Conclude />Concluir</S.Button>
      </S.Buttons>
      <S.Table>
        <S.HeaderTable>
          <S.Title>Tabela Padrão</S.Title>
          <S.Colums>
            <S.Colum>Parcela</S.Colum>
            <S.Colum>Juros da Parcela</S.Colum>
            <S.Colum>Valor da Parcela</S.Colum>
            <S.Colum>Valor Total</S.Colum>
            <S.Colum>Comissão Parceiro</S.Colum>
          </S.Colums>
          <Rows value={table.desiredValue} idTable={table.idTable} tableName={table.tableName} />
        </S.HeaderTable>
      </S.Table>
    </S.Container >
  )
}

export default ValidationData;
