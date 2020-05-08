import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from '../elements/Header'
import Home from '../Home'
import Movie from '../Movie'
import NotFound from '../elements/NotFoud'

const App=()=>(
    <BrowserRouter>
        <>
        <Header/>
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/:movieId" component={Movie} exact/>
            <Route component={NotFound}/>
        </Switch>
        </>
    </BrowserRouter>
)
export default App