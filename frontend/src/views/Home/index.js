import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Input from 'react-currency-format';


//components
import Header from '../../components/Header';
import LoanRequest from '../../components/LoanRequest';
import Table from '../../components/Table';
import Footer from '../../components/Footer';

import api from '../../services/api';

function Home() {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState("")
  const [valueLoan, setValueLoan] = useState()
  const [messageErr, setMessageErr] = useState()
  const [tables, setTables] = useState([])

  function ValidaValor() {

    if (value === undefined || value === "") {
      setMessageErr("O valor não pode ser nulo")
      document.getElementById('teste').setAttribute("style", "border: 1px solid #FF0000")
    } else {
      //limpa o valor recebido, deixando apenas números.
      var validaValor = value.split('R$')[1].split(',').join('')

      if (validaValor < 300 || validaValor > 10000) {
        setMessageErr("O valor deve ser entre R$300 e R$10.000")
        document.getElementById('teste').setAttribute("style", "border: 1px solid #FF0000")
      } else {
        setVisible(true)
        setValueLoan(validaValor)
        setMessageErr()
        document.getElementById('teste').setAttribute("style", "border: none")
      }
    }
  }

  async function loadingTables() {
    await api.get(`/show`)
      .then(response => {
        setTables(response.data)
      })
  }

  useEffect(() => {
    loadingTables();
  }, [])
  
  return (
      <S.Container>
        <Header />
        <LoanRequest title={"Simulação de Taxas"} />
        <S.Content>
          <S.TextContent>Valor Desejado</S.TextContent>
          <S.Input>
            <Input prefix="R$" className="inputMoney" id="teste" placeholder="R$ 0,00"
              thousandSeparator={true} onChange={e => setValue(e.target.value)} />
            <S.Button onClick={ValidaValor}>Calcular</S.Button>
          </S.Input>
          <S.MessageErr>{messageErr ? <span>{messageErr}</span> : null}</S.MessageErr>
        </S.Content>
        {visible ?
          <div>
            <S.StandardTable>
              <Table tables={tables} value={valueLoan} />
            </S.StandardTable>
            <Footer />
          </div>
          : null}
      </S.Container>
  )
}

export default Home;
