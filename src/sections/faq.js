import React from "react";
import { Box, Container, Flex, Text, Heading } from "theme-ui";
import { Link } from "components/link";
import BlockTitle from "components/block-title";
import Accordion from "components/accordion/accordion";

const accordionData = [
  {
    isExpanded: false,
    title: "Do I need to enter the password everytime I open the code?",
    contents: (
      <div>
        NOPE! It will get cached on your browser. Though, you need to enter in
        once when you open it in private window/change the browser/change the
        device.
      </div>
    ),
  },
  {
    isExpanded: true,
    title: "What if I don't receive my credentials in 30 minutes?",
    contents: (
      <div>
        If you don't get your credentials within 30 minutes, please wait for 2
        more hours as sometimes there is maintenance work going on. If you still
        don't get them, you can contact the support by <a href="https://forms.gle/eqmi7GKfLaWNdrqW9" target="_blank">clicking here
        </a>
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "Can I run my code in Kelvin?",
    contents: (
      <div>
        We are really sorry but you can't compile and run you code in Kelvin. Kelvin is only
        a text-editor. But, you can write your whole code there with auto-complete suggestions and
        syntax highlighting and then download those code files.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "Can I get the desired server to host my application?",
    contents: (
      <div>
        Yes, that's possible but in some cases you might have to pay some extra amount.
        Not a huge amount of money but it might cost you some 1-2 dollars more generally.
        The hosting that we provide is included in your plan itself so for our hosting, you don't
        have to pay the money seperately; except for Inferno plan as there everything is customized.
      
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "What is Inferno plan?",
    contents: (
      <div>
        Inferno is the plan designed for Professionals and Enterprise. It is a customized plan where
        the client chooses the configuration of the server and the IDE. There one can even customize the
        url of the application.
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    <Box as="section" id="faqs">
      <Container>
        <BlockTitle
          // title="Frequently Ask Question"
          text="Frequently Asked Questions"
        />
        <Flex sx={styles.flex}>
          <Box sx={styles.faqWrapper}>
            <Accordion items={accordionData} />
          </Box>
          <Box sx={styles.content}>
            <Heading as="h3">
              Do you have any quesiton? Please ask here we ready to support
            </Heading>
            <Text as="p">
              If your question is not list here, please feel free to make a
              manual support.
            </Text>
            <a
              href="https://forms.gle/QeuC35QQBerCFSqC7"
              target="_blank"
              sx={styles.askButton}
            >
              Ask your Doubt
            </a>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default FAQ;

const styles = {
  flex: {
    flexWrap: "wrap",
    flexDirection: ["column", null, null, null, null, "row-reverse"],
    pb: ["70px", null, null, null, "90px", null, "130px"],
  },

  content: {
    flex: ["0 0 100%", null, null, null, "0 0 33.333%"],
    maxWidth: ["100%", null, null, "450px", "100%"],
    mx: ["auto", null, null, null, "0"],
    mb: ["0px", null, null, null, "0"],
    textAlign: ["center", null, null, null, null, "left"],
    mt: ["40px", null, null, null, null, "0"],
    h3: {
      fontSize: ["23px", null, null, null, "24px"],
      lineHeight: [1.5, null, null, null, 1.67],
      color: "black",
      fontWeight: 700,
      letterSpacing: "-1.5px",
      mt: "-5px",
      pr: ["0", null, null, null, null, "30px"],
    },
    p: {
      fontSize: "16px",
      lineHeight: 1.87,
      color: "#343D48",
      opacity: 0.7,
      mt: "10px",
      pr: ["0", null, null, null, null, "80px"],
    },
  },
  askButton: {
    display: "inline-block",
    verticalAlign: "middle",
    backgroundColor: "#02073E",
    color: "#fff",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: 700,
    p: "6.5px 19px",
    letterSpacing: "-0.16px",
    mt: "25px",
    transition: "all 500ms ease",
    "&:hover": {
      opacity: 0.8,
    },
  },
  faqWrapper: {
    flex: ["0 0 100%", null, null, null, "0 0 66.666%"],
  },
};
