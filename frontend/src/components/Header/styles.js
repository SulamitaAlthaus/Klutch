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
    margin-left: 1%;
    height: 25px;

`
export const Logo = styled.img.attrs({ src: `${logo}` })`
    width: 90%;
    height: 65%;
    display: flex;
`