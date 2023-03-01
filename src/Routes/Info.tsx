import { motion } from "framer-motion";
import styled from 'styled-components';

const Para = styled.div`
    padding-bottom: 2.4vh;
    width:70vw;
    column-count: 2;
    &:last-child{
        padding-bottom: 0;
    }
`

const Hr = styled.hr`
    margin: 0;
`

const Info = () => {
    return(
        <>
            <motion.div>
            <h3>Skill</h3>
            <Para>
            <h2>Tech</h2>
                <Logo src="https://euna-lee.com/skill/javascript.png"/>
                <Logo src="https://euna-lee.com/skill/typescript.png"/>
                <Logo3 src="https://euna-lee.com/skill/html.png"/>
                <Logo3 src="https://euna-lee.com/skill/css.png"/>               
                <Logo src="https://euna-lee.com/skill/python.png"/>
                <Logo src="https://euna-lee.com/skill/react.png"/>
                <Logo src="https://euna-lee.com/skill/lua.png"/>
            <h2>Graphic</h2>
                <Logo2 src="https://euna-lee.com/skill/photo.png"/>
                <Logo2 src="https://euna-lee.com/skill/illust.png"/>
                <Logo2 src="https://euna-lee.com/skill/indesign.png"/>
                <Logo2 src="https://euna-lee.com/skill/glyphs.png"/>
                <Logo src="https://euna-lee.com/skill/figma.png"/>
            </Para>

            <Hr/>

            <h3>Experience</h3>
            <Para>
                <h2>11.2022 - Now</h2>
                Web developer & Graphic designer in Not Just a Collective (P-OST Gallery), Arnhem NL
                <h2>10.2022</h2>
                Web publishing performance in Zinecamp (WORM), Rotterdam NL
                <h2>03.2021</h2>
                Artist Panel in How far have we come (Art Showcase by Yeoja Magazine), Berlin DE
                <h2>05.2020 - Now</h2>
                Freelance editorial designer in webtoon, Tooning, Seoul KR
                <h2>01.2019 - Now</h2>
                Founder & Graphic designer in Mayoyo Publishing, Seoul KR
            </Para>

            <Hr/>

            <h3>Education</h3>
            <Para>
            <h2>11.2022 - Now</h2>
            Web developer & Graphic designer in Not Just a Collective (P-OST Gallery), Arnhem NL            
            <h2>10.2022</h2>
            Web publishing performance in Zinecamp (WORM), Rotterdam NL            
            <h2>03.2021</h2>
            Artist Panel in How far have we come (Art Showcase by Yeoja Magazine), Berlin DE            
            <h2>05.2020 - Now</h2>
            Freelance editorial designer in webtoon, Tooning, Seoul KR            
            <h2>01.2019 - Now</h2>
            Founder & Graphic designer in Mayoyo Publishing, Seoul KR
            </Para>

            <Hr/>

            <h3>Language</h3>
            <Para>
                <h2>Korean (Mother tongue)</h2>
                <h2>English (Fluency)</h2>
                <h2>French (Fluency)</h2>
                <h2> Chinese (Intermediate)</h2>
            </Para>
            </motion.div>
        </>
    )
}

export default Info;

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