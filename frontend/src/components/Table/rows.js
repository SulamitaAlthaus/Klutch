import React from 'react';
import * as S from './styles';
import { useDispatch, useSelector } from 'react-redux';

function Rows({ installments, value, idTable, tableName }) {
    const table = useSelector(state => state.table[0].table);
    if(!installments){
        installments=table
    }
    const dispatch = useDispatch();

    function ChooseInstallments(installment, valueInstallment, totalLoan, comission, fees ) {
        dispatch({ type: 'ADD_DATA', installment: {installment: installment, installmentsValue: valueInstallment, 
            idTable: idTable, totalLoan: totalLoan, desiredValue: value, comission: comission, tableName: tableName, fees: fees, filter: "actived"}})
    }

    return (
        <S.Container>
            {installments.map((e) =>
                <S.Rows>
                    <S.Row onClick={a => { ChooseInstallments(e.id,
                    ((value / e.id) + (value / e.id) * (e.installmentInterest / 100)).toFixed(2),
                    (((value / e.id) + (value / e.id) * (e.installmentInterest / 100)) * e.id).toFixed(2), e.comission,
                    e.installmentInterest)}}>
                        {/* Quantidade de Parcela */}
                        <S.Cell>{e.id}</S.Cell>
                        {/* Juros de cada Parcela */}
                        <S.Cell>{e.installmentInterest}%</S.Cell>
                        {/* Valor da Parcela */}
                        <S.Cell>R${((value / e.id) + (value / e.id) * (e.installmentInterest / 100)).toFixed(2)}</S.Cell>
                        {/* Valor Total */}
                        <S.Cell>R${(((value / e.id) + (value / e.id) * (e.installmentInterest / 100)) * e.id).toFixed(2)}</S.Cell>
                        {/* Valor da Comissão */}
                        <S.Cell>R${((((value / e.id) - ( - (value / e.id) * (e.installmentInterest / 100)).toFixed(2)) * e.id * (e.comission / 100))).toFixed(2)}</S.Cell>
                    </S.Row>
                </S.Rows>)}
        </S.Container>
    )
}

export default Rows;
