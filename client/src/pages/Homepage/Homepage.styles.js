import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background-image: url('assets/Background.png');
    background-size: cover;
`

export const InnerContainer = styled.div`
    margin: 0 auto;
    position: relative;
    top: 30vh;
    width: 500px;

    @media screen and (max-width: 800px) {
        margin: auto 30px;
        width: auto;
    }
`

export const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
`