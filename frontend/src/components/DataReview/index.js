import React, { useState } from 'react';
import * as S from './styles';
import { useDispatch, useSelector } from 'react-redux';

//imagens
import ArrowUp from '../../assets/arrowUp.svg';
import ArrowDown from '../../assets/arrowDown.svg';


function DataReview() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data[0]);
    let filter = data.filter
    const [value, setValue] = useState(data.desiredValue)
    const [totalLoan, setTotalLoan] = useState(data.totalLoan)
    const [installment, setInstallment] = useState(data.installment)
    const [installmentsValue, setInstallmentsValue] = useState(data.installmentsValue)
    const [valueFees, setValueFees] = useState(data.fees/100)
    const valueDesired = document.getElementById("valueDesired")
    const fees = [0, 0.15, 0.20, 0.25, 0.30, 0.15, 0.20, 0.25, 0.30, 0.15, 0.20, 0]



    function validateValue(value) {
        if (valueDesired == null) {
            return
        }
        if (value < 300 || value > 10000) {
            valueDesired.setAttribute("style", "border: 1px solid red");
        } else {
            valueDesired.setAttribute("style", "border: none");
        }
    }

    function changeInstallment(arrow) {
        let tes = filter == "actived" ? data.installment : installment
        let teste = ""
        if (arrow == "down" && tes > 1){
            tes = tes - 1
            teste = ((value/tes) - (- ((value/tes) * (fees[tes])))).toFixed(2)
        } else if (arrow == "up" && tes < 10){
            tes = tes - (-1)
            teste = ((value/tes) - (- ((value/tes) * (fees[tes])))).toFixed(2)
        } else{
            return
        }
        setInstallment(tes)
        setTotalLoan((((value) - (-(value/tes) * (fees[tes])) * tes)).toFixed(2))
        setInstallmentsValue(teste)
        setValueFees(fees[tes])
        dispatch({ type: 'ADD_DATA', installment: {installment: installment, installmentsValue: installmentsValue, 
            totalLoan: totalLoan, desiredValue: value, fees: valueFees, filter: "desactived"}})

    }
    
    function changeDesiredValue(value){
        setTotalLoan((((value) - (-(value/installment) * valueFees) * installment)).toFixed(2))
        setInstallmentsValue(((value/installment) - (- ((value/installment) * valueFees))).toFixed(2))
        dispatch({ type: 'ADD_DATA', installment: {installment: installment, installmentsValue: installmentsValue, 
        totalLoan: totalLoan, desiredValue: value, fees: valueFees, filter: "desactived"}})
    } 

    return (
        <S.Container>
            <S.Label className="table">Tabela
            <S.InputArrows>
            <S.Input className="arrows" defaultValue={data.tableName} />
            <S.Arrows>
            <S.Arrow src={ArrowUp} />
            <S.Arrow src={ArrowDown} />
            </S.Arrows>
            </S.InputArrows>
            </S.Label>
            <S.Label id="valueDesired">Valor desejado:<S.Input defaultValue={"R$ " + value}
            onChange={validateValue(value), e => {
            setValue(((e.target.value).split(" "))[1]); 
            changeDesiredValue(((e.target.value).split(" "))[1])}} />
            </S.Label>
            <S.Label id="totalLoan">Valor Total do Empréstimo:<S.Input value={"R$ " + (filter == "actived" ? data.totalLoan : totalLoan)} disabled /></S.Label>
            <S.Label>Parcelas:
                <S.InputArrows className="installment">
                    <S.Input value={(filter == "actived" ? data.installment : installment)} className="installmentValue"/>
                    <S.Arrows className="arrowsInstallment">
                    <S.Arrow onClick={e => changeInstallment('up')} src={ArrowUp} />
                    <S.Arrow onClick={e => changeInstallment('down')} src={ArrowDown} />
                </S.Arrows>
            </S.InputArrows>
            </S.Label>
            <S.Label>Valor da parcela:<S.Input value={"R$ " + (filter == "actived" ? data.installmentsValue : installmentsValue)} disabled /></S.Label>
        </S.Container>
    )
}

export default DataReview;
