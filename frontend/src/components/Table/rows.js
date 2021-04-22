import React from 'react';
import * as S from './styles';
import { useDispatch } from 'react-redux';

function Rows({ installments, value }) {
    const dispatch = useDispatch();

    function ChooseInstallments(parcela, valorparcela) {
        dispatch({ type: 'ADD_DATA', installment: {installment: parcela, installmentsValue: valorparcela}})
    }

    return (
        <S.Container>
            {installments.map((e) =>
                <S.Rows>
                    <S.Row onClick={a => { ChooseInstallments(e.id, ((value / e.id) + (value / e.id) * (e.installmentInterest / 100)).toFixed(2)) }}>
                        {/* Quantidade de Parcela */}
                        <S.Cell>{e.id}</S.Cell>
                        {/* Juros de cada Parcela */}
                        <S.Cell>{e.installmentInterest}%</S.Cell>
                        {/* Valor da Parcela */}
                        <S.Cell>R${((value / e.id) + (value / e.id) * (e.installmentInterest / 100)).toFixed(2)}</S.Cell>
                        {/* Valor Total */}
                        <S.Cell>R${((((value / e.id) + (value / e.id) * (e.installmentInterest / 100))) * e.id).toFixed(2)}</S.Cell>
                        {/* Valor da Comissão */}
                        <S.Cell>R${((((value / e.id) + (value / e.id) * (e.installmentInterest / 100)).toFixed(2)) * e.id * (e.comission / 100)).toFixed(2)}</S.Cell>
                    </S.Row>
                </S.Rows>)}
        </S.Container>
    )
}

export default Rows;
