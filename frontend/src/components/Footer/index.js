import React, { useState } from 'react';
import * as S from './styles';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function Footer() {
    const data = useSelector(state => state.data[0])
    const [redirect, setRedirect] = useState(false)

    function redirectPage(){
        if(data.filter===""){
            return
        } else {
            setRedirect(true)
        }
    }



    return (
        <S.Container>
        {redirect ? <Redirect to="/cliente" /> : null}
            <S.Text>Nome: Tabela Padrão</S.Text>
            <S.Text>Parcelas: {data ? data.installment : null}</S.Text>
            <S.Text>Valor da Parcela: R${data ? data.installmentsValue : null}</S.Text>
            <S.Button onClick={redirectPage}>Avançar</S.Button>
        </S.Container>
    )
}

export default Footer;
