import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    justify-content: space-between;
    align-items: center;
    justify-items: center;

    .table{
        position: absolute;
        width: 25%;
        height: 70px;
        text-align: right;
        right: 0;
        top: 0;
        margin: 7% 20% 0 0;
    }
`

export const Content = styled.div`
    justify-content: space-between;
    align-items: center;
    justify-items: center;
    margin-top: 10%;

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

    .installment{
        width: 40%;
        height: 70%;
    }
    
    .arrowsInstallment{
        width: 6%;
        height: 50%;
        margin-right: 5px;
    }

`
export const Input = styled.input`
    appearance: textfield;
    width: 35%;
    height: 70%;
    margin: 0 10px 0 2px;
    background-color: #FFFFFF;
    border: none;
    color: #EF9C4B;
    font-weight: 600;
    font-style: italic;
    border-radius: 5px;
    padding: 0 10px;
    outline: none;

`
export const InputArrows = styled.div`
    width: 70%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #FFFFFF;
    margin-right: 10px;
    border-radius: 5px;

    .arrows{
        width: 90%;
        margin-right: 0;
        border-radius: 5px 0 0 5px;
    }

`
export const Arrows = styled.div`
    width: 5%;
    height: 65%;
    background-color: #FFFFFF;
    margin-right: 5px;
`
export const Arrow = styled.img`
    width: 100%;
    height: 45%;
    display: flex;

    cursor: pointer;
        :hover{
            opacity: 0.5;
        }
`