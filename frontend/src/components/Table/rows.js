import React, { useEffect, useState } from 'react';
import * as S from './styles';

function Rows({installments, value}) {
    let aux = []

return (
    <S.Container>
        {installments.map((e) =>
            <S.Rows>
                <S.Row>
                    {/* Quantidade de Parcela */}
                    <S.Cell>{e.id}</S.Cell>
                    {/* Juros de cada Parcela */}
                    <S.Cell>{e.installmentInterest}%</S.Cell>
                    {/* Valor da Parcela */}
                    <S.Cell>R${((value/e.id) + (value/e.id)*(e.installmentInterest/100)).toFixed(2)}</S.Cell>
                    {/* Valor Total */}
                    <S.Cell>R${((((value/e.id) + (value/e.id)*(e.installmentInterest/100)))*e.id).toFixed(2)}</S.Cell>
                    {/* Valor da Comissão */}
                    <S.Cell>R${((((value/e.id) + (value/e.id)*(e.installmentInterest/100)).toFixed(2))*e.id*(e.comission/100)).toFixed(2)}</S.Cell>
                </S.Row>
            </S.Rows>)}
    </S.Container>
)}

export default Rows;
