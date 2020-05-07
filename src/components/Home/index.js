import React, {useState, useEffect} from 'styled-components'
import {API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE,BACKDROP_SIZE} from './../../config'
import { RmdbHome,RmdbHomeGrid } from './Home'
import HeroImage from './../elements/HeroImage'
import SearchBar from './../elements/SearchBar'
import FourColGrid from './../elements/FourColGrid'
import MovieThum from './../elements/MovieThumb'
import LoadMoreBtn from './../elements/LoadMorenBtn'
import Spinner from './../elements/Spinner'

let={
    movies:[],
    heroImage:null,
    loading: false,
    currentPage: 0,
    totalPages:0,
    searchTerm:''
}
export default function Home(){
    [state, setState]=useState(initialState)
    useEffect(()=>{
        if(sessionStorage.getItem('HomeState')){
            let state= JSON.parse(sessionStorage.getItem('HomeState'))
            setState({...state})
        }else{
            setState({...state, loading:true})
            const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
            fetchItems(endpoint)
        }
    },[])

    const searchItems=(serachTerm)=>{
        let endpoint=''
        setState({
            ...state,
            movies:[],
            loading: true,
            serachTerm
        })
        if(serachTerm===""){
            endpoint =`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        }else{
            endpoint =`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&query=${serachTerm}`
        }
        fetchItems(endpoint)
    }
    const loadMoreItems=()=>{
        const { serachTerm, currentPage }= state

        let endpoint=''
        setState({...state, loading: true})
        if(serachTerm===''){
            endpoint =`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage+1}`
        }else{
            endpoint=`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${currentPage+1}`
        }
        fetchItems(endpoint)
    }
    const fetchItems=(endpoint)=>{
        const {movies, heroImage, searchTerm} = state

        fetch(endpoint)
        .then(result=> result.json())
        .then(result=>({
            ...state,
            movies: [...movies, ...result.results],
            heroImage: heroImage || result.results[0],
            loading: false,
            currentPage: result.page,
            totalPages: result.total_pages
        }, ()=>{
            if(searchTerm===""){
                sessionStorage.setItem('HomeState', JSON.stringify(state))
            }
        }))
        .catch(error=> console.log('Errors', error))
    }
    
    const { movies, heroImage, loading, currentPage, totalPages, searchTerm } = state;
    
    return(
        <RmdbHome>
            {
                heroImage ?
                <div>
                    <HeroImage
                        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
                        title={heroImage.original_title}
                        text={heroImage.overview}
                    />
                    <SearchBar callback={searchItems}/>
                </div>
                : null
            }
            <RmdbHomeGrid>
                <FourColGrid
                    header={searchTerm?'Search Resul': 'Popular Movies'}
                    loading={loading}
                >
                    {
                        movies.map((element, i)=>(
                            <MovieThum
                                key={i}
                                clickable={true}
                                image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : './images/no_image.jpg'}
                                movieId={element.id}
                                movieName={element.original_title}
                            />
                        ))
                    }
                </FourColGrid>
                {loading ? <Spinner/> : null}
                {(currentPage <= totalPages &&!loading)?
                    <LoadMoreBtn text="Load More" onClick={loadMoreItems}/>
                    :null
                }
            </RmdbHomeGrid>
        </RmdbHome>
    )
}