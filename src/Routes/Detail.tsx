import styled from "styled-components";
import eventData from "./eventData.json"
import { useRouteMatch, useHistory} from "react-router-dom"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Mobile = 768;

const Dtl = styled.div`
    z-index: 2;
    color: #A4A190;
    background-color: #eceae8;
    width: 90vw;
    margin: 5vh 5vw;
    padding: 8vh 6vw;
    border-radius: 30px;
    border: 3px solid #A4A190;
    // box-shadow: inset 0vw 0vw 2vw 0.3vw #faa9d5;
    // filter: drop-shadow(0px 0px 1vw #faa9d5);
    @media only screen and (max-width: ${Mobile}px){
        width: 100vw;
    }
`

const H1 = styled(motion.h1)`
    padding-bottom: 6vh;
    margin-top: -1vh;
    font-weight: normal;
    font-size: 4vw;
`;

const Right = styled.div`
    float: right;
    text-align: right;
`

const P = styled.p`
    padding-bottom: 1vh;
`;

const BigImg = styled.img`
    width: 30vw;
    margin: 0 0 5vh 3vw;
    border-radius: 30px;
`;

const SImg = styled(motion.img)`
    display: inline-block;
    vertical-align: top;
    width: 20%;
    margin: 5vh 3vw 2vh 0;
    border-radius: 30px;
    transition: 0.5s;
    cursor: pointer;
`;

interface IProps{
    when: string;
  }


function Detail({when}: IProps) {
    return(
        <>
        <Dtl>
        {eventData.events.map((event) => 
            <div>
                {event.when === when ? 
                <>
                   
                    <Right>
                       <H1><Link to="/event">☓</Link></H1><br/>
                       <BigImg src={event.image[0]}/>
                    </Right>
                    <H1>{event.title}</H1>
                    <P>· when: {event.when}</P>
                    <P>· where: {event.where}</P>
                    {event.link ? 
                        <P>· <a href={event.link}>link</a></P>:null}
                    <br/>
                    {event.story[0] === " " ? <br/>
                    :<p>{event.story[0]}</p>}
                    {event.story[1] === " " ? <br/>
                    :<p>{event.story[1]}</p>}
                    {event.story[2] === " " ? <br/>
                    :<p>{event.story[2]}</p>}
                    {event.story[3] === " " ? <br/>
                    :<p>{event.story[3]}</p>}
                    {event.story[4] === " " ? <br/>
                    :<p>{event.story[4]}</p>}
                    {event.story[5] === " " ? <br/>
                    :<p>{event.story[5]}</p>}
                    {event.story[6] === " " ? <br/>
                    :<p>{event.story[6]}</p>}
                    {event.story[7] === " " ? <br/>
                    :<p>{event.story[7]}</p>}
                    {event.story[8] === " " ? <br/>
                    :<p>{event.story[8]}</p>}
                    <SImg 
                        whileHover={{
                            scale: 2
                        }}
                        key={event.image[1]} src={event.image[1]}/>
                    <SImg 
                        whileHover={{
                            scale: 2
                        }}
                    key={event.image[2]} src={event.image[2]}/>
                    <SImg 
                        whileHover={{
                            scale: 2
                        }}
                    key={event.image[3]} src={event.image[3]}/>
                    <SImg 
                        whileHover={{
                            scale: 2
                        }}
                    key={event.image[4]} src={event.image[4]}/>
                    
                </>
                : null}
            </div>
        )}
        </Dtl>
        </>
    )
}

export default Detail;