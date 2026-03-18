import React, { useState } from "react";
import { Button, Input, Box, Container, Heading, Text } from "theme-ui";
import { Link } from "../components/link";

const Subscribe = () => {
  return (
    <Box as="section" sx={styles.subscribe}>
      <Container>
        <Heading as="h3">Subscribe to our weekly Newsletter</Heading>
        <Text as="p">
          By subscribing with your mail, you accept our privacy policy
        </Text>
        <Box as="form" sx={styles.form}>
          <Box as="label" htmlFor="subscribeEmail" variant="styles.srOnly">
            Email
          </Box>
          {/* <Input
            placeholder="Enter your email"
            type="email"
            id="subscribeEmail"
            sx={styles.input}
          /> */}
          <Button type="submit" sx={styles.button}>
            <a href="https://codashsubscribe.web.app" target="_blank">
              Subscribe
            </a>
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Subscribe;
const styles = {
  subscribe: {
    py: ["80px", null, null, null, "80px", "100px", "140px"],
    backgroundColor: "#020718",
    h3: {
      textAlign: "center",
      fontSize: ["23px", null, null, null, null, "30px", "36px"],
      lineHeight: [1.5, null, null, "1"],
      color: "#fff",
      letterSpacing: ["-0.5px"],
      mb: ["0px", null, null, "15px"],
      width: ["70%", null, null, "auto"],
      mx: ["auto", null, null, "0"],
    },
    p: {
      fontSize: ["16px"],
      color: "#fff",
      opacity: ".6",
      letterSpacing: ["-0.5px"],
      textAlign: "center",
      width: ["70%", null, null, "auto"],
      mx: ["auto", null, null, "0"],
      mt: ["10px", null, null, "0"],
    },
  },
  form: {
    width: ["100%"],
    maxWidth: ["555px"],
    mx: ["auto"],
    display: ["flex"],
    flexWrap: ["wrap"],
    mt: ["30px", null, null, null, "60px"],
  },
  input: {
    width: ["100%"],
    maxWidth: ["100%", null, "370px", "380px"],
    borderRadius: "5px",
    border: "none",
    backgroundColor: "rgba(255,255,255, .08)",
    outline: "none",
    color: "rgba(255,255,255, .8)",
    fontSize: "16px",
    pl: ["0px", null, null, "30px"],
    height: ["50px", null, null, "60px"],
    mr: ["0px", null, null, "15px"],
    textAlign: ["center", null, null, "left"],
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: "5px",
    fontWeight: "500",
    fontSize: ["20px"],
    color: "#020718",
    letterSpacing: "-0.5px",
    outline: "none",
    padding: ["0px 40.75px"],
    minHeight: ["50px", null, null, "60px"],
    width: ["100%", null, null, "auto"],
    mt: ["10px", null, null, "0"],
    mx: ["auto", "160px", "100px", "160px"],
    "&:hover": {
      backgroundColor: "#fff",
      opacity: "0.9",
    },
  },
};
// import { useState } from "react";
// import styled from "styled-components";
// import UiComponents from "./UiComponents";
// import db from "./firebase";
// import firebase from "firebase/compat/app";
// function Subscribe() {
//   const [input, setInput] = useState("");
//   const [message, setMessage] = useState("");
//   const inputHandler = (e) => {
//     setInput(e.target.value);
//   };
//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (input) {
//       console.log(input);
//       // add to firebase
//       db.collection("emails").add({
//         email: input,
//         time: firebase.firestore.FieldValue.serverTimestamp(),
//       });
//       setInput("");
//       setMessage("Thank you for Subscribing!!!");
//       setTimeout(() => {
//         setMessage("");
//       }, 3000);
//     }
//   };
//   return (
//     <Div className="App">
//       <Container>
//         <UiComponents />
//         <Form onSubmit={submitHandler}>
//           <H2>Subscribe to our Newsletter</H2>
//           <Input type="email" onChange={inputHandler} value={input} />
//           <Button type="submit">Submit</Button>
//         </Form>
//         {message && <Alert>{message}</Alert>}
//       </Container>
//     </Div>
//   );
// }
// const Div = styled.div`
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: linear-gradient(to right, #414345, #232526);
//   overflow: hidden;
// `;
// const Container = styled.div`
//   position: relative;
// `;
// const Form = styled.form`
//   position: relative;
//   padding: 3rem;
//   min-width: 500px;
//   border-radius: 5px;
//   box-shadow: 0 0 30px #333;
//   background: rgba(255, 255, 255, 0.1);
//   border: solid 1px rgba(255, 255, 255, 0.2);
//   backgroud-clip: padding-box;
//   backdrop-filter: blur(10px);
//   z-index: 2;
// `;
// const H2 = styled.h2`
//   color: #fff;
//   padding: 1rem;
//   text-align: center;
//   font-size: 2rem;
// `;
// const Input = styled.input`
//   padding: 10px;
//   border-radius: 10px 0 0 10px;
//   border: none;
//   width: 80%;
//   outline: none;
//   color: #cf1d22;
// `;
// const Button = styled.button`
//   background-image: linear-gradient(
//     to right,
//     #eb3349 0%,
//     #f45c43 51%,
//     #eb3349 100%
//   );
//   width: 20%;
//   padding: 10px;
//   text-align: center;
//   text-transform: uppercase;
//   transition: 0.5s;
//   background-size: 200% auto;
//   color: white;
//   border-radius: 0 10px 10px 0;
//   border: none;
//   outline: none;
//   cursor: pointer;
//   &:hover {
//     background-position: right center;
//   }
// `;
// const Alert = styled.p`
//   position: relative;
//   padding: 0.4rem;
//   margin: 0.5rem;
//   color: white;
//   text-align: center;
//   font-size: 1.2rem;
//   border: 1px solid rgba(255, 255, 255, 0.2);
//   border-radius: 10px;
//   background: rgba(0, 255, 0, 0.1);
//   backdrop-filter: blur(10px);
//   z-index: 3;
// `;
// export default Subscribe;
