import { Box } from '@mui/material'
import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const HomePage = () => {

  const slideImages = [
    {
      url: 'https://cdn.shopify.com/s/files/1/0671/0621/files/161_1400x.jpg?v=1676375781',
      
    },
    {
      url: 'https://cdn.shopify.com/s/files/1/0671/0621/files/website_banner_5_1400x.jpg?v=1676376060',
     
    },
    {
      url: 'https://cdn.shopify.com/s/files/1/0671/0621/files/website_banner_6_1400x.jpg?v=1676376183',
      
    },
    {
      url:'https://cdn.shopify.com/s/files/1/0671/0621/files/165_1400x.jpg?v=1676375780'
    }
  ];

    return (
      <Box height='100%' width='100%' >
        <Slide autoplay='true' duration={3000} >
         {slideImages.map((slideImage, index)=> (
              <Box  key={index}    
               height="100%"   
                  // sx={{   
                  //       backgroundSize: 'cover',

                  //       height:'autoplay',
                  //       width:"100%",
                  //       backgroundImage: `url(${slideImage.url})` }}
                        >
                   <img src={slideImage.url} alt='Slider' style={{width:"100%",height:"100%"}} />    
              </Box>
          
          ))} 
        </Slide>
      </Box>
    )
}

export default HomePage