import { useQuery } from  "@tanstack/react-query";
import { getMovies, IGetMoviesResult } from "../api";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";



const Wrapper = styled.div`
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  z-index: 0;
`;


const Content = styled.div`
  z-index: 1;
  text-align: center;
  padding: 10px;
`;

const Menu = styled(motion.div)`
  margin-top: 6vh;
  span{
    padding-right: 1.5vw;
  }
`;

const Img = styled(motion.img)`
  padding: 0;
  filter: drop-shadow(15px 7px 8px #faa9d5);
  cursor: pointer;
  height: 56vh;
  margin-top: 16vh;
  width: auto;
`;

const btn = {
  nth: (visible: boolean) => ({
    opacity: visible? 0:1,
    transition: {
      duration: 0.3,
    } 
  }),
  sth: (visible: boolean) => ({
    opacity: visible? 1:0,
    transition: {
      duration: 0.3,
    }  
  }),
}


function Home(){
  const [visible, setVisible] = useState(false);
  const showPlease = () => {
    const audioPlayer = document.getElementById("myaudio") as HTMLMediaElement;
    audioPlayer.play();
    setVisible(prev => !prev);
  }
    return (
      <Wrapper>
          <AnimatePresence mode='wait' custom={visible}>
          <Video muted loop>
            <source src="https://euna-lee.com/mandu_img/background2.mp4" type="video/mp4"/>
          </Video>
            <audio id="myaudio" src="https://euna-lee.com/mandu_img/popop.wav"></audio>
            
            <Content>
              <Img
                src={ require('./img/title2.png')}
                whileHover={{
                  x: 10,
                  y: 10
                }}
                onClick={showPlease}
              />
              <Menu
                variants={btn}
                custom={visible}
                initial="nth"
                animate="sth"
                >
                <span>· <Link to="/about">about</Link></span>
                <span>· <Link to="/event">event</Link></span>
                <span>· <Link to="/archive">archive</Link></span>
              </Menu>
            </Content>
          </AnimatePresence>
      </Wrapper>   
    );
}

export default Home;

{/* <Image
            src={ require('./img/netf11.png')} 
             /> */}