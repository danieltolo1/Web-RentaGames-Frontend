import React from 'react'
import {Container, Menu} from 'semantic-ui-react'
import Header from '../../Components/Header'


export default function BasicLayout(props) {
    const {children} = props;


  return (
    <Container fluid className='basic-layout'>
        <Header/>
        <Container className='content'>
            {children}
        </Container>
        
        

    </Container>
  )
}


