import React from "react";
import { Box, Container, Flex, Image, Text, Heading } from "theme-ui";
import JackpotCard from "../components/cards/jackpot-card";

const JACKPOT_DATA = [
  {
    image: "/assets/jackpot-1-1.png",
    text: "We give you unlimited access to the IDE for complete 2 days. You may create and download your code files anytime.",
    heading: "Free Trial",
  },
  {
    image: "/assets/jackpot-1-2.png",
    text: "We have also tried to integrate some of the VS Code extensions in the IDE by the source code available in their repos.",
    heading: "VS Code Extensions",
  },
];

const Jackpot = () => {
  return (
    <Box as="section" sx={styles.jackpot}>
      <Container>
        <Flex sx={styles.flex}>
          <Box sx={styles.image}>
            <Image
              src="/assets/jackpot.png"
              width="926"
              height="664"
              alt="jackpot image"
            />
          </Box>
          <Box sx={styles.content}>
            <Box sx={styles.heading}>
              <Text as="span">Why choose us?</Text>
              <Heading as="h3">
                Thinking why to consider us over any other product?
              </Heading>
            </Box>
            <Box sx={styles.jackpotCardBox}>
              {JACKPOT_DATA.map(({ image, heading, text }, index) => (
                <JackpotCard
                  image={image}
                  heading={heading}
                  text={text}
                  key={index}
                />
              ))}
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Jackpot;

const styles = {
  jackpot: {
    pt: ["65px", null, null, null, "85px", null, "125px"],
  },
  flex: {
    flexWrap: "wrap",
  },
  image: {
    flex: ["0 0 100%", null, null, null, null, "0 0 62.5%"],
    img: {
      maxWidth: ["100%", null, null, null, null, null, "none"],
      float: "right",
    },
  },
  content: {
    flex: ["0 0 100%", null, null, null, null, "0 0 37.5%"],
  },
  heading: {
    mb: "10px",
    pt: "50px",
    textAlign: ["center", null, null, null, null, "left"],
    pl: ["0", null, null, "30px"],
    maxWidth: ["80%", null, null, "100%"],
    mx: ["auto", null, null, "0"],
    span: {
      display: "block",
      fontSize: "18px",
      color: "primary",
      fontWeight: 700,
      lineHeight: 1,
      mb: "10px",
    },
    h3: {
      color: "#0F2137",
      fontSize: ["23px", null, null, null, "30px", "36px", "44px"],
      maxWidth: ["100%", null, null, null, null, "90%", "100%"],
      fontWeight: 700,
      letterSpacing: "-1.5px",
      lineHeight: 1.36,
    },
  },
  jackpotCardBox: {
    display: ["grid", null, null, null, null, "block"],
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr"],
  },
};
