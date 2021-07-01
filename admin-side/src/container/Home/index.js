import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Layout from '../../components/Layout'

/**
* @author
* @function Home
**/

const Home = (props) => {
  return(
   <Layout sidebar>
      <Jumbotron style={{margin: "5rem",background: "#fff"}} className="text-center">
      <h1> good morning,madam
        ,jai bartan dhoi

      </h1>
      </Jumbotron>
   </Layout>
   )

 }

export default Home