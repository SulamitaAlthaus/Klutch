import React, { useEffect } from 'react';
import * as S from './styles';
import Rows from './rows';
import { useSelector, useDispatch  } from 'react-redux';

import api from '../../services/api'

function Table({tables, value}) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.data[0])
    

  async function loadingTables() {
    await api.get(`/show/${user.idTable}`)
      .then(response => {
        dispatch({ type: 'ADD_TABLE', 
        saveTable: {table: response.data.installments}})
      })
  }

  useEffect(() => {
    loadingTables();
  }, [])

    return (
        <S.Container>
            {tables.map((table) =>
                <S.Table key={table.id}>
                    <S.Checkbox for={table.name}>
                        <S.Option type="radio" name="checkboxOption" id={table.name} 
                        checked={user.idTable==table.id ? true : false}/>
                    </S.Checkbox>
                    <S.HeaderTable>
                        <S.Title>Tabela Padrão</S.Title>
                        <S.Colums>
                            <S.Colum>Parcela</S.Colum>
                            <S.Colum>Juros da Parcela</S.Colum>
                            <S.Colum>Valor da Parcela</S.Colum>
                            <S.Colum>Valor Total</S.Colum>
                            <S.Colum>Comissão Parceiro</S.Colum>
                        </S.Colums>
                        <Rows installments={table.installments} value={value} idTable={table.id} tableName={table.name}/>
                    </S.HeaderTable>
                </S.Table>)}
        </S.Container>
    )
}

export default Table;
