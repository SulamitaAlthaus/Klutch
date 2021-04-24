import React from 'react';
import * as S from './styles';
import Rows from './rows';
import { useSelector } from 'react-redux';

function Table({tables, value, id}) {
    const user = useSelector(state => state.data[0])
    
    return (
        <S.Container>
            {tables.map((table) =>
                <S.Table key={table.id}>
                    {!id ? <S.Checkbox for={table.name}>
                        <S.Option type="radio" name="checkboxOption" id={table.name} 
                        checked={user.idTable==table.id ? true : false}/>
                    </S.Checkbox> : null}
                    <S.HeaderTable>
                        <S.Title>Tabela Padrão</S.Title>
                        <S.Colums>
                            <S.Colum>Parcela</S.Colum>
                            <S.Colum>Juros da Parcela</S.Colum>
                            <S.Colum>Valor da Parcela</S.Colum>
                            <S.Colum>Valor Total</S.Colum>
                            <S.Colum>Comissão Parceiro</S.Colum>
                        </S.Colums>
                        <Rows installments={table.installments} value={value} idTable={table.id}/>
                    </S.HeaderTable>
                </S.Table>)}
        </S.Container>
    )
}

export default Table;
