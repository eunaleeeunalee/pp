import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import eventData from "./eventData.json"
import Right from "./Right";
import { useRouteMatch, useHistory, Link} from "react-router-dom"
import Detail from "./Detail";

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

const Content = styled.div`
  z-index: 1;
  position: relative;
  text-align: left;
  padding: 6vh 0;
  color: #A4A190;
  width: 60vw;
  @media only screen and (max-width: ${Mobile}px){
    padding: 3vh 0;
  }
  `;

const Box = styled(motion.div)`
  width: 16vw;
  display: inline-block;
  margin-right: 3.5vw;
  margin-bottom: 5vh;
  vertical-align: top;
  cursor: pointer;
  font-size: 1.5vw;
  // border: 1px solid red; 
  text-align: center;
  p{
    text-align: left;
    padding-left: 1vw;
    padding-top: 0.6vh;
  }
  em{
    font-size: 1.2vw;
  }
  img{
    filter: blur(2px);
  }

  &:hover{
    img{
      filter: blur(0);
    }
  }

  @media only screen and (max-width: ${Mobile}px){
    margin: 1vh 5vw;
    width: 90vw;
  }
`;

const Check = styled.img`
  width: 15vw;
`


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

const Hoho = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
`

function Event(){
  const bigMovieMatch = useRouteMatch<{when:string}>("/event/:when");
  const history = useHistory();
  const onBoxClicked = (when:string) => {
    history.push(`/event/${when}`);
  }
    return(
    <>
    <Right/>

    <Wrapper>
    
    <AnimatePresence mode='wait'>
    <Content>

      {eventData.events.map((event) => 
        <>
        {event.when === "" ? 
        <>
        <Box2>
            {event.title}
        </Box2></>:
        <Box
          key={event.title}
          onClick = {() => onBoxClicked(event.when)}
          >
        <Check src={event.image[0]}/><br/>
        <p>
          {event.title} <em>on {event.when}</em>
          </p>
        </Box>}
        </>
      )}
    </Content>
    </AnimatePresence>
    
    
    
   
    </Wrapper>
    <AnimatePresence>
        <Hoho>
        {bigMovieMatch ? 
          <Detail when={bigMovieMatch.params.when}/>
        :null}
        </Hoho>
    </AnimatePresence>
    </>
    
    )
}

export default Event;