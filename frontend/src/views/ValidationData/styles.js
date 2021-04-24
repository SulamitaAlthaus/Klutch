import styled from 'styled-components';

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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    justify-content: space-between;
    align-items: center;
    justify-items: center;
    margin-top: 10%;

    .table{
        position: absolute;
        width: 25%;
        height: 10%;
        text-align: right;
        right: 0;
        top: 0;
        margin: 7% 20% 0 0;
    }
`
export const Label = styled.label`
    width: 85%;
    height: 70px;
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    background-color: #F8F8F8;
    font-style: italic;
    border-radius: 5px;
    cursor: pointer;

    :hover {
        background-color: #E8FFE3;
    }

    

`
export const Input = styled.input`
    width: 40%;
    height: 70%;
    margin: 0 10px 0 5px;
    background-color: #FFFFFF;
    border: none;
    color: #EF9C4B;
    font-weight: 600;
    font-style: italic;
    border-radius: 5px;
    padding: 0 10px;
    outline: none;
`
export const Text = styled.div`
    width: 60%;
    text-align: left;
`
export const Buttons = styled.div`
    width: 65%;
    height: 70px;
    display: flex;
    justify-content: center;

    .contract{
        width: 25%;
    :hover{
        background-color: #FFFFFF;
        color: #228A95;

    }}
    
`
export const Button = styled.button`
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