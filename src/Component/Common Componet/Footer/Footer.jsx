import { Box, Typography } from '@mui/material'
import React from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {


  return (

    <Box  height="40vh" width='100vw' bgcolor='#232F3E' >
      <Box height='100%'  display='flex' sx={{mx:'40px'}}>
     <Box height='90%' width='25%' >
      <h4 style={{color:'white'}}>Contact Us</h4>
       <Typography sx={{cursor:'pointer',color:'#cfd5d8',":hover":{color:'#f3f5f5'}}}>Contact Us</Typography>
       <Typography sx={{cursor:'pointer',color:'#cfd5d8',":hover":{color:'#f3f5f5'}}}>We are Hiring</Typography>
       <Typography sx={{cursor:'pointer',color:'#cfd5d8',":hover":{color:'#f3f5f5'}}}>Selling at lewis</Typography>
       <Typography sx={{cursor:'pointer',color:'#cfd5d8',":hover":{color:'#f3f5f5'}}}>Works at lewis</Typography>
       <Box>
           <EmailOutlinedIcon sx={{cursor:'pointer',color:'#cfd5d8',":hover":{color:'#f3f5f5'},marginTop:'10px'}}/>
            <FacebookOutlinedIcon sx={{cursor:'pointer',color:'#cfd5d8',":hover":{color:'#f3f5f5'}}}/>
            <InstagramIcon sx={{cursor:'pointer',color:'#cfd5d8',":hover":{color:'#f3f5f5'}}}/>
            <TwitterIcon sx={{cursor:'pointer',color:'#cfd5d8',":hover":{color:'#f3f5f5'}}}/>
            <YouTubeIcon sx={{cursor:'pointer',color:'#cfd5d8',":hover":{color:'#f3f5f5'}}}/>
       </Box>

      </Box>

     <Box  height='100%' width='25%' >
     <h4 style={{color:'white'}}>Help</h4>
     <Typography sx={{cursor:'pointer',color:'#cfd5d8',":hover":{color:'#f3f5f5'}}}>How To Order</Typography>
       <Typography sx={{cursor:'pointer',color:'#cfd5d8',":hover":{color:'#f3f5f5'}}}>How To Use Gift Card </Typography>
       <Typography sx={{cursor:'pointer',color:'#cfd5d8',":hover":{color:'#f3f5f5'}}}>Retruns & Exchanges</Typography>
       <Typography sx={{cursor:'pointer',color:'#cfd5d8',":hover":{color:'#f3f5f5'}}}>Shipping Details</Typography>
       <Typography sx={{cursor:'pointer',color:'#cfd5d8',":hover":{color:'#f3f5f5'}}}>Privacy Policy</Typography>
       <Typography sx={{cursor:'pointer',color:'#cfd5d8',":hover":{color:'#f3f5f5'}}}>FAQs</Typography>
     </Box>
     <Box  height='100%' width='25%' >
     <h4 style={{color:'white'}}>What's New</h4>
     <Typography sx={{cursor:'pointer',color:'#cfd5d8',":hover":{color:'#f3f5f5'}}}>Become a Brand Ambassador</Typography>
       <Typography sx={{cursor:'pointer',color:'#cfd5d8',":hover":{color:'#f3f5f5'}}}>Carbon Calculator</Typography>
       <Typography sx={{cursor:'pointer',color:'#cfd5d8',":hover":{color:'#f3f5f5'}}}>Video Reviews</Typography>
       <Typography sx={{cursor:'pointer',color:'#cfd5d8',":hover":{color:'#f3f5f5'}}}>Why we do what we do</Typography>
       <Typography sx={{cursor:'pointer',color:'#cfd5d8',":hover":{color:'#f3f5f5'}}}>Customer Reviews</Typography>
       <Typography sx={{cursor:'pointer',color:'#cfd5d8',":hover":{color:'#f3f5f5'}}}>Company News</Typography>
       <Typography sx={{cursor:'pointer',color:'#cfd5d8',":hover":{color:'#f3f5f5'}}}>Who Made Your Clothes?</Typography>
       <Typography sx={{cursor:'pointer',color:'#cfd5d8',":hover":{color:'#f3f5f5'}}}>Shop Instagram</Typography>


     </Box>
     <Box  height='100%' width='25%'>
     <h4 style={{color:'white'}}>Mailing Address</h4>

     <Typography style={{cursor:'pointer',color:'white'}}>elo </Typography>
       <Typography style={{cursor:'pointer',color:'white'}}>11 KM Satiana Road </Typography>
       <Typography style={{cursor:'pointer',color:'white'}}>Faisalabad </Typography>
       <Typography style={{cursor:'pointer',color:'white'}}>Pakistan</Typography>
       <Typography style={{cursor:'pointer',color:'white'}}>0422-3256-0356</Typography>
       <Typography style={{cursor:'pointer',color:'white'}}>(09:30 AM to 05:30 PM Monday-Saturday)</Typography>


       
     </Box>
     <Box  height='100%' width='25%'  display='flex' justifyContent='center' alignItems='center'>
             
      <img alt='pic' height='50%' width='60%' src='https://staticw2.yotpo.com/assets/badge.png'></img>
     </Box>

     
     </Box>
        </Box>
  )
}

export default Footer 