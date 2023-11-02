import { Accordion, AccordionDetails, AccordionSummary, Divider, Drawer, IconButton, ListItemButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import ReviewsIcon from '@mui/icons-material/Reviews';
import LanguageIcon from '@mui/icons-material/Language';
import SellIcon from '@mui/icons-material/Sell';
import BrushIcon from '@mui/icons-material/Brush';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import PaymentsRoundedIcon from '@mui/icons-material/PaymentsRounded';


const MuiDrawer = () => {

  const [drawer, setDrawer] = useState(false)

  const data = () => {
    setDrawer(!drawer)
  }

  const handleClose = () => {

    setDrawer(!drawer)
  }

  return (
    <>
      <IconButton onClick={data} size='large' edge='start' color='inherit'>
        <MenuIcon sx={{ color: 'grey' }} />
      </IconButton>
      <Drawer anchor='left' open={drawer} >
        <Box p={2} height='80vh' width='250px' textAlign='center' role='presentation' >
          <Box height='10%' width="100%" display='flex' >
            <Box height='100%' width="70%" >
              <img style={{ cursor: 'pointer' }} alt='pic' src='https://ecommerce-admin.com/assets/images/logo.webp' height='100%' width='100%' />
            </Box>
            <Box height='100%' width="30%" display='flex' justifyContent='center' alignItems='center' >
              <MenuOpenIcon onClick={handleClose} sx={{ color: 'grey', cursor: 'pointer' }} /></Box>

          </Box>
          <Divider></Divider>
          <Box height='100%' width="100%" mt='20px'>

            <Link to='/dashboard' style={{ textDecoration: 'none', color: '#000000DE' }}> <ListItemButton sx={{ width: '100%', ":active": { color: '#3467E7' } }} ><DashboardIcon sx={{ color: 'grey', ":active": { color: '#3467E7' }, mr: '15px' }} /> Dashboard</ListItemButton>

            </Link>
            <Accordion elevation={0} sx={{ backgroundColor: '#FFFFFF', border: 'none' }}>

              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <InventoryIcon sx={{ color: 'grey', ":active": { color: '#3467E7' }, mr: '15px' }} />
                <Typography sx={{ ":active": { color: '#3467E7' } }}>Product</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Link to='/pro' style={{ textDecoration: 'none', color: '#000000DE' }}>  <Typography>Add Product </Typography></Link>
                <Typography> Product List</Typography>
                <Typography>Categories</Typography>
                <Typography>Brands</Typography>

              </AccordionDetails>
            </Accordion>
            <ListItemButton sx={{ width: '100%', ":active": { color: '#3467E7' } }} ><ShoppingCartIcon sx={{ color: 'grey', ":active": { color: '#3467E7' }, mr: '15px' }} /> Orders</ListItemButton>

            <ListItemButton sx={{ width: '100%', ":active": { color: '#3467E7' } }} ><PeopleIcon sx={{ color: 'grey', ":active": { color: '#3467E7' }, mr: '15px' }} /> Customers</ListItemButton>

            <ListItemButton sx={{ width: '100%', ":active": { color: '#3467E7' } }} ><LeaderboardIcon sx={{ color: 'grey', ":active": { color: '#3467E7' }, mr: '15px' }} /> Statistics</ListItemButton>
            <ListItemButton sx={{ width: '100%', ":active": { color: '#3467E7' } }} ><ReviewsIcon sx={{ color: 'grey', ":active": { color: '#3467E7' }, mr: '15px' }} /> Reviews</ListItemButton>
            <ListItemButton sx={{ width: '100%', ":active": { color: '#3467E7' } }} ><PaymentsRoundedIcon sx={{ color: 'grey', ":active": { color: '#3467E7' }, mr: '15px' }} /> Transactions</ListItemButton>
            <ListItemButton sx={{ width: '100%', ":active": { color: '#3467E7' } }} ><LanguageIcon sx={{ color: 'grey', ":active": { color: '#3467E7' }, mr: '15px' }} /> Sellers</ListItemButton>
            <ListItemButton sx={{ width: '100%', ":active": { color: '#3467E7' } }} >< SellIcon sx={{ color: 'grey', ":active": { color: '#3467E7' }, mr: '15px' }} /> Hot offers</ListItemButton>


            &nbsp;
            <Divider></Divider>
            &nbsp;
            <ListItemButton sx={{ width: '100%', ":active": { color: '#3467E7' } }} ><BrushIcon sx={{ color: 'grey', ":active": { color: '#3467E7' }, mr: '15px' }} /> Appearance</ListItemButton>
            <ListItemButton sx={{ width: '100%', ":active": { color: '#3467E7' } }} ><SettingsIcon sx={{ color: 'grey', ":active": { color: '#3467E7' }, mr: '15px' }} /> Settings</ListItemButton>

          </Box>

        </Box>

      </Drawer>
    </>
  )
}

export default MuiDrawer