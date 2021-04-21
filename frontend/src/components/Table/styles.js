import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    font-family: Arial, Helvetica, sans-serif;
    color: #228A95;
    display: grid;
`

export const Table = styled.div`
    width: 70%;
    height: 100%;
    margin: auto;
    display: flex;
`

export const Checkbox = styled.label`
    width: 5%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #E5E5E5;
    cursor: pointer;
`
export const Option = styled.input`
    width: 25px;
    height: 25px;
    border: 1px solid #B5B5B5;
    border-radius: 50px;
    outline: none;

    appearance: none;
        -webkit-appearance: none;

    :checked {
        border: 3px solid #E2E2E2;
        background-color: #B5B5B5;
    }
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
export const Rows = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;

`
export const Row = styled.div`
    display: flex;
    cursor: pointer;

    :hover{
        background-color: RGBA(239,223,75,0.2);
    }

`
export const Cell = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
    color: #777777;
    border: 1px solid #E2E2E2;
    font-weight: normal;
`