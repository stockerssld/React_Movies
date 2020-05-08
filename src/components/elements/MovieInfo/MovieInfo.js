import styled, {keyframes} from 'styled-components'
import FontAwesome from 'react-fontawesome'


const Animatemovieinfo = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`
export const RmdbMovieinfo = styled.div`
    background: cover !important;
    background-position: center !important;
    width: 100%;
    height: 600px;
    padding: 40px 20px; 
    box-sizing: border-box;
    animation: ${Animatemovieinfo} 1s;
`
export const RmdbMovieinfoContent = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: rgb(0,0,0,0.7);
    position: relative;
`
export const RmdbMovieintoThumb= styled.div`
    width: 350px;
    height: 100%;
    overflow: hidden;
    position: absolute;
    left: 0px;
`
export const RmdbMovieinfoText = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    height: 100%;
    width: auto;
    padding: 40px; 
    color: #fff;
    overflow: hidden;
    box-sizing: border-box;
    position: absolute;
    left: 360px;

    h1{
        font-family: 'Abel', sans-serif;
        font-size: 48px;
        margin: 0;
    }

    h3{
        font-size: 16px;
        line-height:0;
        margin-top: 30px;
    }

    p{
        font-family: 'Abel', sans-serif;
        font-size: 18px;
        line-height: 26px;
    }
`
export const RmdbRating= styled.div`
    width: 250px;
    height: 20px;
    margin-top: 20px;
    position: relative;
`
export const RmdbScore = styled.p`
    position: absolute;
    margin: 0;
    right: 0px;
    top: -3px;
`
export const RmdbDirector = styled.p`
    margin: 0;
`
export const FaFilm = styled(FontAwesome)`
    position: absolute;
    bottom: 40px;
    right: 40px;
    color: #fff;
`
export const Meter  = styled.meter`
    &::-webkit-meter-bar{
        background: #fff;
        width: 200px;
    }
    &::-webkit-meter-optimum-value{
        background: linear-gradient( to bottom, #16d47b)    
    }
    &::-webkit-meter-suboptimun-value{
        background: linear-gradient(to bottom, #fbb450);
    }
    &::-webkit-meter-even-less-good-value{
        background: linear-gradient(to bottom, #ee5f5b)
    }
`