import React ,{useState,useEffect} from 'react';
import {SocialMedia,SocialP,SocialPSpan,Social,SocialIcon,SocialInfo2} from './style'
import axios from 'axios'
const SocilaMedia=()=> {
    const [socialMedi , setSocial] = useState([]) ;
    useEffect(()=>{
      axios.get("../js/script.json").then(res=>{
      
        setSocial(res.data.socialMedia)
      } ,[]) ;
      
    })
    
    const socialList = socialMedi.map(item=>{
      return (
        <Social key={item.id} kind={item.id}>
        <SocialIcon className ={item.icon}></SocialIcon>
        <SocialP>
            <SocialPSpan >Follow Me on</SocialPSpan>
            <SocialInfo2 >{item.desc}</SocialInfo2>
        </SocialP>
    </Social>
      ) ;
    })
    return (
    <SocialMedia>
            {socialList}
    
    </SocialMedia>
  );
}

export default SocilaMedia;
