import styled from "styled-components";
import { useState } from "react";
import Left from "./Left";

const Mobile = 768;

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

const Tete = styled.img`
  width: 5vw;
  margin-bottom: -0.5vh;
  margin-left: -0.5vw;
`


function Right(){
  const [tete, setTete] = useState('https://euna-lee.com/img/tete.png');

    const onMouseOver = () => {
        setTete('https://euna-lee.com/img/gif.gif');
    }

    const onMouseOut = () => {
        setTete('https://euna-lee.com/img/tete.png');
    }
    return(
    <Wrapper2>
      <First>
        <Tete 
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
    </Wrapper2>
    )
}

export default Right;