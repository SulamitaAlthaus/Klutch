import React, { useState } from 'react';
import * as S from './styles';
import Nocard from '../../assets/nocard.png';
import Visa from '../../assets/visa.png';
import Mastercard from '../../assets/mastercard.png';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

//components
import Header from '../../components/Header'
import LoanRequest from '../../components/LoanRequest'


function CreditCard() {
    const [imageCard, setImageCard] = useState(Nocard);
    const [card, setCard] = useState(false);
    const [company, setCompany] = useState("No Card");
    const [cardNumber, setCardNumber] = useState("");
    const [dateValue, setDateValue] = useState("");
    const [cvc, setCvc] = useState("");
    const [messageErr, setMessageErr] = useState(false);
    const user = useSelector(state => state.user[0]);
    const dispatch = useDispatch();

    var cards = {
        Visa: /^4[0-9]{6}/,
        Mastercard: /^5[1-5][0-9]{6}/
    };

    function FindCard(number, cards) {
        setCardNumber(number)
        for (var card in cards)
            if (number.match(cards[card])) {
                if (card === "Mastercard") {
                    setImageCard(Mastercard)
                    setCompany("Mastercard")
                } else if (card === "Visa") {
                    setImageCard(Visa)
                    setCompany("Visa")
                }
            };

    }

    function saveData() {
        if (cardNumber === "" || dateValue === "" || cvc === "") {
            setMessageErr(true)
        } else {
            dispatch({
                type: 'ADD_CARD',
                saveCard: { cardNumber: cardNumber, dateValue: dateValue, cvc: cvc, company: company }
            })
            setCard(true)
        }
    }


    return (
        <S.Container>
            <Header />
            <LoanRequest title={"Solicitar Empréstimo"} />
            <S.Content>
                {!card ?
                    <>
                        <S.Left>
                            <S.Title>Insira os dados do Cartão:</S.Title>
                            <S.Input defaultValue={user.userName} />
                            <S.NumberCard>
                                <S.Input onChange={e => FindCard(e.target.value, cards)} className="number" placeholder="000000000000" />
                                <S.Image><img src={imageCard} /></S.Image>
                            </S.NumberCard>
                            <S.Input placeholder="Data de Validade" onChange={e => setDateValue(e.target.value)} />
                            <S.Input placeholder="CVC" onChange={e => setCvc(e.target.value)} />
                        </S.Left>
                        <S.Right>
                            <S.Title>Faça upload dos anexos do cartão</S.Title>
                            <S.Input placeholder="Cartão de Crédito (Frente)" />
                            <S.Input placeholder="Cartão de Crédito (Verso)" />
                            <S.Input placeholder="Selfie com cartão de crédito" />
                            <S.Text>Atenção: As fotos devem estar legíveis,
                        com todas as informações visíveis do cartão.</S.Text>
                        </S.Right>
                        {messageErr ? <S.MsgErr>Preencha todos os campos</S.MsgErr> : null}
                        <S.Button onClick={saveData}>Continuar</S.Button>
                    </> :
                    <S.Choice>
                        <S.Text className="text">Escolha a modalidade:</S.Text>
                        <Link to="/dados"><S.Button className="button">Cartão de Crédito</S.Button></Link>
                        <S.Text className="span">Ou</S.Text>
                        <S.Button className="button" disabled={true}>Crédito Consignado</S.Button>
                        <S.Text className="textfooter">Em Breve</S.Text>
                    </S.Choice>}
            </S.Content>
        </S.Container>
    )
}

export default CreditCard;
