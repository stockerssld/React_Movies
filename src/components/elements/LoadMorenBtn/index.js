import React from 'react'
import PropTypes from 'prop-types'
import {RmdbLoadMoreBtn} from './LoadMoreBtn'

export const LoadMoreBtn=({text, onClick})=>(
    <RmdbLoadMoreBtn onClick={onClick}>
        <p>{text}</p>
    </RmdbLoadMoreBtn>
)
export default LoadMoreBtn
LoadMoreBtn.propTypes={
    text: PropTypes.string,
    onClick: PropTypes.func
}