import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { useSelector } from 'react-redux';

import api from '../../services/api'

//componentes
import Header from '../../components/Header'
import LoanRequest from '../../components/LoanRequest'
import Table from '../../components/Table'

function ValidationData() {
  const [tables, setTables] = useState([])
  const data = useSelector(state => state.data[0]);

  async function loadingTables() {
    await api.get(`/show`)
      .then(response => {
        setTables(response.data)
      })
  }

  useEffect(() => {
    loadingTables();
    console.log(tables);
  }, [])

  return (
    <S.Container>
      <Header />
      <S.Top>
        <LoanRequest className="loanRequest" title={"Solicitar Empréstimo"} />
      </S.Top>
      <S.Content>
        <S.Label className="table">Tabela<S.Input className="inputTable" /></S.Label>
        <S.Label>Valor desejado:<S.Input defaultValue={"R$ " + data.desiredValue} /></S.Label>
        <S.Label>Valor Total do Empréstimo:<S.Input value={"R$ " + data.totalLoan} disabled /></S.Label>
        <S.Label>Parcelas:<S.Input defaultValue={data.installment} /></S.Label>
        <S.Label>Valor da parcela:<S.Input value={"R$ " + data.installmentsValue} disabled /></S.Label>
      </S.Content>
      <S.Text>Escolha o tipo de Contrato:</S.Text>
      <S.Buttons>
        <S.Button className="contract">Automático</S.Button>
        <S.Button className="contract">Manual</S.Button>
        <S.Button>Concluir</S.Button>
      </S.Buttons>
      {/* <Table id={data.idTable} tables={tables} value={data.desiredValue}/> */}
    </S.Container>
  )
}

export default ValidationData;
