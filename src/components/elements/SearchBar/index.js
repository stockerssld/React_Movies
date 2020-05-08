import React,{useState} from 'react'
import PropTypes from 'prop-types'

import {RmdbFaSearch,RmdbSearchbarInput,RmdbSerachbarContent,RmdbSerchBar} from './SearchBar'

let intialState={
    value:''
}
function SearchBar(props){

    const [state, setState]= useState(intialState)
    const timeout = null
    const doSearch =(e)=>{
        const value = e.target.value
        setState({value})
        clearTimeout(timeout)
        timeout= setTimeout(()=>{
            props.callback(value)
        }, 500)
    }
    const {value}=state
    return(
        <RmdbSerchBar>
            <RmdbSerachbarContent>
                <RmdbFaSearch name="search" size="2x"/>
                <RmdbSearchbarInput type="text" onChange={doSearch} placeholder="Search" value={value}/>
            </RmdbSerachbarContent>
        </RmdbSerchBar>
    )
}
export default SearchBar

SearchBar.propTypes = {
    callback:PropTypes.func
}
