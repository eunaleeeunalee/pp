import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Mobile = 768;

const Wrapper =styled.div`
  position: fixed;
  width: 36%;
  height: 100vh;

  @media only screen and (max-width: ${Mobile}px){
    width: 100%;
    position: relative;
    height: 65vh;
  }
`;

const Content = styled.div`
  height: 100vh;
  z-index: 1;
  position: relative;
  text-align: left;
  padding: 5vh 3vw;
  text-align: center;
  background-image: url("https://euna-lee.com/mandu_img/bg.gif");
  background-size: cover;
  @media only screen and (max-width: ${Mobile}px){
    height: 65vh;
  }
`;

const Img = styled(motion.img)`
  padding: 18vh 0;
  cursor: pointer;
  width: 30vw;

  @media only screen and (max-width: ${Mobile}px){
    padding: 6vh 0;
    width: 60vw;
  }
`;


const Map = styled.div`
  position: absolute;
  bottom: 5vh;
  left:0;
  width: 100%;
  text-align: center;  
  a{
        padding-right: 1.5vw;
    }
    
    @media only screen and (max-width: ${Mobile}px){

    }
`;


function Right(){
  const showPlease = () => {
    const audioPlayer = document.getElementById("myaudio") as HTMLMediaElement;
    audioPlayer.play();
  }
    return(
    <Wrapper>
    <AnimatePresence mode='wait'>
      <audio id="myaudio" src="https://euna-lee.com/mandu_img/popop.wav"></audio>
    <Content>
      Not just a Collective<br/>
      <Link to="/">
      <Img
        src={ require('./img/title2.png')}
        whileHover={{
            x: 10,
            y: 10
        }}
        onClick={showPlease}/>
      </Link>
        <Map>
          · <Link to="/about">about</Link>
          · <Link to="/event">event</Link>
          · <Link to="/archive">archive</Link>
        </Map>
      </Content>
    </AnimatePresence>
    </Wrapper>
    )
}

export default Right;