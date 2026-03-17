import React, { useState } from "react";
import { keyframes } from "@emotion/react";
import { Box, Container, Grid, Button } from "theme-ui";
import BlockTitle from "components/block-title";
import PriceCard from "components/cards/price-card";

const PRICE_MONTHLY_DATA = [
  {
    recommended: null,
    title: "Spark",
    icon: "/assets/price-user-1-1.svg",
    amount: "$1/Rs.65",

    options: [
      {
        status: true,
        label: "Code Editor with Syntax highlighting and stuff",
      },
      {
        status: true,
        label: "24/7 Access",
      },
      {
        status: true,
        label: "Download/Rename/Delete the code files",
      },
      {
        status: true,
        label: "Code Syncing",
      },
      {
        status: true,
        label: "Auto Save",
      },
      {
        status: true,
        label: "99% uptime",
      },
      {
        status: false,
        label: "VS Code similar Experience",
      },
      {
        status: false,
        label: "Access to terminal",
      },
      {
        status: false,
        label: "Compile code into the browser",
      },
      {
        status: false,
        label: "Fast Servers",
      },
    ],
  },
  {
    recommended: "Recommended",
    title: "Flame",
    icon: "/assets/price-user-1-1.svg",
    amount: "$2/Rs.129",

    options: [
      {
        status: true,
        label: "Complete IDE based on Code-Server (Compile Code in browser)",
      },
      {
        status: true,
        label: "VS Code similar experience with Extensions",
      },
      {
        status: true,
        label: "Code Syncing",
      },
      {
        status: true,
        label: "Access to Terminal",
      },
      {
        status: true,
        label: "Accessible for 100 hours/month ($1/Rs.75 per 10 hours)",
      },
      {
        status: true,
        label: "99% uptime",
      },
      {
        status: false,
        label: "Fast Servers",
      },
      {
        status: false,
        label: "24/7 access for complete month",
      },
    ],
  },
  {
    recommended: null,
    title: "Blaze",
    icon: "/assets/price-user-1-2.svg",
    amount: "$5/Rs.379",
    options: [
      {
        status: true,
        label: "Complete IDE based on Code-Server (Compile Code in browser)",
      },
      {
        status: true,
        label: "Complete VS Code experience with Extensions",
      },
      {
        status: true,
        label: "Code Syncing",
      },
      {
        status: true,
        label: "Access to Terminal",
      },
      {
        status: true,
        label: "24/7 access for complete month",
      },
      {
        status: true,
        label: "99.7% uptime",
      },
      {
        status: true,
        label: "Fast Servers (Digital Ocean, AWS or Railway)",
      },
      {
        status: false,
        label: "Customizable servers",
      },
    ],
  },
  {
    recommended: null,
    title: "Inferno",
    icon: "/assets/price-user-1-2.svg",
    amount: "Contact Sales",
    options: [
      {
        status: true,
        label: "Everything in Blaze",
      },
      {
        status: true,
        label: "99.99% uptime",
      },
      {
        status: true,
        label: "24/7 Support",
      },
      {
        status: true,
        label: "Customizable Servers",
      },
    ],
  },
];

