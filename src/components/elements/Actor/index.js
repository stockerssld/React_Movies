import React from 'react'
import {IMAGE_BASE_URL} from './../../../config'
import PropTypes from 'prop-types'
import { RmbdActor,RmdbActorCharacter,RmdbActorName } from './Actor'

const Actor =({actor})=>{
    const POSTER_SIZE='w154';

    return(
        <RmbdActor>
            <img src={actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`: null}
                alt="acthorThumb"/>
            <RmdbActorName>{actor.name}</RmdbActorName>
            <RmdbActorCharacter>{actor.character}</RmdbActorCharacter>
        </RmbdActor>
    )
}

Actor.prototype={
    actor: PropTypes.object
}
export default Actor