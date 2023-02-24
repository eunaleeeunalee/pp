
import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import styled from "styled-components";
import Item from "./About_text"

const Container = styled(motion.div)`
margin:200px auto 0 auto;
width:50%;
text-align:center;

ul{
  background:#fff;
  margin:0 auto;
}
`


const items = [
    {
        id: "1",
        title: "lolo",
        subtitle: "lololo",
    },
    {
        id: "2",
        title: "lala",
        subtitle: "lalala",
    },
    {
        id: "3",
        title: "lele",
        subtitle: "lelele",
    }
]

const About = () => {
    return (
      <LayoutGroup>
        <Container>
          <motion.ul layout transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}>
            {items.map(item => (
              <Item key={item.id} item={item} />
            ))}
          </motion.ul>
        </Container>
      </LayoutGroup>
    )
  }
  export default About;
  
