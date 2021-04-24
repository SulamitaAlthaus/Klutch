import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 50px;
    display: grid;
`

export const Content = styled.div`
    width: 60%;
    margin: auto;
    color: #228A95;
    text-align: center;
`

export const Left = styled.div`
    width: 50%;
    float: left;
    display: grid;
`

export const Right = styled.div`
    width: 50%;
    float: right;
    display: grid;
`

export const Title = styled.div`
    margin: 10px;
`

export const NumberCard = styled.div`
    display: flex;
    align-items: center;

    .number{
        width: 60%;
        margin-right: 0;
    }
`

export const Image = styled.div`
    height: 50px;
    width: 20%;
    background-color: #F8F8F8;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 35px;
    }
`

export const Input = styled.input`
    width: 80%;
    height: 50px;
    background-color: #F8F8F8;
    border: none;
    padding: 0 30px;
    outline: none;
    color: #777777;
    font-size: 1.3rem;
    border-radius: 5px 0 0 5px;
    margin: 5px;
    font-weight: 700;
    font-style: italic;

    ::placeholder{
        font-size: 1.1rem;
    }
`

export const Text = styled.div`
    margin: 5px 5px 20px 5px;
    text-align: left;
`

export const Button = styled.button`
    width: 250px;
    height: 70px;
    background-color: #228A95;
    color: #FFFFFF;
    border: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 10px;
    margin: 5% 25% 0 5%;

    .link{
        text-decoration: none;
        color: #FFFFFF;
    }
`
export const Choice = styled.div`
    display: grid;
    justify-content: center;

    .text{
        text-align: center;
        font-size: 1.3rem;
    }
    .button{
        margin: 0 5px;
            
        :disabled{
            opacity: 0.5;
            cursor: auto;
        }
    }
    .span{
        margin: 10px;
        color: #777777;
        font-size: 1.3rem;
        text-align: center;
    }
    .textfooter{
        color: #777777;
        font-size: 1rem;
        text-align: right;
    }
`
