import React from 'react'
import {API_KEY,API_URL,BACKDROP_SIZE,IMAGE_BASE_URL,POSTER_SIZE} from './../../../config'
import PropoTypes from 'prop-types'
import  {FaFilm,Meter,RmdbDirector,RmdbMovieinfo,RmdbRating,RmdbScore,RmdbMovieinfoContent,RmdbMovieinfoText,RmdbMovieintoThumb} from './MovieInfo'
import MovieThumb from './../MovieThumb'
export const MovieInfo=({movie, directors})=>(
    <RmdbMovieinfo style={{background: movie.backdrop_path? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path})`: '#000'}}>
        <RmdbMovieinfoContent>
            <RmdbMovieintoThumb>
                <MovieThumb
                    image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`: './images/no_image.jpg'}
                    clickable={false}
                />
                
            </RmdbMovieintoThumb>
            <RmdbMovieinfoText>
                <h1>{movie.title}</h1>
                <h3>PLOT</h3>
                <p>{movie.overview}</p>
                <h3>IMB RATING</h3>
                <RmdbRating>
                    <Meter min="0" max="100" optimum="100" low="40" high="70" value={movie.vote_average * 10}>
                        <RmdbScore>{movie.vote_average}</RmdbScore>
                    </Meter>
                </RmdbRating>
                {directors.length >1 ? <h3>DIRECTORS</h3>:<h3>DIRECTOR</h3>}
                {
                    directors.map((element, i)=>{
                        return <RmdbDirector key={i}>{element.name}</RmdbDirector>
                    }   

                )}
            </RmdbMovieinfoText>
            <FaFilm name="film" size="5x"/>
        </RmdbMovieinfoContent>  
    </RmdbMovieinfo>
)
MovieInfo.propTypes={
    movie: PropTypes.object,
    directors: PropTypes.array
}