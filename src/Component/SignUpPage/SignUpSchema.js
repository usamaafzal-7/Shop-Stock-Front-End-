// import React from 'react'
import * as yup from 'yup'
const SignUpSchema = () => {
    
  return yup.object({
              firstName:yup.string().required('Enter a FirstName').max(18,'Name is to long').min(3,'Name is to short'),
              lastName:yup.string().required('Enter a LastName').max(25,'Name is to long').min(3,'Name is to short'),
              email:yup.string().required('email required').email(),
              password:yup.string().required('Password required').max(150,'password is to long').min(7,'password is to short')
  }
   
  )
}

export default SignUpSchema