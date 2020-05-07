import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'
export const RmdbSerchBar = styled.div`
    width: 100%;
    height: 105px;
    background: #c1c1c1;
    position: relative;
    padding: 25px 20px 0px 20px;
    box-sizing: border-box;
    color: #fff;
`

export const RmdbSerachbarContent = styled.div`
    max-width: 1280px;
    width: 55px; 
    background: #353535;
    margin: 0 auto;
    border-radius: 40px;
    position: relative;
    color: #fff;
`
export const RmdbFaSearch = styled(FontAwesome)`
    position: 'absolute';
    left: 20px;
    top: 12px;
    color: #fff;
`

export const RmdbSearchbarInput = styled.input`
    font-family: 'Abel', sans-serif;
    font-size: 38px;
    position: 'absolute';
    left:70px;
    top: 7px;
    border: 0;
    background: transparent;
    height:40px;
    color: #fff;
    &:focus{
        outline: none;
    }
    @media screen and (max-width: 720px){
        RmdbSearchbarInput{
            font-size: 28px;
            color: #fff;
        }
    }
`