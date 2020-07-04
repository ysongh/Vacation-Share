import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, Typography, Button } from '@material-ui/core';

import TextInputField from './common/TextInputField';

const useStyles = makeStyles(() => ({
    container: {
        marginTop: '2rem',
    },
    form:{
        marginBottom: '1rem'
    },
    title: {
        marginTop: '1.5rem',
    },
}));

const Register = () => {
    const classes = useStyles();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = () => {
        const userInfo = {
            firstName,
            lastName,
            email,
            password
        }
    
        console.log(userInfo);
      };

    return(
        <Grid className={classes.container} container justify="center">
            <Grid item xs={12} sm={8} md={6}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" paragraph>
                            Sign Up
                        </Typography>
                        <form noValidate className={classes.form}>
                            <TextInputField
                                label="First Name"
                                name="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <TextInputField
                                label="Last Name"
                                name="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <TextInputField
                                label="Email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextInputField
                                label="Password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </form>
                        <Button onClick={() => onSubmit()} type="submit" variant="contained" color="primary">
                            Submit
                        </Button>

                        <Typography variant="subtitle2" className={classes.title}>
                            Already have an account? <Link to="/login">Log In</Link>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Register;