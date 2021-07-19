import { Container, Paper, Grid, ButtonBase, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

// const heroImages = require.context('../../assets/heroes', true); Se usa cuando los assets trabajan desde el src

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export const HeroeScreen = ({ history }) => {
    const { heroeId } = useParams();

    const hero = useMemo(() => getHeroById(heroeId), [heroeId]);
    
    // const hero = getHeroById(heroeId)

    if (!hero) {
        return <Redirect to='/' />
    }

    const handleReturn = () => {
        if (history.length <= 2) {
            history.push('/')
        } else {
            history.goBack();
        }
    }

    const {
        id,
        superhero,
        publisher,
        characters,
    } = hero
    
    const classes = useStyles();
    return (
        
        <Container className={classes.root} maxWidth="sm">
            <Paper className={classes.paper}>
                <Grid container spacing={1}>
                    <Grid item className='animate__animated animate__jello' >
                        <ButtonBase className={classes.image}>
                            <img 
                                className={classes.img} 
                                src={`../assets/heroes/${id}.jpg`} 
                                // src={heroImages(`./${id}.jpg`)}
                                alt={id} 
                            />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container className='animate__animated animate__fadeInDown'>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    {superhero}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {publisher}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    ID: {id}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">{characters}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            <Button onClick={handleReturn}>return</Button>
        </Container>
    )
}
