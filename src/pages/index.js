import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import WorkFlow from "sections/workflow";
import Services from "sections/services";
import Jackpot from "sections/jackpot";
import CallToAction from "sections/call-to-action";
import Featured from "sections/featured";
import Pricing from "sections/pricing";
import Testimonials from "sections/testimonials";
import FeaturedSpace from "sections/featured-space";
// import Blogs from 'sections/blogs';
import FAQ from "sections/faq";
import Support from "sections/support";
import Contact from "sections/contact";
import Subscribe from "sections/subscribe";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO
            description="Hub of online code editors and IDEs available at the lowest prices. Start your free trial today!"
            title="Codash"
          />
          <Banner />
          <Services />
          <Jackpot />
          <WorkFlow />
          <CallToAction />
          <FeaturedSpace />
          <Featured />
          <Pricing />
          <Testimonials />
          {/* <Blogs /> */}
          <FAQ />
          <Support />
          <Subscribe />
          <Contact />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
