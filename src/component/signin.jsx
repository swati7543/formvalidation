import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { signInSchema } from "./schemas";

const initialValues = {
    name: '',
    email: '',
    password: '',
    phonenumber: '',
    age: ''
}


export default function SignIn() {

    const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: signInSchema,
        onSubmit: (values, action) => {
            console.log("Form Submitted:", values)
            action.resetForm()
        }
    })

    console.log(values, errors, "values")

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 2, mt: 5 }}>
                    <Typography>Name</Typography>
                    <TextField type="text" id="standard-basic" label="Standard" variant="standard" name="name" value={values.name} onBlur={handleBlur} onChange={handleChange} />
                    {errors.name && touched.name ? <p>{errors.name}</p> : null}
                </Box>

                <Box sx={{ mb: 2 }}>
                    <Typography>email</Typography>
                    <TextField id="standard-basic" label="Standard" variant="standard" name="email" value={values.email} onBlur={handleBlur} onChange={handleChange} />
                    {errors.email && touched.email ? <p>{errors.email}</p> : null}
                </Box>
                <Box sx={{ mb: 2 }}>
                    <Typography>password</Typography>
                    <TextField id="standard-basic" label="Standard" variant="standard" name="password" value={values.password} onBlur={handleBlur} onChange={handleChange} />
                    {errors.password && touched.password ? <p>{errors.password}</p> : null}
                </Box>
                <Box sx={{ mb: 2 }}>
                    <Typography>phone number</Typography>
                    <TextField id="standard-basic" label="Standard" variant="standard" type="text" name="phonenumber" value={values.phonenumber} onBlur={handleBlur} onChange={handleChange} />
                    {errors.phonenumber && touched.phonenumber ? <p>{errors.phonenumber}</p> : null}
                </Box>
                <Box>
                    <Typography>age</Typography>
                    <TextField id="standard-basic" label="Standard" variant="standard" name="age" type="text" value={values.age} onBlur={handleBlur} onChange={handleChange} />
                    {errors.age && touched.age ? <p>{errors.age}</p> : null}
                </Box>
                <Button type="submit" >Submit</Button>
            </form>
        </Box>
    )
}

