import styled from 'styled-components';
import plus from '../../assets/plus.svg';
import files from '../../assets/files.svg';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    font-family: Arial, Helvetica, sans-serif;
    color: #228A95;
`

export const Header = styled.div`
    width: 30%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 15%;
    margin-top: 45px;
`
export const Plus = styled.img.attrs({ src: `${plus}` })`
    height: 50%;
`
export const Files = styled.img.attrs({ src: `${files}` })`
    height: 80%;
`
export const TextHeader = styled.div`
    width: 60%;
    font-size: 40px;
    font-weight: 700;
    
`

export const Content = styled.div`
    width: 40%;
    height: 150px;
    justify-content: space-around;
    align-items: center;
    padding: 30px;
    margin: auto;

`

export const TextContent = styled.div`
    width: 100%;
    font-size: 30px;
    text-align: center;
    font-weight: 600;
`

export const Input = styled.input`
    width: 65%;
    height: 50px;
    border: none;
    border-radius: 5px;
    background-color: #F8F8F8;
    margin: 20px;
    outline: none;
    font-size: 25px;
    text-align: center;
    color: #777777;

`

export const Button = styled.button`
    width: 25%;
    height: 48px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    color: #FFFFFF;
    background-color: #EF9C4B;
    font-weight: 600;
`
