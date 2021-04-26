import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    background-color: #228A95;
    bottom: 0;
    color: #FFFFFF;
    font-weight: 600;


`

export const Button = styled.button`
    width: 8%;
    height: 60%;
    margin: 0 10px;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    background-color: #EF9C4B;
    font-weight: 600;
    outline: none;
    color: #FFFFFF;
    cursor: pointer;

    :hover{
        box-shadow: 0 0 5px #EF9C4B;
    }

`

export const Text = styled.div`
    padding: 0 10px;
`