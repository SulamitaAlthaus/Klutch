import React, { useState } from 'react';
import * as S from './styles';
import Nocard from '../../assets/nocard.png';
import Visa from '../../assets/visa.png';
import Mastercard from '../../assets/mastercard.png';
import { useSelector } from 'react-redux';

//components
import Header from '../../components/Header'
import LoanRequest from '../../components/LoanRequest'


function CreditCard() {
    const [imageCard, setImageCard] = useState(Nocard);
    const user = useSelector(state => state.user[0]);
    console.log(user)

    var cards = {
        Visa: /^4[0-9]{6}/,
        Mastercard: /^5[1-5][0-9]{6}/
    };

    function testarCC(number, cards) {
        for (var card in cards)
            if (number.match(cards[card])) {
                if (card === "Mastercard") {
                    setImageCard(Mastercard)
                } else if (card === "Visa") {
                    setImageCard(Visa)
                } else {
                    console.log("cartão não encontrado")
                }
            };
    }

    return (
        <S.Container>
            <Header />
            <LoanRequest title={"Solicitar Empréstimo"} />
            <S.Content>
                <S.Left>
                    <S.Title>Insira os dados do Cartão:</S.Title>
                    <S.Input placeholder="Lara B Esquivel" />
                    <S.NumberCard>
                        <S.Input onChange={e => testarCC(e.target.value, cards)} className="number" placeholder="000000000000" />
                        <S.Image><img src={imageCard} /></S.Image>
                    </S.NumberCard>
                    <S.Input placeholder="Data de Validade" />
                    <S.Input placeholder="CVC" />
                </S.Left>
                <S.Right>
                    <S.Title>Faça upload dos anexos do cartão</S.Title>
                    <S.Input placeholder="Cartão de Crédito (Frente)" />
                    <S.Input placeholder="Cartão de Crédito (Verso)" />
                    <S.Input placeholder="Selfie com cartão de crédito" />
                    <S.Text>Atenção: As fotos devem estar legíveis,
                        com todas as informações visíveis do cartão.</S.Text>
                </S.Right>
                <S.Button>Continuar</S.Button>
            </S.Content>
        </S.Container>
    )
}

export default CreditCard;
