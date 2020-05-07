import React from 'react'
import PropTypes from 'prop-types'
import {RmdbGrid,RmdbGridContent,RmdbGridElements} from './FourColGrod'

export const FourColGrid =({header, loading, children})=>{
    const renderElements=()=>{
        const gridElements = children.map((element, i)=>(
            <RmdbGridElements key={i}>
                {element}
            </RmdbGridElements>
        ))
        return gridElements
    }

    return(
        <RmdbGrid>
            {header && !loading ? <h1>{header}</h1>:null}
            <RmdbGridContent>
                {renderElements()}
            </RmdbGridContent>
        </RmdbGrid>
    )
}

FourColGrid.propTypes={
    header: PropTypes.string,
    loading: PropTypes.bool
}