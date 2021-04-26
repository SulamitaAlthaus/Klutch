import React, { useState } from 'react';
import * as S from './styles';
import { useSelector } from 'react-redux';

import Details from './details'

//components
import Header from '../../components/Header'
import LoanRequest from '../../components/LoanRequest'


function Solicitation() {
    const [details, setDetails] = useState(true);
    const data = useSelector(state => state);
    const numberCard = data.card[0].cardNumber.split("")

    return (
        <S.Container>
            <Header />
            {details ?
            <>
            <LoanRequest title={"Solicitar Empréstimo"} />
                <S.Content>
                    <S.Title>Solicitação Realizada com Sucesso!</S.Title>
                    <S.Text>Resumo da Solicitação</S.Text>
                    <S.Data>
                        <S.Left>
                            <S.Informations>
                                <S.Information>
                                    <S.Value>{data.user[0].userName}</S.Value>
                                    <S.Value>{data.user[0].userPhone}</S.Value>
                                </S.Information>
                                <S.Image />
                            </S.Informations>
                            <S.Informations>
                                <S.Card />
                                <S.Information className="card">
                                    <S.Value>{(numberCard.slice(numberCard.length - 4, numberCard.length)).join('')}</S.Value>
                                    <S.Value className="company">{(data.card[0].company).toUpperCase()}</S.Value>
                                    <S.Value>{data.card[0].dateValue}</S.Value>
                                </S.Information>
                                <S.Image />
                            </S.Informations>
                            <S.Informations>
                                <S.Information>
                                    <S.Label>Valor Desejado: </S.Label>
                                    <S.Value id="money">R$ {data.data[0].desiredValue}</S.Value>
                                </S.Information>
                                <S.Image />
                            </S.Informations>
                        </S.Left>
                        <S.Right>
                            <S.Informations>
                                <S.Information>
                                    <S.Label>Taxa de Juros: </S.Label>
                                    <S.Value id="value">{data.data[0].fees}%</S.Value>
                                </S.Information>
                                <S.Image />
                            </S.Informations>
                            <S.Informations>
                                <S.Information>
                                    <S.Label>Parcelas: </S.Label>
                                    <S.Value id="value">{data.data[0].installment}</S.Value>
                                </S.Information>
                                <S.Image />
                            </S.Informations>
                            <S.Informations>
                                <S.Information>
                                    <S.Label>Valor da Parcela: </S.Label>
                                    <S.Value id="moneyItalic">R$ {data.data[0].installmentsValue}</S.Value>
                                </S.Information>
                                <S.Image />
                            </S.Informations>
                        </S.Right>
                        <S.Center>
                            <S.Informations>
                                <S.Information>
                                    <S.Label>Valor Total do Empréstimo: </S.Label>
                                    <S.Value id="money">R$ {data.data[0].totalLoan}</S.Value>
                                </S.Information>
                                <S.Image />
                            </S.Informations>
                        </S.Center>
                    </S.Data>
                    <S.Button onClick={e => setDetails(false)}>Detalhe da Solicitação</S.Button>
                    <S.Span>O CredFica avaliará a solicitação</S.Span>
                </S.Content>
                </>
                : <Details />}
        </S.Container>
    )
}

export default Solicitation;
