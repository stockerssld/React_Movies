import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'

export const RmdbMovieinfobar = styled.div`
    width: 100%;
    height: 105px;
    background: #1c1c1c;
    position: relative;
    padding: 25px 20px 0px 20px;
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;
    font-size: 22px;
`
export const RmdbMovieinfobarContent = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    color: #fff;
`

export const RmdbMovieinfobarContentCol = styled.div`
    float: left;
    width: 33.33%;
    box-sizing: border-box;
    padding: 10px 20px 0 0;
`
export const RRmdbMovieInfoBarInfo = styled.span`
    padding: 5px 0 0 10px;
    float: left;
`
export const FaTime= styled(FontAwesome)`
    float: left;
    margin-top: -4px;
`
export const FaRevenue= styled(FontAwesome)`
    float: left;
    margin-top: -4px;
`
export const FaBudget= styled(FontAwesome)`
    float: left;
    margin-top: -3px;
`