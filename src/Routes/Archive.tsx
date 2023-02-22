import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import round1 from "./round1.json"
import Right from "./Right";
import { useRouteMatch, useHistory, Link} from "react-router-dom"
import Detail2 from "./Detail2";
import { useState } from "react";

const Mobile = 768;

const Wrapper =styled.div`
  position: relative;
  left: 40%;
  height: 100vh;
  width: 60%;
  @media only screen and (max-width: ${Mobile}px){
    width: 100%;
    left: 0;
  }
`;

const H1 = styled.h1`
span{
    cursor: pointer;
  }
  @media only screen and (max-width: ${Mobile}px){
    margin-left: 4vw;
  }
`;

const Pmore = styled(motion.p)`
  padding-top: 1vh;
  padding-bottom: 5vh;
  font-size: 1.5vw;
  padding-left: 1vw;
  a{
    padding-right: 1.5vw;
  }

  @media only screen and (max-width: ${Mobile}px){
    font-size: 16px;
    margin-left: 4vw;
    width: 100vw;
    padding-top: 3vh;
  }
`

const More = styled(motion.span)`
`


const Content = styled.div`
  z-index: 1;
  position: relative;
  text-align: left;
  padding: 5vh 0;
  color: #A4A190;
  width: 60vw;
  @media only screen and (max-width: ${Mobile}px){
    padding: 6vh 0;
  }
    `;

const Check = styled.img`
width: 15vw;

@media only screen and (max-width: ${Mobile}px){
  float: right;
}
`

const Box = styled(motion.div)`
  width: 16vw;
  display: inline-block;
  margin-right: 3.5vw;
  margin-bottom: 5vh;
  vertical-align: top;
  cursor: pointer;
  font-size: 1.5vw;
  text-align: center;
  p{
    text-align: left;
    padding-left: 1vw;
    padding-top: 0.6vh;
  }
  img{
    filter: blur(3px);
    transition: all 0.2s ease-out;
  }

&:hover{
  img{
    filter: blur(0);
  }
}

  @media only screen and (max-width: ${Mobile}px){
    margin: 1vh 5vw;
    width: 90vw;
    font-size: 16px;
    }
  }
`;


const Box2 = styled(motion.div)`
width: 16vw;
height: 26vh;
vertical-align: top;
display: inline-block;
margin-right: 3.5vw;
margin-bottom: 1vh;
padding-left: 1vw;
color: #A4A190;
font-size: 1.65vw;

@media only screen and (max-width: ${Mobile}px){
  margin: 1vh 5vw;
  width: 90vw;
  height: 5vh;
  font-size: 16px;
}
`;

const Hoho = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
`


function Archiver1(){
  const bigMovieMatch = useRouteMatch<{code:string}>("/archive/:code");
  const history = useHistory();
  const onBoxClicked = (code:string) => {
    history.push(`/archive/${code}`);
  }
  const [visible, setVisible] = useState(false);
  const showPlease = () => {
    setVisible(prev => !prev);
  }
    return(
    <>
    <Right/>

    <Wrapper>
    
    <AnimatePresence mode='wait'>
    <Content>
      <H1>NJAC Archive Round1 <span onClick={showPlease}>···</span></H1>
      <Pmore >
        {visible ? 
          <More initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{ duration: 0.5 }}
          >
          <Link to="/archive">· NJAC Archive Round1</Link>
          <Link to="/archive_pa">· Permanent Archive</Link>
        </More> 
          : null} 
      </Pmore>
      {round1.books.map((archive) => 
        <>
        {archive.code === "" ? 
        <Box2>
            {archive.title}
        </Box2> :
        <Box
          key={archive.title}
          onClick = {() => onBoxClicked(archive.code)}
          >
        <Check src={archive.image[0]}/>
        <p><em>
          by {archive.author}
        </em></p>
        </Box>}
        </>
      )}
    </Content>
    </AnimatePresence>
    
    
    
   
    </Wrapper>
    <AnimatePresence>
        <Hoho>
        {bigMovieMatch ? 
          <Detail2 code={bigMovieMatch.params.code}/>
        :null}
        </Hoho>
    </AnimatePresence>
    </>
    
    )
}

export default Archiver1;