const PRICE_YEARLY_DATA = [
  {
    recommended: null,
    title: "Spark",
    icon: "/assets/price-user-1-1.svg",
    amount: "$10/Rs.759",

    options: [
      {
        status: true,
        label: "Code Editor with Syntax highlighting and stuff",
      },
      {
        status: true,
        label: "24/7 Access",
      },
      {
        status: true,
        label: "Download/Rename/Delete the code files",
      },
      {
        status: true,
        label: "Code Syncing",
      },
      {
        status: true,
        label: "Auto Save",
      },
      {
        status: true,
        label: "99% uptime",
      },
      {
        status: false,
        label: "VS Code similar Experience",
      },
      {
        status: false,
        label: "Access to terminal",
      },
      {
        status: false,
        label: "Compile code into the browser",
      },
      {
        status: false,
        label: "Fast Servers",
      },
    ],
  },
  {
    recommended: "Recommended",
    title: "Flame",
    icon: "/assets/price-user-1-1.svg",
    amount: "$19/Rs.1299",
    options: [
      {
        status: true,
        label: "Complete IDE based on Code-Server (Compile Code in browser)",
      },
      {
        status: true,
        label: "VS Code similar experience with Extensions",
      },
      {
        status: true,
        label: "Code Syncing",
      },
      {
        status: true,
        label: "Access to Terminal",
      },
      {
        status: true,
        label: "Accessible for 100 hours/month ($1/Rs.75 per 10 hours)",
      },
      {
        status: true,
        label: "99% uptime",
      },
      {
        status: false,
        label: "Fast Servers",
      },
      {
        status: false,
        label: "24/7 access for complete month",
      },
    ],
  },
  {
    recommended: null,
    title: "Blaze",
    icon: "/assets/price-user-1-2.svg",
    amount: "$59/Rs.4399",
    options: [
      {
        status: true,
        label: "Complete IDE based on Code-Server (Compile Code in browser)",
      },
      {
        status: true,
        label: "Complete VS Code experience with Extensions",
      },
      {
        status: true,
        label: "Code Syncing",
      },
      {
        status: true,
        label: "Access to Terminal",
      },
      {
        status: true,
        label: "24/7 access for complete month",
      },
      {
        status: true,
        label: "99.7% uptime",
      },
      {
        status: true,
        label: "Fast Servers (Digital Ocean, AWS or Railway)",
      },
      {
        status: false,
        label: "Customizable servers",
      },
    ],
  },
  {
    recommended: null,
    title: "Inferno",
    icon: "/assets/price-user-1-2.svg",
    amount: "Contact Sales",
    options: [
      {
        status: true,
        label: "Everything in Blaze",
      },
      {
        status: true,
        label: "99.99% uptime",
      },
      {
        status: true,
        label: "24/7 Support",
      },
      {
        status: true,
        label: "Customizable Servers",
      },
    ],
  },
];

const Pricing = () => {
  const [plan, setPlan] = useState({
    active: "monthly",
    pricingPlan: PRICE_MONTHLY_DATA,
  });

  const handlePlan = (planType) => {
    if (planType === "monthly") {
      setPlan({
        active: "monthly",
        pricingPlan: PRICE_MONTHLY_DATA,
      });
    }
    if (planType === "yearly") {
      setPlan({
        active: "yearly",
        pricingPlan: PRICE_YEARLY_DATA,
      });
    }
  };
  return (
    <Box as="section" id="pricing" sx={styles.pricing}>
      <Container>
        <BlockTitle
          title="Choose the deal that suits you best"
          text="Meet our pricing plan"
        />
        <Box sx={styles.btnWrap}>
          <Button
            onClick={() => handlePlan("monthly")}
            className={`${plan.active === "monthly" ? "active" : ""}`}
          >
            Monthly Plan
          </Button>
          <Button
            onClick={() => handlePlan("yearly")}
            className={`${plan.active === "yearly" ? "active" : ""}`}
          >
            Annual Plan
          </Button>
        </Box>
        <Grid sx={styles.grid}>
          {plan.pricingPlan.map((price, index) => (
            <PriceCard data={price} key={`${plan.active}-card--key${index}`} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  pricing: {
    pt: ["200px", null, null, null, "200px", null, "240px"],
    pb: ["80px", null, null, null, "80px", "100px", "140px"],
  },
  btnWrap: {
    width: "302px",
    height: "60px",
    mt: ["-20px", null, null, "0px"],
    mb: ["40px", null, null, "60px"],
    backgroundColor: "#F7F8FB",
    borderRadius: "5px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    p: "6px",
    mx: "auto",
    button: {
      backgroundColor: "rgba(0,0,0,0)",
      borderRadius: "5px",
      color: "#0F2137",
      letterSpacing: "-0.24px",
      fontSize: "16px",
      fontWeight: 500,
      position: "relative",
      outline: "none",
      fontFamily: "DM Sans",
      transition: "all 500ms ease",
      "&.active": {
        boxShadow: "0px 3px 3.8px rgba(38, 78, 118, 0.1)",
        backgroundColor: "#ffffff",
      },
      "&:hover": {
        backgroundColor: "rgba(0,0,0,0)",
      },
    },
  },
  grid: {
    width: "100%",
    maxWidth: "1700px",
    mx: ["auto"],
    gridGap: "10px",
    gridTemplateColumns: ["1fr 1fr 1fr 1fr", null],
    ".priceCard": {
      ".priceHeader": {
        animation: `${fadeIn} 0.8s linear`,
      },
      "ul > li": {
        animation: `${fadeIn2} 0.7s linear`,
      },
      ".priceAmount": {
        animation: `${fadeIn} 0.9s linear`,
      },
      ".priceButton": {
        animation: `${fadeIn2} 0.7s linear`,
      },
    },
  },
};
