import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import pa from "./pa.json"
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
`;

const Pmore = styled(motion.p)`
  padding-top: 1vh;
  padding-bottom: 3vh;
  font-size: 1.5vw;
  padding-left: 1vw;
  line-height: 8vh;
  a{
    padding-right: 1.5vw;
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
    padding: 3vh 0;
  }
    `;

const Check = styled.img`
width: 15vw;
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
    background-size: cover;
    border-right: 3px solid #A4A190;
    border-bottom: 3px solid #A4A190;
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
// border: 1px solid red; 
color: #A4A190;
font-size: 1.65vw;

@media only screen and (max-width: ${Mobile}px){
  margin: 1vh 5vw;
  width: 90vw;
  height: 5vh;
}
`;

const Box3 = styled(motion.div)`
width: 16vw;
// height: 10vh;
margin: 0 2vw 6vh 0;
padding: 2vh 1.5vw;
vertical-align: top;
display: inline-block;
border-radius: 30px;
background: linear-gradient(150deg, rgba(189,186,114,1) 0%, rgba(135,190,207,1) 100%);
color: #eceae8;
cursor: pointer;

@media only screen and (max-width: ${Mobile}px){
  margin: 1vh 5vw;
  width: 90vw;
  height: 5vh;
}
`;

const Hoho = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
`


function Archive(){
  const bigMovieMatch = useRouteMatch<{code:string}>("/archive_pa/:code");
  const history = useHistory();
  const onBoxClicked = (code:string) => {
    history.push(`/archive_pa/${code}`);
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
      <H1>NJAC Permanent Archive <span onClick={showPlease}>···</span></H1>
      <Pmore >
        {visible ? 
          <More initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{ duration: 0.5 }}
            >
            <Link to="/archive">· NJAC Archive Round1</Link>
            <Link to="/archive_pa">· Permanent Archive</Link>
          </More> 
          : null} 
      </Pmore>
      {pa.books.map((archive) => 
        <>
        {archive.code === "" ? 
        <Box2>
            {archive.title}
        </Box2> :
        <Box
          key={archive.title}
          onClick = {() => onBoxClicked(archive.code)}
          >
        <Check src={archive.image[0]}/><br/>
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

export default Archive;