import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    font-family: Arial, Helvetica, sans-serif;
    color: #228A95;
    display: grid;
`
export const Content = styled.div`
    width: 25%;
    margin: 10px auto;
    display: grid;
`
export const Title = styled.div`
    text-align: center;
    font-size: 1.2rem;
`
export const Input = styled.div`
    display: flex;
    margin: 20px 0;

    .cpf{
        width:100%;
        height: 40px;
        background-color: #F8F8F8;
        border: none;
        padding: 0 30px;
        outline: none;
        color: #777777;
        font-size: 1.3rem;
        border-radius: 5px 0 0 5px;

        ::placeholder{
            font-size: 1.1rem;
        }
    }
`
export const Search = styled.button`
    width: 40%;
    background-color: #228A95;
    color: #FFFFFF;
    border: none;
    border-radius: 0 5px 5px 0;
    outline: none;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
`
export const Client = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    justify-content: center;
    padding: 20px 0;
    background-color: #F8F8F8;
    border-radius: 5px;
    text-align: center;
    font-size: 1.2rem;
    display: grid;

`
export const Text = styled.div`
    color: #777777;
`
export const Cpf = styled.div`
    color: #EF9C4B;
`
export const Name = styled.div`
    font-weight: 600;
`
export const Button = styled.button`
    width: 250px;
    background-color: #228A95;
    color: #FFFFFF;
    border: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 10px;
`
export const MessageErr = styled.div`
    background-color: #F8F8F8;
    border-radius: 5px;
    text-align: center;
    padding: 5px;
    font-size: 1.2rem;
    color: #777777;
`