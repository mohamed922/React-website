import styled from 'styled-components'

export const ProfileSkills = styled.div`
    padding: 50px 0;
    overflow: hidden;
`
export const Container = styled.div `
    width: 85%;
    margin: auto;

`

export const ProfileSkillsProfile = styled.div`
    width: 50%;
    float: left;
    @media (max-width:768px) {
        
            width: 100%;
            float: none
      
            margin-bottom: 20px
        
    }
`

export const ProfileList = styled.ul` 
    list-style: none
`

export const ProfileItem = styled.li` 
    margin-bottom: 25px
`

export const ProfileItemSpan= styled.span`
    display: inline-block;
    width: 200px;
    font-weight: bold
`

export const ProfileSpanWeb =styled.span`
    font-weight: normal;
    color: #eb5424
`

export const Skills = styled.div` 
    width: 50%;
    float: left;
    @media (max-width:768px) {
        
            width: 100%;
            float: none
       
    }
`

export const SkillsDesc = styled.p` 
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`

export const SkillsBar = styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`

export const BarTitle = styled.span`
    float: left;
`

export const BarPerc = styled.span`
    float: right;
    margin-right: 100px
`
export const BarParent=styled.div` 
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`

export const BarParentSpan = styled.span` 
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0 ;
    width: ${props=>props.type === 1 ? "100%" : props.type === 2 ? "70%" : props.type === 3 ? "70%":
    props.type === 4 ? "80%":props.type === 5 ? "50%": "0"}  ;
   
    
`



export const ProfileTitle = styled.h2`
 font-size: 40px; 
 margin-bottom: 20px
`
export const SkillsTitle = styled.h2`
 font-size: 40px; 
 margin-bottom: 20px
`
export const ProfileTitleSpan = styled.span`
font-weight: normal;
`
export const SkillsTitleSpan = styled.span`
font-weight: normal;
`
