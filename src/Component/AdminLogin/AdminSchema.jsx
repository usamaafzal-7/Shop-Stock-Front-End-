import React from 'react'
import * as yup from 'yup'


const AdminLoginSchema = () => {



    return yup.object(
        {
            email: yup.string().email().required("Email is required"),
            password: yup.string().required("password is required")
        }

    )
}

export default AdminLoginSchema