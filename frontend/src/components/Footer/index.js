import React from 'react';
import * as S from './styles';
import { useSelector } from 'react-redux';

function Footer() {
    const user = useSelector(state => state.data[0])

    function redirect() {
        window.location.replace('/cliente')
    }

    return (
        <S.Container>
            <S.Text>Nome: Tabela Padrão</S.Text>
            <S.Text>Parcelas: {user ? user.installment : null}</S.Text>
            <S.Text>Valor da Parcela: R${user ? user.installmentsValue : null}</S.Text>
            <S.Button onClick={redirect}>Avançar</S.Button>
        </S.Container>
    )
}

export default Footer;
