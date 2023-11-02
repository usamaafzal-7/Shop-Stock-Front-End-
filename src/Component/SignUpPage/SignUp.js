import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SignUpSchema from './SignUpSchema'

const SignUp = () => {

  const navigate=useNavigate()

  const initialValue={ firstName:'',lastName:'',email:'',password:''}

  const {errors,handleChange,values,handleSubmit,handleBlur,touched}=useFormik({

  initialValues:initialValue,
  validationSchema :SignUpSchema,
  onSubmit:async (value,action)=>{ 
  console.warn('valueeeeee',value);              
   try {
        const res=await axios.post('http://localhost:5000/api/User',value)
       console.warn(res,"dataaaa storeee resss");
        action.resetForm()
        navigate('/customer') }
         catch (error) {
       console.warn('biggg erorrr',error)}}})
                
  return  <form onSubmit={handleSubmit}>

    <Box height='80vh' width='100vw' >
      
    <Box height='100%' width='40%' display='flex' flexDirection='column' justifyContent='space-evenly' ml='30px'>
     <Typography fontWeight='bold' fontSize='30px'>Create Account</Typography>

     <Typography>First name</Typography>
      <TextField size='small' placeholder='First name' name='firstName' onBlur={handleBlur} helperText={errors.firstName && touched.firstName?errors.firstName:null}  value={values.firstName} onChange={handleChange}/>
   
       <Typography>Last name</Typography>
       <TextField size='small' placeholder='Last name' name='lastName' onBlur={handleBlur}  helperText={errors.lastName && touched.lastName?errors.lastName:null} value={values.lastName} onChange={handleChange}/>

      <Typography>Email address*</Typography>
      <TextField size='small' placeholder='Email address' name='email'onBlur={handleBlur} helperText={errors.email && touched.email?errors.email:null} value={values.email} onChange={handleChange}/>

        <Typography>Password*</Typography>
          <TextField size='small' placeholder='Password' name='password' onBlur={handleBlur} helperText={errors.password && touched.password?errors.password:null} value={values.password} onChange={handleChange}/>

       <Box height='10%' width='100%' display='flex' justifyContent='space-between' alignItems='center'>
    <Button  type='submit' variant='outlined'  sx={{borderColor:'yellow',color:'black',":hover":{backgroundColor:'#ff9800',borderColor:'yellow'} }}>Sign Up </Button>
    <Typography sx={{cursor:'pointer', color:'#5574ea',":hover":{color:'#eab709'}}}>* Indicates a required field</Typography>
  </Box>
  <Typography>Returning Customer? <Link to={'/customer' } style={{textDecoration:'none'}}><Button sx={{":hover":{color:'#eab709'}}}>Login</Button></Link></Typography>
  </Box>
  
  </Box>
  
</form>
  
}

export default SignUp