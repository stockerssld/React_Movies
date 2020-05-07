import React from 'react'
import {Link} from 'react-router-dom'
import {RmdbHeader,RmdbHeaderContent,RmdbLogo,RmdbTmdbLogo} from './Header'

export const Header =()=>(
    <RmdbHeader>
        <RmdbHeaderContent>
            <Link to='/'>
                <RmdbLogo src='/images/reactMovie_logo.png' alt='rmdb-logo'/>
            </Link>
                <RmdbTmdbLogo src="/images/tmdb_logo.png" alt="tmdb-logo"/>
        </RmdbHeaderContent>
    </RmdbHeader>
)