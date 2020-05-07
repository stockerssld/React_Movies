import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {RmdbNavigation,RmdbNavigationContent} from './Navigation'

export const Navigation=({movie})=>(
    <RmdbNavigation>
        <RmdbNavigationContent>
           <Link to='/'>
               Home
           </Link>
            <p>/</p>
            <p>{movie}</p>
        </RmdbNavigationContent>
    </RmdbNavigation>
)

Navigation.prototype={
    movie: PropTypes.string
}