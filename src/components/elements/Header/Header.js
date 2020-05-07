import styled from 'styled-components'

export const RmdbHeader = styled.div`
    width: 100%;
    height: auto;
    background: #c1c1c1;
    padding: 0 20px;
    box-sizing: border-box;
`
export const RmdbHeaderContent = styled.div`
    max-width: 1280px;
    min-height: 120px;
    height: auto;
    padding: 20px 0px;
    margin: 0 auto;
    box-sizing: border-box;
    overflow: hidden;
    @media screen and (max-width: 500px){
        max-width: 1280px;
        min-height: 0px     
    }
`

export const RmdbLogo  = styled.img`
    width: 300px;
    margin-top: 20px;
    @media screen and (max-width: 500px){
        display: inline-block;
        width:80px;
        margin-top: 0px
    }
`
export const RmdbTmdbLogo = styled.img`
    width: 122px;
    margin-top: 25px;
    float: right;
    @media screen and (max-width: 500px){
        width: 150px;
        margin-top: 5px;
    }
`