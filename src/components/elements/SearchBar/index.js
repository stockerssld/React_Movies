import React,{useState} from 'react'
import PropTypes from 'prop-types'

import {RmdbFaSearch,RmdbSearchbarInput,RmdbSerachbarContent,RmdbSerchBar} from './SearchBar'

let intialState={}
export function SearchBar(props){

    [state, setState]= useState(intialState)
    timeout = null
    const doSearch =(e)=>{
        const value = e.target.value
        setState({value})
        clearTimeout(timeout)
        timeout= setTimeout(()=>{
            props.callback(value)
        }, 500)
    }

    return(
        <RmdbSerchBar>
            <RmdbSerachbarContent>
                <RmdbFaSearch name="search" size="2x"/>
                <RmdbSearchbarInput type="text" onChange={doSearch} placeholder="Search" value={value}/>
            </RmdbSerachbarContent>
        </RmdbSerchBar>
    )
}

SearchBar.propTypes = {
    callback:PropTypees.func
}
