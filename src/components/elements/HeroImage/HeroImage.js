import styled,{keyframes} from 'styled-components'


const animateHeroImage = keyframes`
    from {
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`
export const RmdbHeroImage = styled.div`
    background-size: 100%, cover !important;
    background-position: center, center !important;
    width: 100%;
    height: 100%;
    position: relative;
    animation: ${animateHeroImage} 1s;
`

export const RmdbHeroimageContent = styled.div`
    max-width: 1280px;
    padding: 20px;
    margin: 0 auto;
`

export const RmdbHeroimageText= styled.div`
    z-index: 100;
    max-width: 700px;
    position: absolute;
    bottom: 40px;
    margin-right: 20px;
    min-height: 100px;
    background: rgba(0,0,0,0.0);
    color: #fff;
    @media screen and (max-width: 720px) {
        max-width: 100%
    }
    h1{
        font-family: 'Abel', sans-serif;
        font-size: 48px;
        color: #fff;
        @media screen and (max-width: 720px) {
            font-size: 38px;
            color: #fff;   
        }
    }
    p{
        font-family: 'Abel' sans-serif;
        font-size: 22px;
        line-height: 26px;
        color: #fff;
        @media screen and (max-width: 720){
         font-size: 16px;
         line-height: 20px;
         color: #fff;   
        }
    }
`