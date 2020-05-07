import styled from 'styled-components'

export const RmbdbMovieThumb= styled.div`
    img{
        width: 500px;
        height:auto;
        max-width: 100%;
        max-height: 100%;
        transition: all 0.3s;
        box-sizing: border-box;
    }
`

export const Clickable = styled.img`
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
`

