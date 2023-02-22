import styled from "styled-components";
import round1 from "./round1.json"
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
    code: string;
  }


function Detail2({code}: IProps) {
    return(
        <>
        <Dtl>
        {round1.books.map((book) => 
            <div>
                {book.code === code ? 
                <>
                   
                    <Right>
                       <H1><Link to="/archive">☓</Link></H1><br/>
                       <BigImg src={book.image[0]}/>
                    </Right>
                    <H1>{book.title}</H1>
                    <em>by {book.author} </em> 
                    (<a href={book.mail}>mail</a> / <a href={book.insta}>instagram</a>)
                    <br/>
                    <br/>
                    <P>· price: {book.price}</P>
                    <P>· code: {book.code}</P>
                    {book.insta ? 
                        <P>· <a href={book.insta}>link</a></P>:null}
                    <br/>
                    {book.story[0] === " " ? <br/>
                    :<p>{book.story[0]}</p>}
                    {book.story[1] === " " ? <br/>
                    :<p>{book.story[1]}</p>}
                    {book.story[2] === " " ? <br/>
                    :<p>{book.story[2]}</p>}
                    {book.story[3] === " " ? <br/>
                    :<p>{book.story[3]}</p>}
                    {book.story[4] === " " ? <br/>
                    :<p>{book.story[4]}</p>}
                    {book.story[5] === " " ? <br/>
                    :<p>{book.story[5]}</p>}
                    {book.story[6] === " " ? <br/>
                    :<p>{book.story[6]}</p>}
                    {book.story[7] === " " ? <br/>
                    :<p>{book.story[7]}</p>}
                    {book.story[8] === " " ? <br/>
                    :<p>{book.story[8]}</p>}
                    <SImg 
                        whileHover={{
                            scale: 2
                        }}
                        key={book.image[1]} src={book.image[1]}/>
                    <SImg 
                        whileHover={{
                            scale: 2
                        }}
                    key={book.image[2]} src={book.image[2]}/>
                    <SImg 
                        whileHover={{
                            scale: 2
                        }}
                    key={book.image[3]} src={book.image[3]}/>
                    <SImg 
                        whileHover={{
                            scale: 2
                        }}
                    key={book.image[4]} src={book.image[4]}/>
                    
                </>
                : null}
            </div>
        )}
        </Dtl>
        </>
    )
}

export default Detail2;