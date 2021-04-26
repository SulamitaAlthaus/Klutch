import styled from 'styled-components';
import checkmark from '../../assets/checkmarkblue.svg';
import card from '../../assets/orangeCard.svg';
import files from '../../assets/files.svg';
import file from '../../assets/file.svg';
import alert from '../../assets/alert.svg';
import conclude from '../../assets/conclude.svg';

export const Container = styled.div`
    width: 100%;
    display: grid;
    color: #228A95;
    font-size: 1.1rem;
`

export const Content = styled.div`
    width: 60%;
    display: grid;
    align-items: center;
    justify-self: center;
`

export const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    height: 20px;
    text-align: center;
`

export const Text = styled.div`
    justify-self: left;
    margin: 20px 15px 0 15px;
`

export const Data = styled.div`
    width: 100%;
    justify-content: space-between;
    align-items: center;
    justify-items: center;

`
export const Left = styled.div`
    width: 50%;
    float: left;
    display: grid;
    justify-items: center;
`

export const Right = styled.div`
    width: 50%;
    float: right;
    display: grid;
    justify-items: center;
`
export const Center = styled.div`
    width: 60%;
    justify-self: center;
    margin: 20px auto;
`

export const Informations = styled.div`
    width: 85%;
    background-color: #E8FFE4;
    border-radius: 5px;
    margin: 10px;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    
    .card{
        width: 60%;
        margin-right: 10%;
    }
`

export const Information = styled.div`
    width: 85%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
    font-weight: 600;
    font-style: italic;
    color: gray;
    padding: 5px;

    .company{
        font-style: normal;
        color: #484646;
    }
    #money{
        font-size: 1.2rem;
        font-weight: 900;
        color: #31AC2B;
        height: 25px;
        font-style: normal;
    }
    #moneyItalic{
        font-size: 1.2rem;
        font-weight: 900;
        color: #31AC2B;
        height: 25px;
        font-style: italic;
    }
    #value{
        font-size: 1.2rem;
        font-weight: 900;
        color: #EF9C4B;
        height: 25px;
    }
`


export const Image = styled.img.attrs({ src: `${checkmark}` })`
    width: 10%;
`
export const Card = styled.img.attrs({ src: `${card}` })`
    margin-left: 5px;
`

export const Label = styled.div`
    color: #228A95;
    font-weight: 700;
    font-size: 0.9rem;
`
export const Value = styled.div`
    margin-right: 5px;

`

export const Button = styled.div`
    display: flex;
    justify-content: center;
    justify-self: center;
    align-items: center;
    width: 40%;
    height: 100%;
    background-color: #228A95;
    color: #FFFFFF;
    border: none;
    border-radius: 3px;
    outline: none;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 5px;
    margin-top: 10px;
`

export const Span = styled.div`
    justify-self: center;
    font-size: 0.8rem;
    margin: 2%;

`
export const Header = styled.div`
    width: 15%;
    height: 80px;
    display: flex;
    align-items: center;
    margin: 2% 20%;
`
export const Files = styled.img.attrs({ src: `${files}` })`
    height: 100%;
`
export const ContentDetails = styled.div`
    width: 60%;
    margin: auto;
    margin-bottom: 3%;
    display: flex;
    justify-content: space-between;
    color: #777777;
    
`
export const DetailsLeft = styled.div`
    float: left;
    width: 50%;
    height: 600px;
    display: grid;
    justify-items: center;

`
export const DetailsRight= styled.div`
    float: right;
    width: 50%;
    display: grid;
    justify-items: center;
    
`
export const DataDetails= styled.div`
    width: 90%;
    height: 25px;
    background-color: #F8F8F8;
    border-radius: 5px;
    padding: 15px 10px;
    margin: 10px;

    #variable{
        color:  #228A95;
        font-weight: 600;
        margin: 0 5px;
    }

`
export const Square = styled.div`
    width: 97%;
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    margin: 0 20px;

    #square{
        display: grid;
        width: 85%;
        height: 150px;
        padding: 10px 8px;
        margin: 5px 0;
        justify-self: center;
        text-align: center;
    }
`

export const SquareRight = styled.div`
    width: 97%;
    display: grid;

    #squareRight{
        width: 94%;
        height: 170px;
        justify-self: center;
        text-align: center;
        margin: 5px 0;
    }
    #textCard{
        display: flex;
        align-self: center;
        justify-content: center;
        font-style: italic;
        font-size: 1rem;
        color: #777777;
    }
    #imageCard{
        margin-left: 15px;
    }
    
    #informationSquare{
        display: flex;
        align-self: center;
        justify-content: center;
        font-style: italic;
        font-size: 1rem;
        color: #777777;

    }
    #textRight{
        display: flex;
        align-self: center;
        justify-content: center;
        font-style: italic;
        color: #777777;
        font-size: 0.8rem;
        margin-top: 10px;
    }
    #userData{
        display: grid;
        text-align: left;
        margin-top: 5px;
    }

    #solicitationData{
        width: 93%;
        justify-self: center;
        height: 120px;
        background-color: #E8F3F4;
        border: 1.5px dashed #187680;
    }
`
export const Options = styled.div`
    margin: 10px;
    display: grid;
    justify-content: center;

    #orange{
        width: 170px;
        background-color: #EF9C4B;
        justify-self: center;
    }
    #blue{
        background-color: #228A95;
    }
    #red{
        background-color: #BC3434;
    }
`
export const Bottom = styled.div`
    display: flex;
    margin: 0;
`
export const ButtonOptions = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;
    height: 30px;
    border: none;
    border-radius: 5px;
    margin: 5px;
    cursor: pointer;
    color: #FFFFFF;
`
export const ImageAlert = styled.img.attrs({ src: `${alert}` })`
    width: 18px;
    margin-right: 5px;
`
export const ImageConclude = styled.img.attrs({ src: `${conclude}` })`
    width: 18px;
    margin-right: 5px;
`
export const TextRight = styled.div`
    text-align: left;
    margin-left: 10px;
    font-size: 0.9rem;
`
export const ValueSquare= styled.div`
    color: #31AC2B;
    font-weight: 800;
    font-size: 1.5rem;
    margin: 0;
    padding-bottom: 10px;

`
export const File = styled.img.attrs({ src: `${file}` })`
    width: 35%;
    justify-self: center;
    margin: 10px;
`
export const Download = styled.div`
    text-decoration: underline;
    color: #2D98B4;
    font-size: 0.8rem;
    margin: 15px auto;
    padding-bottom: 10px;
    cursor: pointer;
`