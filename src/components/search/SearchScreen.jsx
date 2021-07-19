import React, { useMemo } from 'react'
import queryString from 'query-string'

import { Button, TextField } from '@material-ui/core'
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

   


    const [formValues, handleInputChange] = useForm({
        searchText: q
    });

    const { searchText } = formValues;

    const heroesFilter = useMemo(() => getHeroesByName(q), [q])


    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
    }

    return (
        <div>
            <h1>Search</h1>
            <hr />
            <div>
                <form onSubmit={handleSearch}>
                    <TextField 
                        id="standard-basic" 
                        label="Standard" 
                        name='searchText' 
                        value={searchText} 
                        onChange={handleInputChange} 
                        autoComplete="off"
                    />
                    <Button variant="contained" color="primary" type="submit">Buscar</Button>
                </form>
            </div>

            <div>
                <h4>Resultados</h4>
                <hr />
                {
                    (q === '')
                    &&
                    <div>
                        Search hero
                    </div>
                }
                {
                    (q !== '' && heroesFilter.length === 0) && 
                    <div>
                        There is not hero { q }
                    </div>
                }
                {
                    heroesFilter.map(hero => (
                        <HeroCard 
                            key={hero.id}
                            {...hero}
                        />
                    ))
                }
            </div>
        </div>
    )
}
