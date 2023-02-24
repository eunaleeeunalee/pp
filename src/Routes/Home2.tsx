import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import About from "./About"


const Mobile = 768;

const Wrapper =styled.div`

  @media only screen and (max-width: ${Mobile}px){

  }
`;

const Intro =styled.div`
`;

const Tete = styled.img`
    float: left;
    width: 7vw;
    margin: 2vh 3vw 2vh 0;
`

const Hr = styled.hr`
    border: 2px solid black;
`;

const Menu =styled.div`
  margin: 6vh 0 0 0;
  span{
      font-weight: 600;
      margin-right: 24vw;
  }
`;

const Bottom =styled.div`
  text-align: center;
`;


function Home(){
    const [tete, setTete] = useState('https://euna-lee.com/img/tete.png');

    const onMouseOver = () => {
        setTete('https://euna-lee.com/img/gif.gif');
    }

    const onMouseOut = () => {
        setTete('https://euna-lee.com/img/tete.png');
    }
    return(
    <>
    <Wrapper>
    
        <Intro>
            <h1>Euna Lee</h1>
            <Tete 
                key="tete"
                src={tete} 
                onMouseOver={onMouseOver} 
                onMouseOut={onMouseOut}/>
            My name is Euna Lee, I'm a front-end developer and graphic designer based in Rotterdam, the Netherlands. I've been developing & designing websites for artists and websites as art projects.
            <br/>
            Passionated about playful design and typography, I'm focused on how to turn a website into a virtual playground.
        </Intro>
        
        <Menu>
                <span><Link to="/">About</Link></span>
                <span><Link to="/project">Project</Link></span>
            <Hr/>
              <About/>
                

            <Hr/>
        </Menu>

        <Bottom>This website has been updated on february 23th 2023 by Euna Lee</Bottom>

    
    </Wrapper></>
    )
}

export default Home;