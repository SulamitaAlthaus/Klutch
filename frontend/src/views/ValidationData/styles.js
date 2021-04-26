import styled from 'styled-components';
import check from '../../assets/checkmark.svg';


export const Container = styled.div`
    width: 100%;
    height: 100%;
    font-family: Arial, Helvetica, sans-serif;
    color: #228A95;
    font-weight: 600;
    display: grid;
    font-size: 0.9rem;
    justify-items: center;
`
export const Top = styled.label`
    position: absolute; 
    width: 65%;
    height: 150px;
    margin-top: 3%;
    display: flex;
    align-items: center;
    padding: 0 10%;
    
`

export const Content = styled.div`
    width: 65%;
    height: 200px;
    margin-top: 10%;

`

export const Text = styled.div`
    width: 60%;
    text-align: left;
`
export const Buttons = styled.div`
    width: 62%;
    height: 70px;
    display: flex;
    justify-content: center;

    .link{
        width: 80%;
        text-decoration: none;
        button{ 
            width: 100%;
    }}
    
    .contract{
        width: 25%;

        :hover{
            background-color: #FFFFFF;
            color: #228A95;
        }
    }
`
export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45%;
    height: 100%;
    background-color: #228A95;
    color: #FFFFFF;
    border: none;
    border-radius: 3px;
    outline: none;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 10px;
    margin-top: 10px;
`
export const Conclude = styled.img.attrs({ src: `${check}` })`
    width: 20%;
    height: 65%;
    display: flex;
`
export const Table = styled.div`
    width: 63%;
    display: flex;
    justify-content: center;
    margin-top: 4%;
`
export const HeaderTable = styled.div`
    width: 97%;
    background-color: #F8F8F8;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 600;
`
export const Title = styled.div`
    margin: 10px 0 25px 0;
    font-size: 1.2rem;
    font-weight:750;
`
export const Colums = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;

    #row1{
        :hover{
            background-color: red;
        }
    }
`
export const Colum = styled.div`
    width: 100%;
    color: #777777;
    border: 1px solid #E2E2E2;
    font-size: 1rem;
    text-align: center;
    align-self: center;
    padding: 15px 0;
`
export const MsgErr = styled.div`
    color: red;
`