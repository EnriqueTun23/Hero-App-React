import React from 'react'
import { Link } from 'react-router-dom';

import { Card, CardContent, CardActionArea, CardMedia, Typography, Button, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles =  makeStyles({
    root: {
        maxWidth: 345,
    }
});


export const HeroCard = ({ 
id,
superhero,
alter_ego,
first_appearance }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={superhero}
                    height="350"
                    image={`./assets/heroes/${id}.jpg`}
                    title={superhero}
                />
            </CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    { superhero }
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {alter_ego}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {first_appearance}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"><Link to={`./hero/${id}`}>Mas...</Link></Button>
            </CardActions>
        </Card>
    )
}
