import * as Yup from 'yup'
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(25).matches(/^[A-Za-z\s]+$/, "Name can only contain letters and spaces.")
        .required("Please enter your name"),
    email: Yup.string().email().matches(/^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$/)
        .required("Please enter your email"),
    password: Yup.string().min(6).required("Please enter your password"),
    age: Yup.string().min(1).max(2).required("please enter your age"),

    phoneNumber: Yup.string().matches(/^\(?([0-9]{3})\)?([0-9]{3})?([0-9]{4})$/, { message: "Please enter valid number 10.", excludeEmptyString: false }).required("please enter your phone number"),
    pincode: Yup.string().matches(/^[0-9]{6}$/, { message: "Please enter valid number 6.", excludeEmptyString: false }).required("please enter your pin code")
    // phoneNumber:Yup.string().matches( /(\+91\ )[6-9]{1}[0-9 ]{4}[0-9 ]{4}[0-9]{3}/, {message: "Please enter valid number must be start +91,and max 10,space aft 4digts.", excludeEmptyString: false}).required("please enter your phone number")

    // conform_password:Yup.string().required().oneOf([Yup.ref('password'),null],"password must match")
})


export const signInSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("please enter your name"),
    email: Yup.string().email().required("please enter your email"),
    password: Yup.string().min(2).max(6).required("please enter your password"),
    phonenumber: Yup.string().min(10).max(10).matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/).required("please enter your phone number"),
    age: Yup.string().max(2).required("please enter your age"),

})