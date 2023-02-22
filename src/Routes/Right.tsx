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
  z-index: 1;
  position: relative;
  text-align: left;
  padding: 5vh 3vw;
  text-align: center;
  @media only screen and (max-width: ${Mobile}px){

  }
`;

const Img = styled(motion.img)`
  padding: 18vh 0;
  filter: drop-shadow(15px 7px 8px #faa9d5);
  cursor: pointer;
  width: 30vw;

  @media only screen and (max-width: ${Mobile}px){
    padding: 6vh 0;
    width: 60vw;
  }
`;


const Video = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  z-index: 0;

  @media only screen and (max-width: ${Mobile}px){
    height: 65vh;
  }
`;

const Map = styled.div`
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
      <Video muted loop>
            <source src="https://euna-lee.com/mandu_img/background2.mp4" type="video/mp4"/>
          </Video>
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