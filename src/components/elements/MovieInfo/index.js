import React from 'react'
import {API_KEY,API_URL,BACKDROP_SIZE,IMAGE_BASE_URL,POSTER_SIZE} from './../../../config'
import PropoTypes from 'prop-types'
import  {FaFilm,Meter,RmdbDirector,RmdbMovieinfo,RmdbRating,RmdbScore} from './MovieInfo'

export const MovieInfo=({movie, directors})=>(
    <Meter>
        <RmdbMovieinfo style={{background: movie.backdrop_path? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path})`: '#000'}}>
            
        </RmdbMovieinfo>
    </Meter>
)