import React from 'react'
import PropTypes from 'prop-types'
import {RmdbHeroImage,RmdbHeroimageContent,RmdbHeroimageText} from './HeroImage'


const HeroImage=({image, title, text})=>(
    <RmdbHeroImage
        style={{background:`
            linear-gradient(to bottom, rgba(0,0,0,0)
            39%, rgba(0,0,0,0)
            41%, rgba(0,0,0,0.65)
            100%),
            url('${image}'), #1c1c1c
        `}}
    >
        <RmdbHeroimageContent>
            <RmdbHeroimageText>
                <h1>{title}</h1>
                <p>{text}</p>
            </RmdbHeroimageText>
        </RmdbHeroimageContent>
    </RmdbHeroImage>
)
HeroImage.propTypes={
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
}
export default HeroImage