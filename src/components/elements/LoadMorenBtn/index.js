import React from 'react'
import PropTypes from 'prop-types'
import {RmdbLoadMoreBtn} from './LoadMoreBtn'
export const LoadMorBtn=({text, onClick})=>(
    <RmdbLoadMoreBtn onClick={onClick}>
        <p>{text}</p>
    </RmdbLoadMoreBtn>
)
LoadMorBtn.propTypes={
    text: PropTypes.string,
    onClick: PropTypes.func
}