import { useLocation, useHistory, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import Info from "./Info";



const Mobile = 768;

const Wrapper = styled.div`
    width: 73vw;
    margin: 4vh 1vw 3vh 26vw;
`

const Para = styled.div`
    padding-bottom: 2.4vh;
    max-width: 35vw;
    &:last-child{
        padding-bottom: 0;
    }
    p{
        padding-top: 1.8vh;
    }
`

const Title = styled.div`
  font-size: 2.4vw;
  height: 5vh;
`

const Img = styled.img`
    width: 71vw;
    border-radius: 2vw;
    margin-bottom: 2vh;
`

const Git = styled.img`
  height: 3vh;
`


function Home(){
  const location = useLocation();
   console.log(location.pathname)
    return(
    <>
    <Wrapper>
      {location.pathname ==="/"?
        <Contact/>
      :null}
      {location.pathname === "/mandu"? 
        <Mandu/>
      :null}
      {location.pathname === "/nf"? 
        <Nf/>
      :null}
      {location.pathname === "/info"? 
        <Info/>
      :null}
    </Wrapper></>
    )
}

const Contact = () => {
  return(
    <div>
      <motion.img src="https://euna-lee.com/img/tete.png"/>
    </div>
  )
}

const Mandu = () => {
  const location = useLocation();
 console.log(location)
  return(
    <motion.div>
      <Para>
          <h1>Mandu</h1>
          <h3>Python(Flask)</h3>
          <h3>Website / Github</h3>
          <p>
          As React JS and Typescript practice, I develope this website website. The Movie DB API provides real-time movies and tv series information.
          </p>
      </Para>
      <Img src="https://euna-lee.com/skill/md.png"/>
      <Img src="https://euna-lee.com/skill/md2.png"/>
      <Img src="https://euna-lee.com/skill/md3.png"/>
    </motion.div>
  )
}

const Nf = () => {
  return(
    <motion.div>
    <Para>
        <Title>Netflix Clone (2023) <Git src="https://euna-lee.com/skill/github.png"/></Title> 
        <p>
        As a React JS and Typescript practice, I develope this website website. The Movie DB API provides real-time movies and tv series information.
        </p>
    </Para>
    <Img src="https://euna-lee.com/skill/nf.png"/>
    <Img src="https://euna-lee.com/skill/nf2.png"/>
    <Img src="https://euna-lee.com/skill/nf3.png"/>
    </motion.div>
  )
}

export default Home;
