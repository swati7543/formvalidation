import React from 'react';
import { useFormik } from 'formik'
import { signUpSchema } from './schemas';
import { Box, Button, TextField, Typography } from '@mui/material';

const initialValues = {
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    age: '',
    pincode:''
}

const Home = () => {

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            console.log(values)
            action.resetForm()
        }
    })
    console.log(errors)
    return (
        <Box className="home-container" sx={{ display: 'flex', justifyContent: "center", alignContent: 'center', alignItems: 'center' ,}}>
            <form onSubmit={handleSubmit} >
                <Box sx={{ textAlign: 'start', display: 'flex' ,mt:10,mb:2}}>
                    <Typography htmlFor="name">Name</Typography>
                    <TextField size="small" type="text" id="name" className="input" name='name' value={values.name} onChange={handleChange} onBlur={handleBlur} />

                    {errors.name && touched.name ? <p>{errors.name}</p> : null}
                </Box>
                <Box sx={{  textAlign: 'start', display: 'flex',mb:2 }}>
                    <Typography htmlFor="email">Email</Typography>
                    <TextField size="small" type="email" id="email" className="input" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                    {errors.email && touched.email ? <p>{errors.email}</p> : null}
                </Box>
                <Box sx={{ textAlign: 'start', display: 'flex',mb:2 }} >
                    <Typography>Password</Typography>
                    <TextField size="small" type="password" id="password" className="input" name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
                    {errors.password && touched.password ? <p>{errors.password}</p> : null}

                </Box>
                <Box sx={{ textAlign: 'start', display: 'flex' ,mb:2}} >
                    <Typography>Phone number</Typography>
                    <TextField size="small" id="phoneNumber" className="input" name='phoneNumber' value={values.phoneNumber} onChange={handleChange} onBlur={handleBlur} />
                    {errors.phoneNumber && touched.phoneNumber ? <p>{errors.phoneNumber}</p> : null}

                </Box>
                <Box sx={{ textAlign: 'start', display: 'flex' }} >
                    <Typography>Age</Typography>
                    <TextField size="small" type="number" id="age" className="input" name='age' value={values.age} onChange={handleChange} onBlur={handleBlur} />
                    {errors.age && touched.age ? <p>{errors.age}</p> : null}

                </Box>
                <Box sx={{ textAlign: 'start', display: 'flex' }} >
                    <Typography>pincode</Typography>
                    <TextField size="small" id="pincode" className="input" name='pincode' value={values.pincode} onChange={handleChange} onBlur={handleBlur} />
                    {errors.pincode && touched.pincode ? <p>{errors.pincode}</p> : null}

                </Box>
                <Button sx={{ mt: 4 }} type="submit" variant='contained' className="submit-button">Submit</Button>
            </form>
        </Box>
    );
}

export default Home;
