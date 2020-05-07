import styled,{keyframes} from 'styled-components'

export const RmdbGrid = styled.div`
    h1{
        font-family: 'Abel', sans-serif;
        font-size: 42px;
        @media screen and (max-width: 720px){
            font-size: 22px;   
        }
    }
`

export const RmdbGridContent= styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    @media screen and (max-width: 720px) {
        grid-template-columns: auto auto;
    }
`
export const RmdbGridElements = styled.div`
    margin: 0 40px 40px 0;
    background: #353535;
    max-height: ${animateGrid} 0.5;
`

const animateGrid = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
` 
const RmdbGridElement = styled.div`
    &:nth-child(4n+4){
        margin-right: 0;
        @media screen and (max-width: 720px){
         margin-right: 0;   
        }
    }
`
