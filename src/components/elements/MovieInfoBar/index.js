import React from 'react'
import PropTypes from 'prop-types'
import {FaBudget,FaRevenue,FaTime,RRmdbMovieInfoBarInfo,RmdbMovieinfobar,RmdbMovieinfobarContent,RmdbMovieinfobarContentCol} from './MovieInfoBar'
import {calcTime, convertMoney} from './../../../helpers'

export const MovieInfoBar=({time, budget, revenue})=>(
    <RmdbMovieinfobar>
        <RmdbMovieinfobarContent>
            <RmdbMovieinfobarContentCol>
                <FaTime name="clock-o" size="2x"/>
                <RRmdbMovieInfoBarInfo>Running time: {calcTime(time)}</RRmdbMovieInfoBarInfo>
            </RmdbMovieinfobarContentCol>
            <RmdbMovieinfobarContentCol>
                <FaBudget name="money" size="2x"/>
                <RRmdbMovieInfoBarInfo> Budget: {convertMoney(budget)}</RRmdbMovieInfoBarInfo>
            </RmdbMovieinfobarContentCol>
            <RmdbMovieinfobarContentCol>
                <FaRevenue name="ticket" size="2x"/>
                <RRmdbMovieInfoBarInfo>Running time: {convertMoney(revenue)}</RRmdbMovieInfoBarInfo>
            </RmdbMovieinfobarContentCol>
        </RmdbMovieinfobarContent>
    </RmdbMovieinfobar>
)

MovieInfoBar.propTypes={
    time: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number
}