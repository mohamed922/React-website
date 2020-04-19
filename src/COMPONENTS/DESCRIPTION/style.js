import styled from 'styled-components'

export const Work = styled.div` 
    height: auto;
    padding: 50px 0;
    overflow: hidden;
    background: #fff

`
export const Container = styled.div `
    width: 85%;
    margin: auto;

`
export const WorkTitle = styled.h2` 
    font-size: 30px; 
   

`
export const WorkSpan = styled.span` 
    font-weight: normal
`

export const WorkPart = styled.div` 
    margin-top: 20px;
    width: 30%;
    float: left;
    height: auto;
    padding: 100px 0;
    border: 1px solid #888;
    box-sizing: border-box;
    text-align: center;
   
    margin-left: ${props => props.last === 1 ? "0" : "5%" };
    @media (max-width: 575px) {
       
            width: 100%;
            float: none;
            margin-left: 0
            
        
    } ;
    
    @media (min-width: 576px )and (max-width:768px) {
       
            width: 47%;
        
        
        
    }
    
`


export const  DesIcon = styled.i` 
   width: 50px;
   height: 50px;
    text-align: center;
    line-height: 50px;
    color: #eb5424;
    margin-bottom: 20px ;
    

`
export const PartTitle = styled.h4` 
    font-size: 25px;
    color: #fff;
    margin-bottom: 20px
`

export const Line = styled.hr` 
    width: 60%;
    margin: auto;
    margin-bottom: 20px
`

export const PartDesc = styled.p` 
    font-size: 14px;
    color: #888;
    padding: 20px
`


export const Last = styled.div`
margin-top: 20px;
width: 30%;
float: left;
height: auto;
padding: 100px 0;
border: 1px solid #888;
box-sizing: border-box;
text-align: center;
margin-left: 5% ;
@media (max-width: 575px) {
   
        width: 100%;
        float: none;
        margin-left: 0
        
    
} ;

@media (min-width: 576px )and (max-width:768px) {
   
        width: 47%;
    
    
    
}


@media (min-width: 576px )and (max-width:768px) {
    
        margin-left: 0
    
}
`
