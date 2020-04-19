import React , {useState ,useEffect} from 'react';
import axios from 'axios'

import {Portfoli,PortfolioList,PortfolioListItem,PortfolioSpan,PortfolioTitle,Box,OverlaySpan,Overlay,Img} from './style'
 const Portfolio=(props)=> {
  const [ images , setImage] = useState([])
   useEffect(()=>{
    axios.get("../js/script.json").then(res => {
      setImage(res.data.portfolio)
    })
   },[])
   const  imageList = images.map(item =>{
     return(
       <Box key={item.id}>
        <Img src={item.image} alt="" />
        <Overlay>
          <OverlaySpan>
              Show Image
          </OverlaySpan>
       </Overlay>
      </Box>
     )
   })
  return (
   
    <Portfoli>
        <PortfolioTitle><PortfolioSpan>My</PortfolioSpan> Portfolio</PortfolioTitle>
        <PortfolioList>
            <PortfolioListItem active>All</PortfolioListItem>
            <PortfolioListItem>HTML</PortfolioListItem>
            <PortfolioListItem>Photoshop</PortfolioListItem>
            <PortfolioListItem>Wordpress</PortfolioListItem>
            <PortfolioListItem>Mobile</PortfolioListItem>
        </PortfolioList>
        
          {imageList}
          
            </Portfoli>
    
  );
}

export default Portfolio;
