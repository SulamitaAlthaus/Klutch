import React, { useState, useEffect } from 'react';
import * as S from './styles';

//components
import Header from '../../components/Header'

function Home() {

  return (
    <S.Container>
      <Header />
      <S.Header>
        <S.Plus/>
        <S.Files/>
        <S.TextHeader>Simulação de Taxas</S.TextHeader>
      </S.Header>
      <S.Content>
        <S.TextContent>Valor Desejado</S.TextContent>
        <S.Input type="number" min="300.00" max="10000.00" placeholder="R$ 0,00"/>
        <S.Button>Calcular</S.Button>
      </S.Content>
    </S.Container>
  )
}

export default Home;
