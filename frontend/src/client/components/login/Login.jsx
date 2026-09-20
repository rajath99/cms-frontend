import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import { Form, useFormik } from "formik";
import { loginSchema } from "../../../yupSchema/loginSchema";
import axios from "axios";
import { baseUrl } from "../../../environment";
import CustomizedSnackbars from "../../../basic utility components/CustomizedSnackbars";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css"
import { AuthContext } from "../../../context/AuthContext";

export default function Login() {
    const { authenticated, login } = useContext(AuthContext);

    const [loginType, setLoginType] =useState("student")
    const [message, setMessage] =  useState("");
    const [type, setType]= useState("succeess");

    const navigate = useNavigate()


    const resetMessage  =()=>{
        setMessage("")
    }
    
    const handleSelection = (e)=>{
        setLoginType(e.target.value)
        resetInitialValue();
      
    }

    const resetInitialValue=()=>{
        Formik.setFieldValue("email","");
        Formik.setFieldValue("password","")
    }

    const initialValues = {
        email: "",
        password:""
    }
    const Formik = useFormik({
        initialValues: initialValues,
        validationSchema: loginSchema,
       onSubmit: (values) => {
    console.log("Login Formik values", values);

    let url;
    let navUrl;

    if (loginType === "school_owner") {
        url = `${baseUrl}/school/login`;
        navUrl = "/school";
    } else if (loginType === "teacher") {
        url = `${baseUrl}/teacher/login`;
        navUrl = "/teacher";
    } else if (loginType === "student") {
        url = `${baseUrl}/student/login`;
        navUrl = "/student";
    }

    console.log("LOGIN baseUrl:", baseUrl);
    console.log("LOGIN final URL:", url);

    axios.post(url, values)
        .then(resp => {
            console.log("Login response:", resp.data);
            console.log("Login headers:", resp.headers);

            setMessage(resp.data.message);
            setType("success");

            if (resp.data.success) {

                const token = resp.headers.authorization;

                console.log("Authorization token received:", !!token);

                localStorage.setItem("token", token);
                localStorage.setItem(
                    "user",
                    JSON.stringify(resp.data.user)
                );

                login(resp.data.user);
                navigate(navUrl);
            }

            Formik.resetForm();
        })
        .catch(e => {
            console.error("Error in login:", e);

            const errorMessage =
                e.response?.data?.message ||
                e.message ||
                "Login failed. Please try again.";

            setMessage(errorMessage);
            setType("error");
        });
}

    return (<Box component={'div'} sx={{width:"100%", height:"80vh", background:"url(https://cdn.pixabay.com/photo/2017/08/12/21/42/back2school-2635456_1280.png)", backgroundSize:"cover"}}>

 {message && <CustomizedSnackbars reset={resetMessage} type={type} message={message}/>}
   
<Box component={'div'} sx={{padding:'40px',maxWidth:"700px", margin:"auto"}} > 
        <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", }} component={'div'}>
            <Typography variant="h2">Log In</Typography>
        </Box>
        <Paper  sx={{ padding: "20px", margin: "10px" }}>
            <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={Formik.handleSubmit}
            >
                 <FormControl sx={{ minWidth: "120px", padding: "5px" }}>
                    <InputLabel id="demo-simple-select-label" >User Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                        value={loginType}
                        onChange={handleSelection}
                    >
                       
                        <MenuItem value={"student"}>Student</MenuItem>
                         <MenuItem  value={'teacher'}>Teacher</MenuItem>
                         <MenuItem  value={'school_owner'}>School Owner</MenuItem>
                    </Select>
                </FormControl>
                    <TextField fullWidth sx={{ marginTop: "10px" }} id="outlined-basic"
                    label="Email" variant="outlined"
                    name="email"
                    value={Formik.values.email}
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur} />
                {Formik.touched.email && Formik.errors.email && <p style={{ color: "red", textTransform: "capitalize" }}>{Formik.errors.email}</p>}
                
                
                <TextField fullWidth sx={{ marginTop: "10px" }} id="filled-basic"
                    label="Password"
                    type="password" variant="outlined" name="password"
                    value={Formik.values.password}
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur} />
                {Formik.touched.password && Formik.errors.password && <p style={{ color: "red", textTransform: "capitalize" }}>{Formik.errors.password}</p>}

        
                <Box sx={{ marginTop: "10px" }} component={'div'}>
                    <Button type="submit" sx={{ marginRight: "10px" }} variant="contained">Submit</Button>
                </Box>
            </Box>
        </Paper>
        </Box>
    </Box>)
}
