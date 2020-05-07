import styled,{keyframes} from 'styled-components'

export const Loader = styled.div`
    border: 5px solid #f3f3f3;
    width: 50px;
    border-top: 5 solid #16d47b;
    height: 50px;
    animation: Spin 0.8 linear infinite;
    margin: 20px auto;
`
const Spin =keyframes`
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
`