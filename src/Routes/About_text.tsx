import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ItemWrap = styled(motion.div)`
    cursor: pointer;
    display:flex;
    align-items:center;
    justify-content:space-between;
    overflow: hidden;
    // padding: 0 ;
    

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

const H3left = styled(motion.h3)`
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
                <H3left>
                {item.title}<span> ▹</span>
                </H3left>
            </ItemWrap>

            <AnimatePresence initial={false} >
                {isOpen && item.id==="2"? 
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
                {isOpen && item.id==="1"? 
                <SubWrap>
                <motion.div layout
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
                >
                    <a href="https://drive.google.com/file/d/1Od3Y_stVOQLfpxXbKNNcpQTyK7wV_RfG/view?usp=sharing" target="_blank">CV</a>
                    </motion.div>
                </SubWrap>:null
                }
            </AnimatePresence>
            {/* {item.id==="3" ?null:<hr/>} */}
            <hr/>
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


export default Item; 