import { useLocation, useHistory, useRouteMatch, Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import Info from "./Info";
import { useState } from "react";
import Left from "./Left";



const Mobile = 768;

const Introo = styled(motion.div)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #f7f7f7;
  // display:flex;
  // justify-content:center;
  // align-items:center;
  // flex-direction:column;
  text-align: center;

  h3{
    padding-left: 3vw;
    padding-bottom: 3vh;
  }
  h2{
    padding-left: 3.5vw;
  }
`

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

const Wrapper2 =styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  position: fixed;
  width: 25vw;
  border-right: 0.15vw solid #424242;
  height: 96vh;
  margin-top: 2vh;

  @media only screen and (max-width: ${Mobile}px){
    width: 100%;
    position: relative;
    height: 65vh;
  }
`;

const First = styled.div`
  padding: 1.5vh 2vw 1.5vh 2vw ;
  p{
    padding: 1vh 0.5vw 1vh 0.5vw;
  }
`

const Tete = styled(motion.img)`
  width: 5vw;
  margin-bottom: -0.5vh;
  margin-left: -0.5vw;
`

const Tete2 = styled(motion.img)`
  width: 15vw;
  margin-bottom: 2vh;
  margin-left: -0.5vw;
`

function Home(){
  const location = useLocation();
  console.log(location.pathname);
  
  const [tete, setTete] = useState('https://euna-lee.com/img/tete.png');
  const onMouseOver = () => {
      setTete('https://euna-lee.com/img/gif.gif');
  }

  const onMouseOut = () => {
      setTete('https://euna-lee.com/img/tete.png');
  }
    return(
    <>
    <Wrapper2>
      <First>
        <Tete 
            layoutId="tete"
            key="tete"
            src={tete} 
            onMouseOver={onMouseOver} 
            onMouseOut={onMouseOut}/>
        <h1>EunaLee</h1>
        <p style={{paddingTop:0}}>web developer & graphic designer</p>
        </First>
        <hr/>
        <First>
          <p>Hello! Since 2018, I've been developing websites for artists and as art projects. <br/>
          I focus on building a simple and playful web environement.</p>
        </First>
        <hr/>
        <Left/>
        <First>
          All images © 2019-2023 Euna Lee, Rotterdam, Netherlands
        </First>
    </Wrapper2>
      {location.pathname === "/"? 
          <Intro/>
        :null}
    <Wrapper>
      {/* {location.pathname === "/"? 
        <Intro/>
      :null} */}
      {location.pathname === "/nf"? 
        <Nf/>
      :null}
      {location.pathname === "/mandu"? 
        <Mandu/>
      :null}
    </Wrapper>
    </>
    )
}

// const Intro = () => {
//   const [tete, setTete] = useState('https://euna-lee.com/img/tete.png');
//   const onMouseOver = () => {
//       setTete('https://euna-lee.com/img/gif.gif');
//   }

//   const onMouseOut = () => {
//       setTete('https://euna-lee.com/img/tete.png');
//   }
//   return(
//     <div>
//       <Tete 
//             layoutId="tete"
//             key="tete"
//             src={tete} 
//             onMouseOver={onMouseOver} 
//             onMouseOut={onMouseOut}/>
//     </div>
//   )
// }

const Intro = () => {
  const [tete, setTete] = useState('https://euna-lee.com/img/tete.png');
  const onMouseOver = () => {
      setTete('https://euna-lee.com/img/gif.gif');
  }

  const onMouseOut = () => {
      setTete('https://euna-lee.com/img/tete.png');
  }
  return(
    <Introo
      initial={{}}
      animate={{}}>
      {/* <Tete 
            layoutId="tete"
            key="tete"
            src={tete}
            variants={logoVariants}
            initial="normal"
            animate="active" 
            onMouseOver={onMouseOver} 
            onMouseOut={onMouseOut}/> */}
      <Tete2 
            layoutId="tete"
            key="tete"
            src={tete}
            animate={{ y: [0,6,0,6,0] }}
            transition={{ type: "spring", stiffness: 100, duration: 1.2 }}/>
      <Tete2 
            layoutId="tete"
            key="tete"
            src={tete}
            animate={{ y: [0,6,0,6,0] }}
            transition={{ type: "spring", stiffness: 100, duration: 1.2 }}/>
      <Tete2 
            layoutId="tete"
            key="tete"
            src={tete}
            animate={{ y: [0,6,0,6,0] }}
            transition={{ type: "spring", stiffness: 100, duration: 1.2 }}/>
      <Tete2 
            layoutId="tete"
            key="tete"
            src={tete}
            animate={{ y: [0,6,0,6,0] }}
            transition={{ type: "spring", stiffness: 100, duration: 1.2 }}/>
      <Tete2 
            layoutId="tete"
            key="tete"
            src={tete}
            animate={{ y: [0,6,0,6,0] }}
            transition={{ type: "spring", stiffness: 100, duration: 1.2 }}/>
      <Tete2 
            layoutId="tete"
            key="tete"
            src={tete}
            animate={{ y: [0,6,0,6,0] }}
            transition={{ type: "spring", stiffness: 100, duration: 1.2 }}/>
      <br/>
      EunaLee<br/>
      Web developer & Graphic designer
      <span onMouseOver={onMouseOver} onMouseOut={onMouseOut}> <Link to="/mandu">▹ More</Link></span>
    </Introo>
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
