import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const ItemWrap = styled(motion.div)`
    cursor: pointer;
    display:flex;
    align-items:center;
    justify-content:space-between;
    overflow: hidden;
    padding: 2vh 2vw;
    
    h1{
        font-size: 1.6vw;
        z-index:1;
        opacity:0.9;
        font-weight: 400;
    }
    span{
        opacity:0;   
        transition: all 0.5s ease-out;
        margin-right: 0;
    }

    &:hover{
        text-decoration: underline;
        span{
            opacity:1;
        }
    }
`

const SubWrap = styled(motion.div)`
    height:auto;
    width:100%;
    display:flex;
    flex-direction: column;
    font-weight: 400;
    padding: 0 2.5vw 3vh 2.5vw;
    text-align: left;
`

const H1left = styled(motion.h1)`
    float: left;
`

const Para = styled.p`
    padding-bottom: 2.4vh;
    &:last-child{
        padding-bottom: 0;
    }
`


interface ItemProps{
    item: titleProps
}

interface titleProps{
    id: string,
    title: string,
    subtitle: string,
}

const Item = ({ item }: ItemProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    return (
        <>
            <ItemWrap 
                onClick={toggleOpen} 
                layout 
                transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
                whileHover={{x:5}} 
                key={item.title}>
                <H1left>
                {item.title}<span> ▾</span>
                </H1left>
            </ItemWrap>

            <AnimatePresence initial={false} >
                {!isOpen && item.id==="1"? 
                    <SubWrap>
                    <motion.div layout
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
                    >
                        <Hello/>
                    </motion.div>
                </SubWrap>:null}

                {isOpen && item.id==="2" ? 
                    <SubWrap>
                    <motion.div layout
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
                    >
                        <Skill/>    
                    </motion.div>
                </SubWrap>:null}

            </AnimatePresence>
            {item.id==="2" ?null:<hr/>}
        </>
    )
}

const Hello = () => {
    return(
        <>
            <motion.div>
                <Link to="/njac">Not Just a Collective</Link><br/>
                <Link to="/nf">Netflix Clone</Link><br/>
                <Link to="/mandu">Mandu</Link><br/>
                <Link to="/kip">Kip Your Job Search</Link><br/>
                <Link to="/sc">Strolling Cat</Link><br/>
                <Link to="/kg">K-Eldest Girl</Link><br/>
                <Link to="/mp">Mayoyo Publishing</Link><br/>
            </motion.div>
        </>
    )
}

const Skill = () => {
    return(
        <>
            <motion.div>
            
            <Para>
            <h3>Tech</h3>
                <Logo src="https://euna-lee.com/skill/javascript.png"/>
                <Logo src="https://euna-lee.com/skill/typescript.png"/>
                <Logo3 src="https://euna-lee.com/skill/html.png"/>
                <Logo3 src="https://euna-lee.com/skill/css.png"/>               
                <Logo src="https://euna-lee.com/skill/python.png"/>
                <Logo src="https://euna-lee.com/skill/react.png"/>
                <Logo src="https://euna-lee.com/skill/lua.png"/>
            </Para>
            
            <Para>
            <h3>Graphic</h3>
                <Logo2 src="https://euna-lee.com/skill/photo.png"/>
                <Logo2 src="https://euna-lee.com/skill/illust.png"/>
                <Logo2 src="https://euna-lee.com/skill/indesign.png"/>
                <Logo2 src="https://euna-lee.com/skill/glyphs.png"/>
                <Logo src="https://euna-lee.com/skill/figma.png"/>
            </Para>
            </motion.div>
        </>
    )
}

const Experience = () => {
    return(
        <>
            <motion.div>
            <Para>
            <h3>11.2022 - Now</h3>
            Web developer & Graphic designer in Not Just a Collective (P-OST Gallery), Arnhem NL
            </Para>
            <Para>
            <h3>10.2022</h3>
            Web publishing performance in Zinecamp (WORM), Rotterdam NL
            </Para>
            <Para>
            <h3>03.2021</h3>
            Artist Panel in How far have we come (Art Showcase by Yeoja Magazine), Berlin DE
            </Para>
            <Para>
            <h3>05.2020 - Now</h3>
            Freelance editorial designer in webtoon, Tooning, Seoul KR
            </Para>
            <Para>
            <h3>01.2019 - Now</h3>
            Founder & Graphic designer in Mayoyo Publishing, Seoul KR
            </Para>
            </motion.div>
        </>
    )
}

const Education = () => {
    return(
        <>
            <motion.div>
            <Para>
            <h3>2020 - 2022</h3>
            MA degree in Experimental publishing, Piet Zwart Institute, Rotterdam NL
            </Para>
            <Para>
            <h3>2016 - 2019</h3>
            BA degree in Graphic design, École Nationale supérieure des beaux-arts de Lyon, Lyon FR
            </Para>
            <Para>
            <h3>2011 - 2012</h3>
            2nd year in BA degree in Architecture University of Kookmin, Seoul KR
            </Para>
            </motion.div>
        </>
    )
}

const Language = () => {
    return(
        <>
            <motion.div>
            <Para>Korean (Mother tongue)</Para>
            <Para>English (Fluency)</Para>
            <Para>French (Fluency)</Para>
            <Para> Chinese (Intermediate)</Para>
            </motion.div>
        </>
    )
}


export default Item;

const Logo = styled.img`
    max-height: 5vh;
    padding-left: 0.5vw;
    padding-right: 0.5vw;
    margin-top: 1vh;
    vertical-align: top;
    filter: grayscale(100%);
    transition: all 1s ease-out;

    &:hover{
        filter: grayscale(0);
    }
`;

const Logo2 = styled.img`
    max-height: 6vh;
    filter: grayscale(100%);
    transition: all 1s ease-out;

    &:hover{
        filter: grayscale(0);
    }
`;

const Logo3 = styled.img`
    max-height: 6vh;
    padding-right: 0.5vw;
    margin-top: 0.3vh;
    vertical-align: top;
    filter: grayscale(100%);
    transition: all 1s ease-out;

    &:hover{
        filter: grayscale(0);
    }
`;

