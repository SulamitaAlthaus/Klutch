import React from 'react';
import * as S from './styles';

function LoanRequest({ title, plus}) {
    return (
        <S.Container>
            {!plus ? <><S.Plus /> 
            <S.Files /> </>: null}
            <S.Text>{title}</S.Text>
        </S.Container>
    )
}

export default LoanRequest;
