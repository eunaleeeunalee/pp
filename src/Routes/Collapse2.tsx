import styled from "styled-components"

const Logo = styled.img`
    max-height: 8vh;
    padding-left: 0.5vw;
    padding-right: 0.5vw;
    margin-top: 1vh;
    vertical-align: top;
`;

const Logo2 = styled.img`
    max-height: 10vh;
`;

const Logo3 = styled.img`
    max-height: 9vh;
    padding-right: 0.5vw;
    margin-top: 0.3vh;
    vertical-align: top;
`;

const Box = styled.div`
`;

function About(){
    return(
        <>
            <h2>Skill</h2>
            <Box>
            <h3>Tech</h3>
            <p>
                <Logo src="https://euna-lee.com/skill/javascript.png"/>
                <Logo src="https://euna-lee.com/skill/typescript.png"/>
                <Logo3 src="https://euna-lee.com/skill/html.png"/>
                <Logo3 src="https://euna-lee.com/skill/css.png"/>               
                <Logo src="https://euna-lee.com/skill/python.png"/>
                <Logo src="https://euna-lee.com/skill/react.png"/>
                <Logo src="https://euna-lee.com/skill/lua.png"/>
            </p>
            <h3>Graphic</h3>
            <p>
                <Logo2 src="https://euna-lee.com/skill/photo.png"/>
                <Logo2 src="https://euna-lee.com/skill/illust.png"/>
                <Logo2 src="https://euna-lee.com/skill/indesign.png"/>
                <Logo2 src="https://euna-lee.com/skill/glyphs.png"/>
                <Logo src="https://euna-lee.com/skill/figma.png"/>
            </p>
            </Box>
        <hr/>
            <h2>Experience</h2>
            <h3>2022 - Now</h3>
            Web developer & Graphic designer, Not Just a Collective(P-OST Gallery), Arnhem, NL
            <h3>2022.03</h3>
            Artist Panel(Game: strolling cat) in Art showcase “How far have we come” organized by Yeoja Magazine, Berlin DE
            <h3>2020 - Now</h3>
            Graphic editorial designer(remote) in webtoon, Tooning, Seoul KO
            <h3>2011 - 2012</h3>
            2nd year in BA degree in Architecture University of Kookmin, Seoul KR
        <hr/>
            <h2>Education</h2>
            <h3>2020 - 2022</h3>
            MA degree in Experimental publishing Piet Zwart Institute, Rotterdam NL
            <h3>2016 - 2019</h3>
            BA degree in Graphic design, aquisition of DNA (Diplôme nationale d’art option design graphique)
            École Nationale supérieure des beaux-arts de Lyon, Lyon FR
            <h3>2011 - 2012</h3>
            2nd year in BA degree in Architecture University of Kookmin, Seoul KR
        <hr/>
            <h2>Language</h2>
            Korean (Mother tongue)
            English (Fluency)
            French (Fluency)
            Chinese (Intermediate)

        </>
    )
}

export default About