import React, {useContext} from 'react'
import { AuthContext } from "../../auth/AuthContext.js";
import { types } from '../../types/types.js';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

export const LoginScreen = ({ history }) => {
    const { dispatch } = useContext(AuthContext)

    const handleLogin = () => {
        const path = localStorage.getItem('path') || '/'

        dispatch({
            type: types.login,
            payload: {
                name: 'Kike'
            }
        })
        history.replace(path);
    }
    
    return (
        <>
        <Container fixed>
            <h1>Login </h1>
            <hr />

            <Button
                variant="contained" 
                color="primary"
                onClick={handleLogin}
            >
                Login
            </Button>
        </Container>
        </>
    )
}
