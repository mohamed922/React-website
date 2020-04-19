import React ,{Component} from 'react';

import axios from 'axios'
import {Work,WorkPart,WorkSpan,WorkTitle,Line,DesIcon ,Container ,PartDesc} from './style'
class Description extends Component {
    constructor(props) {
        super(props)
        this.state = {
            works : []
        }
    }
    componentDidMount(){
        axios.get("../js/script.json").then((res)=>{
            this.setState({
                works : res.data.works
            })
        })
       
    }
    render() {
        const {works} = this.state ;
        const worksList = works.map(item => {
            return (
         <WorkPart key ={item.id} last ={item.id}>
            <DesIcon className ={item.icon}></DesIcon>
            <WorkTitle>{item.title}</WorkTitle>
            <Line />
            <PartDesc>
               {item.desc}
            </PartDesc>
        </WorkPart>
            )
        })
  return (
    <Work>
    <Container>
        <WorkTitle><WorkSpan>My</WorkSpan> Work</WorkTitle>
        {worksList}
        
    </Container>
</Work>
  );
    }
}

export default Description;
