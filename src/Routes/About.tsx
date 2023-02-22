import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Right from "./Right";
import { Link } from "react-router-dom";

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
  padding: 5vh 0;
  color: #A4A190;
  width: 56vw;
  font-size: 1.5vw;
`;

const H1 = styled.h1`
    padding-bottom: 4vh;
    font-weight: normal;
    font-size: 2vw;
`;

const Text = styled.div`
    margin: 0 1vw;
`

const Hr = styled.hr`
    border-top: 5px dotted #A4A190;
    margin: 5vh 0;
`

const Map = styled.div`
    margin-left: 2vw;
    // margin-bottom: 5vh;
    a{
        padding-right: 3vw;
        &:hover{
            text-decoration: underline;
        }
    }    
`;

const Box2 = styled(motion.div)`
width: 16vw;
// height: 10vh;
margin: 0 2vw 4vh 0;
padding: 2vh 1.5vw;
vertical-align: top;
display: inline-block;
border-radius: 30px;
background: linear-gradient(150deg, rgba(189,186,114,1) 0%, rgba(135,190,207,1) 100%);
color: #eceae8;

@media only screen and (max-width: ${Mobile}px){
  margin: 1vh 5vw;
  width: 90vw;
  height: 5vh;
}
`;

function About(){
    return(
    <>
    <Right/>

    <Wrapper>
    <AnimatePresence mode='wait'>
    <Content>
        <H1 id="about">About</H1>
        <Text>
            Not Just a Collective consists of a group of multidisciplinary artists, researchers and designers who share a common desire to discuss artistic progress and create a space for emerging international artists. To work on a supporting framework together, Not Just a Collective set out to host a series of art and cultural activities contributing to multi-disciplinary practices in art ecology. Moreover, it is not only a collective, in conventional perception, but also a community aiming to breed new initiatives and foster cultural participation by facilitating accessibility.
            <br/><br/>
            We are based at @platform_post a platform for contemporary art based in Arnhem (NL). Come check Not Just a Library.
        </Text>

        <Hr/>
        
        <H1 id="members">Members</H1>
        <Text>
            · Alessandra Varisco<br/>
            · Euna Lee<br/>
            · Femke Kersten<br/>
            · Heike Renée<br/>
            · Jiahui Feng<br/>
            · Juliana Garcia Bello<br/>
            · Lu Lin<br/>
            · Santiago Candelo
        </Text>

        <Hr/>

        <H1 id="contact">Contact</H1>
        <Text>
            · Email: info@notjustacollective.com<br/>
            · Instagram: not.just.a.collective<br/>
            · Adress: POST Arnhem Driekoningenstraat 16 6828 EN Arnhem, NL<br/>
        </Text>

    </Content>
    </AnimatePresence>
    </Wrapper></>
    )
}

export default About;