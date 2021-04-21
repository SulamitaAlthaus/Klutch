import styled from 'styled-components';
import plus from '../../assets/plus.svg';
import files from '../../assets/files.svg';

export const Container = styled.div`
    width: 33%;
    height: 100%;
    font-family: Arial, Helvetica, sans-serif;
    color: #228A95;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 15%;
`

export const Plus = styled.img.attrs({ src: `${plus}` })`
height: 50%;
`
export const Files = styled.img.attrs({ src: `${files}` })`
height: 80%;
`
export const Text = styled.div`
width: 60%;
font-size: 40px;
font-weight: 700;

`
