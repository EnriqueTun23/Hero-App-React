import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { DcScreenn } from '../components/dc/DcScreenn';
import { HeroeScreen } from '../components/heroes/HeroeScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';

import { NavBar } from '../components/ui/NavBar';

export const DashboardRoutes = () => {
    return (
        <>
          <NavBar/> 
          <div>
            <Switch>
                <Route exact path='/marvel' component={MarvelScreen} />
                <Route exact path='/hero/:heroeId' component={HeroeScreen} />
                <Route exact path='/dc' component={DcScreenn } />
                <Route exact path='/search' component={SearchScreen} />

                <Redirect to='/marvel' />
            </Switch>
          </div>
        </>
    )
}
