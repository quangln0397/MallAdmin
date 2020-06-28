import React, { Component } from 'react'
import { Container, Box, Typography, TextField, CircularProgress, Button } from '@material-ui/core';
// import firesbase from '../firebase';

import logo from '../media/logo.png'

class login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            show_progress: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    handleSignIn = () => {
        this.setState({
            show_progress: true
        });
        setTimeout(() => {
            this.props.history.push('/dashboard');
        }, 1000);
    }

    render() {
        return (
            <Container maxWidth="xs">
                <Box
                    bgcolor="white"
                    textAlign="center"
                    p="24px"
                    boxShadow="5"
                    mt="70px"
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
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    {this.state.show_progress ? (<CircularProgress size={24} thickness={4} color="secondary" />
                    ) : <Button variant="contained" color="primary" fullWidth onClick={this.handleSignIn}>
                            Sign In
                </Button>}

                </Box>
            </Container>
        );
    }
}

export default login;
