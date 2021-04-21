import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Rows from './rows'

function Table({tables,value}) {

    return (
        <S.Container>
            {tables.map((item) =>
                <S.Table key={item.id}>
                    <S.Checkbox for={item.name}>
                        <S.Option type="radio" name="checkboxOption" id={item.name} />
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
                        <Rows installments={item.installments} value={value}/>
                    </S.HeaderTable>
                </S.Table>)}
        </S.Container>
    )
}

export default Table;
