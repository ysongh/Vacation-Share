import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, Typography, Button } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';

import { GlobalContext } from '../context/GlobalState';
import {firebaseURL} from '../Config';
import TextInputField from './common/TextInputField';
import { primaryColor } from '../config/color';

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
    submitBtn: {
        backgroundColor: primaryColor,
        '&:hover': {
            backgroundColor: primaryColor,
        }
    },
    hr: {
        marginTop: '1.2rem'
    }
}));

const Register = () => {
    const { addUser } = useContext(GlobalContext);
    const classes = useStyles();
    const history = useHistory();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async () => {
        try{
            const userInfo = {
                firstName,
                lastName,
                email,
                password
            }
        
            await axios.post(firebaseURL + '/users.json', userInfo);

            addUser(userInfo);
    
            history.push("/profile");
        } catch(err){
            console.error(err);
        }
    };

    return(
        <Grid className={classes.container} container justify="center">
            <Grid item xs={12} sm={7} md={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" paragraph>
                            Sign Up
                        </Typography>
                        <Button variant="contained" color="inherit" size="large" fullWidth startIcon={<FacebookIcon />} >
                            with Facebook
                        </Button>

                        <hr className={classes.hr} />

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
                        <Button className={classes.submitBtn} onClick={() => onSubmit()} type="submit" variant="contained" color="primary" size="large">
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