import styled from 'styled-components';
import menu from '../../assets/menu.svg';
import logo from '../../assets/logo.svg';

export const Container = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    background-color: #228A95;
    align-items: center;
`

export const Menu = styled.img.attrs({ src: `${menu}` })`
    width: 10%;
    height: 25px;

`
export const Logo = styled.img.attrs({ src: `${logo}` })`
    width: 80%;
    height: 65%;
    display: flex;
`