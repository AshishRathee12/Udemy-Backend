import * as Yup from "yup"

export const signUpSchema = Yup.object({
    name: Yup.string("Must be of string type").min(2, "Must be more then 2 letter").max(25, "Must be less then 25 letters").required("Please Enter Your Name"),
    // email: Yup.string("Must be of String type").email("Invalid email format").required("Please enter your mail"),
    textarea: Yup.string().min(5, "Must be at least 2 character").required("cannot be empty"),
    address: Yup.string().required("cannot be empty"),
})