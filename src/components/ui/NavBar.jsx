import React from 'react'
import {
    Link, useHistory
} from 'react-router-dom';

import AppBar  from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { Button } from '@material-ui/core';
import { types } from '../../types/types';

export const NavBar = () => {
    const {user: {name}, dispatch} = useContext(AuthContext)

    const history = useHistory();

    const handleLogout = () => {
        history.replace('/login')
        dispatch({
            type: types.logout,
        })
    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            {/* <Typography variant="h6" color="inherit">
                                Heroes
                            </Typography> */}
                            <IconButton color='inherit'>
                                Heroes
                            </IconButton>
                            <IconButton color='inherit'>
                                <Link to='/marvel'>
                                    Marvel
                                </Link>
                            </IconButton>
                            <IconButton color='inherit'>
                                <Link to='/dc'>
                                    DC
                                </Link>
                            </IconButton>
                            <IconButton color='inherit'>
                                <Link to='/search'>
                                    Search
                                </Link>
                            </IconButton>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container spacing={3}>
                                <Grid item xs={6}></Grid>
                                <Grid item xs={2}>
                                    <IconButton color='inherit'>
                                        {name}
                                    </IconButton>
                                </Grid>
                                <Grid item xs={4}>
                                    <button onClick={handleLogout}>logout</button>
                                </Grid>
                            </Grid>
                            
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}
