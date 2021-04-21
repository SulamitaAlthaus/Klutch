import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    font-family: Arial, Helvetica, sans-serif;
    color: #228A95;
    display: grid;
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

export const Input = styled.div`
    width: 100%;
    margin: 10px;
    display: flex;
    justify-content: space-between;

    .inputMoney{
        width: 70%;
        outline: none;
        border: none;
        height: 50px;
        text-align: center;
        border-radius: 5px;
        background-color: #F8F8F8;
        font-size: 25px;
        color: #777777;
        
        :hover, :focus {
            box-shadow: 0 0 5px #777777;
        }
    }

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
    outline: none;
    cursor: pointer;

    :hover{
        box-shadow: 0 0 5px #EF9C4B;
    }
`
export const MessageErr = styled.div`
    width: 100%;
    text-align: center;
    
    span{
        width: 100%;
        color: #FF0000;
    }
`
export const StandardTable = styled.div`
    display: grid;
    align-items: center;
`

