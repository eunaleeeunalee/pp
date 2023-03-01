
import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import styled from "styled-components";
import Item from "./About_text"

const Container = styled(motion.div)`
text-align:center;
font-size: 1.2vw;
`


const items = [
    {
        id: "1",
        title: "Info",
        subtitle: "React, Typescript",
    },
    {
      id: "2",
      title: "Work",
      subtitle: "React, Typescript",
    }
]

const Left = () => {
    return (
      <LayoutGroup>
        <Container>
          <motion.div layout transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}>
            {items.map(item => (
              <Item key={item.id} item={item} />
            ))}
          </motion.div>
        </Container>
      </LayoutGroup>
    )
  }
  export default Left;
  
