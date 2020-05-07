import React,{useState, useEffect} from 'react'
import {API_URL,API_KEY} from './../../config'
import Navigation from './../elements/Navigation'
import MovieInfo from './../elements/MovieInfo'
import MovieInfoBar from './../elements/MovieInfoBar'
import Spinner from './../elements/Spinner'
import Actor from './../elements/Actor'
import FourColGrid from './../elements/FourColGrid'

import {RmdbMovie,RmdbMovieGrid} from './Movie'
let initialState={
    movie: null,
    actors: null,
    directors:[],
    loading: false
}
export function Movie(props){
    [state, setState]=useState(initialState)

    useEffect(()=>{
        const {movieId}= props.match.params

        if(localStorage.getItem(`${movieId}`)){
            let state = JSON.parse(localStorage.getItem(`${movieId}`))
            setState({...state})
        }else{
            setState({loading: true})
            let endpoint =`${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
            fetchItems(endpoint)
        }
    },[])

    fetchItems=()=>{
        const {movieId} = props.match.params

        fetch(endpoint)
        .then(endpoint)
        .then(result=>result.json())
        .then(result=>{
            setState({...state, movie: result},()=>{
                let endpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`
                fetch(endpoint)
                .then(result=>result.json())
                .then(result=>{
                    const directors = result.crew.filter((member)=>member.job==="Director")

                    setState({...state, actors: result.cast, directors, loading:false},()=>{
                        localStorage.setItem(`${movi}`, JSON.stringify(state))
                    })
                })
            })
        })
        .catch(error=> console.log("Error", error))
    }
    
    const { movieName }= props.location
    const { movie, directors, actors, loading }= state
    return(
        <RmdbMovie>
            {
                movie? 
                <div>
                    <Navigation movie={movieName}/>
                    <MovieInfo movie={movie} directors={directors}/>
                    <MovieInfoBar time={movie.runtime} buget={movie.budget} revenue={movie.revenue}/>
                </div>
                :null 
            }
            {
                actors ?
                <RmdbMovieGrid>
                    <FourColGrid header={'Actors'}>
                        {
                            actors.map((element, i)=>(
                                <Actor key={i} actor={element}/>
                            ))
                        }
                    </FourColGrid>
                </RmdbMovieGrid>
            }
           {!actors && !loading ? <h1>No movie found</h1>:null} 
           {loading? <Spinner/>:null}
        </RmdbMovie>
    )
}