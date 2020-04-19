import React ,{useState,useEffect} from 'react';
import axios from 'axios'
import {ProfileItem,ProfileItemSpan,ProfileList,ProfileSkills,ProfileSkillsProfile,ProfileSpanWeb,ProfileTitle,
  ProfileTitleSpan,Skills,SkillsBar,SkillsDesc,SkillsTitle,SkillsTitleSpan
  ,BarParent,BarParentSpan,BarPerc,BarTitle,Container

} from './style'
 const Profile=()=> {
   const [skills , setSkills] = useState([]) ;
   const [information , setInformation] = useState([]) ;
   useEffect(()=>{
     axios.get("../js/script.json").then(res=>{
       setSkills(res.data.skills) ;
       setInformation(res.data.information)
     } ,[]) ;
     
   })
   
   const skillsList = skills.map(item=>{
     return (
      <SkillsBar key ={item.id}>
      <BarTitle>{item.skill}</BarTitle>
      <BarPerc>{item.percent}</BarPerc>
      <BarParent>
          <BarParentSpan type ={item.id}></BarParentSpan>
      </BarParent>
      </SkillsBar>
     )
   }) ;

   const infoList = information.map(item=>{
     return(
       <ProfileList key={item.id}>
      <ProfileItem >
      <ProfileItemSpan>Name</ProfileItemSpan>
     {item.name}
  </ProfileItem>
  <ProfileItem >
      <ProfileItemSpan>Birthday</ProfileItemSpan>
      {item.birthDay}
  </ProfileItem>
  <ProfileItem >
      <ProfileItemSpan>Address</ProfileItemSpan>
      {item.address}
  </ProfileItem>
  <ProfileItem >
      <ProfileItemSpan>Phone</ProfileItemSpan>
      {item.tel}
  </ProfileItem>
  <ProfileItem >
      <ProfileItemSpan>Email</ProfileItemSpan>
      {item.email}
  </ProfileItem>
  <ProfileItem >
      <ProfileItemSpan>Face Book </ProfileItemSpan>
      <ProfileSpanWeb>{item.faceBook}</ProfileSpanWeb>
  </ProfileItem>
  </ProfileList>
     )
   })
  return (
   
    <ProfileSkills>
        <Container>
            <ProfileSkillsProfile>
                <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
                 {infoList}
            </ProfileSkillsProfile>
            
            <Skills>
                <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
                <SkillsDesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                </SkillsDesc>
                
                   {skillsList}
               
                
                
            </Skills>
            
        </Container>
    </ProfileSkills>
    
  );
}

export default Profile