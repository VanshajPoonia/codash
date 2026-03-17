import { Box, Text, Container } from "theme-ui";
import { Link } from "../link";
import Logo from "../logo";

export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer}>
      <Container sx={styles.container}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: ["column", null, null, null, null, "row"],
          }}
        >
          <Logo image="/assets/coder.png" />
          <Text
            as="p"
            sx={{
              color: "#ffffff",
              opacity: "0.7",
              fontSize: "14px",
              mt: ["10px", null, null, null, null, "0"],
            }}
          >
            Copyright by {new Date().getFullYear()} Codash
          </Text>
        </Box>
        <Box sx={styles.linksWrap} id="footer">
          <a href="https://freetrial.codash.hypnosys.in" target="_blank" rel="noopener noreferrer">
            Free Trial
          </a>
          <a href="https://privacypolicy.codash.hypnosys.in" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          <a href="https://support.codash.hypnosys.in" target="_blank" rel="noopener noreferrer">
            Support
          </a>
          <a href="https://contact.codash.hypnosys.in" target="_blank" rel="noopener noreferrer">
            Contact Us
          </a>
          <Link path="#faqs">FAQs</Link>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  footer: {
    py: ["40px", null, null, null, null, "30px", "40px"],
    backgroundColor: "#020718",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "#ffffff",
      opacity: "0.05",
    },
  },
  container: {
    display: "flex",
    flexDirection: ["column", null, null, null, null, "row"],
    justifyContent: ["center", null, null, null, null, "space-between"],
    alignItems: "center",
    position: "relative",
    flexWrap: "wrap",
  },
  linksWrap: {
    mt: ["15px", null, null, null, null, "0"],
    display: "flex",
    flexWrap: "wrap",
    a: {
      fontSize: ["14px", null, null, null, "16px"],
      color: "#ffffff",
      transition: "all 500ms ease",
      "&:hover": { opacity: 0.7 },
    },
    "a+a": { ml: ["15px", null, null, null, "35px"] },
  },
};
