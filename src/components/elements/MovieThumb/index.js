import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Clickable,RmbdbMovieThumb} from './MovieThumnb'

export default MovieThum=({image, movieId,movieName, clickable})=>(
    <RmbdbMovieThumb>
        {
            clickable ?
            <Link to={{pathname: `/${movieId}`, movieName: `${movieName}`}}>
                <Clickable src={image} alt="moviethumb" />
            </Link>
            :
            <img src={image} alt='moviethumnn'/>

        }
    </RmbdbMovieThumb>
)

MovieThum.propTypes={
    image: PropTypes.string,
    movieId: PropTypes.number,
    movieName: PropTypes.string,
    clickable: PropTypes.bool
}