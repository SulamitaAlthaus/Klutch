import React from 'react';
import * as S from './styles';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Footer() {
    const user = useSelector(state => state.data[0])



    return (
        <S.Container>
            <S.Text>Nome: Tabela Padrão</S.Text>
            <S.Text>Parcelas: {user ? user.installment : null}</S.Text>
            <S.Text>Valor da Parcela: R${user ? user.installmentsValue : null}</S.Text>
            <Link to="/cliente" className="link"><S.Button>Avançar</S.Button></Link>
        </S.Container>
    )
}

export default Footer;
