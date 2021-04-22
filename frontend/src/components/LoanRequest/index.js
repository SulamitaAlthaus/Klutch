import React from 'react';
import * as S from './styles';

function LoanRequest({ title }) {
    return (
        <S.Container>
            <S.Plus />
            <S.Files />
            <S.Text>{title}</S.Text>
        </S.Container>
    )
}

export default LoanRequest;
