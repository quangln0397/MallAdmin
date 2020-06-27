import React, { Component } from 'react'
import { Container, Box, Typography, TextField, CircularProgress, Button } from '@material-ui/core';

import logo from '../media/logo.png'

class login extends Component {
    render() {
        return (
            <Container maxWidth="sm">
                <Box
                    bgcolor="white"
                    textAlign="center"
                    p="24px"
                    boxShadow="5"
                    mt="50px"
                    borderRadius="12px"
                >
                    <img src={logo} alt="logo" height="50px" />
                    <Typography variant="h5" color="textSecondary">
                        ADMIN
                    </Typography>
                    <TextField
                        label="Email"
                        id="outlined-size-small"
                        color="secondary"
                        defaultValue="Small"
                        variant="outlined"
                        size="small"
                        margin="normal"
                        fullWidth
                    />

                    <TextField
                        label="Password"
                        id="outlined-size-small"
                        color="secondary"
                        type="password"
                        defaultValue="Small"
                        variant="outlined"
                        size="small"
                        margin="normal"
                        fullWidth
                    />
                    <br />
                    <br />
                    <CircularProgress size={24} thickness={4} color="secondary" />
                    <Button variant="contained" color="primary" fullWidth>
                        Primary
                    </Button>
                </Box>
            </Container>
        );
    }
}

export default login;
