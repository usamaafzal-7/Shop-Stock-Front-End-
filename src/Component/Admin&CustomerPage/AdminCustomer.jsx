import { Box, Button, Card } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const AdminCustomer = () => {


  return (
    <Box height='70vh' width='100vw' display='flex' justifyContent='space-evenly' alignItems='center'>
      <Card elevation={10} sx={{ height: '80%', width: '45%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}  >

        <img alt='picss' src='adminss.jpg' height='70%' width='70%' ></img>
        <Link to='/admin' style={{ textDecoration: 'none' }}>
          <Button variant='outlined' sx={{ borderColor: 'yellow', color: 'black', ":hover": { backgroundColor: '#ff9800', borderColor: 'yellow' } }}>Admin </Button>
        </Link>
      </Card>

      <Card elevation={10} sx={{ height: '80%', width: '45%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}  >
        <img alt='picss' src='customer.jpg' height='70%' width='70%' ></img>
        <Link to='/customer' style={{ textDecoration: 'none' }}>
          <Button variant='outlined' sx={{ borderColor: 'yellow', color: 'black', ":hover": { backgroundColor: '#ff9800', borderColor: 'yellow' } }}>Customer Login</Button>
        </Link>
      </Card>

    </Box>
  )
}

export default AdminCustomer