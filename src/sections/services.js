import React from "react";
import { Box, Container, Grid } from "theme-ui";
import BlockTitle from "components/block-title";
import ServiceCard from "components/cards/service-card";

const SERVICES_DATA = [
  {
    image: "/assets/service-1.png",
    text: "Codash gives you platform where you can write, edit and run your code without leaving your browser.",
    heading: "Run code into your browser",
    path: "#",
  },
  {
    image: "/assets/service-2.png",
    text: "We use the Text-editor that is used by the top IDEs out there.",
    heading: "Monaco Text Editor",
    path: "#",
  },
  {
    image: "/assets/service-3.png",
    text: "Feel incomplete without a terminal? We have got you covered!",
    heading: "Integrated Terminal",
    path: "#",
  },
  {
    image: "/assets/service-4.png",
    text: "Post an issue and get the solution within 6 hours.",
    heading: "Fast Support",
    path: "#",
  },
  {
    image: "/assets/service-5.png",
    text: "Not sure whether to continue or not? We have a solution for you! Get the free 2 days trial and see if it works for you or not.",
    heading: "Free Trial",
    path: "#",
  },
  {
    image: "/assets/service-6.png",
    text: "We use Code-server to provide you the best experience so that you not only write code, but enjoy writing it.",
    heading: "Code Server",
    path: "#",
  },
];
const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container>
        <BlockTitle
          title="Features of the product"
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map(({ image, text, heading, path }, index) => (
            <ServiceCard
              image={image}
              text={text}
              heading={heading}
              path={path}
              key={index}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ["80px", null, null, null, "80px", null, "100px"],
  },
  grid: {
    gridGap: "30px",
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr", null, "1fr 1fr 1fr"],
  },
};
