import styled from 'styled-components'

export const Creative = styled.div`
    height: 600px;
    background: url('../images/creative/about-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed ;
    @media (max-width:991px) {
        
            height: auto
       
    }
`       
export const Container = styled.div `
    width: 85%;
    margin: auto;

`

export const CreativeInfo = styled.div`
    padding-top: 100px;
    width: 50%;
    float: right;
    @media (max-width:991px) {
        
        width: 100%;
        padding-top: 10px;
        float: none
       
    }
    
`

export const InfoTitle = styled.h2` 
    font-weight: bold;
    font-size: 50px
`

export const InfoTtitleSpan= styled.span`
    font-weight: normal
`

export const InfoDir = styled.h4` 
    font-size: 40px;
    color: #eb5424;
    margin-bottom: 20px ;
    @media (max-width:991px) {
       
            font-size: 30px
        
    }
    
`

export const InfoDesc = styled.p`
    color: #000;
    margin-bottom: 15px;
    line-height: 1.8
   
    
`

export const InfoDescAnchore = styled.a` 
    text-decoration: none
`

