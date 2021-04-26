import styled from 'styled-components';
import plus from '../../assets/plus.svg';
import files from '../../assets/files.svg';

export const Container = styled.div`
    width: 380px;
    height: 80%;
    font-family: Arial, Helvetica, sans-serif;
    color: #228A95;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1% 0 0 15%;
`

export const Plus = styled.img.attrs({ src: `${plus}` })`
    height: 35%;
    margin-top: 0;
    display: flex;
    align-items: top;
`
export const Files = styled.img.attrs({ src: `${files}` })`
    height: 65%;
`
export const Text = styled.div`
    width: 220px;
    font-size: 40px;
    font-weight: 700;

`
