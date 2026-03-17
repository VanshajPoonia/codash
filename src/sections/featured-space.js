import { rgba } from "polished";
import { useState, useRef, useEffect } from "react";
import { Box, Container, Image, Heading, Text } from "theme-ui";
import SectionHeading from "../components/section-heading";
import Progressbar from "../components/progressbar";
import Feature from "../components/cards/feature";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const data = {
  feature: [
    {
      id: 1,
      icon: "/assets/images/icons/expand.png",
      title: "Privacy",
      description: "Its for you and only you.",
    },
    {
      id: 2,
      icon: "/assets/images/icons/users.png",
      title: "Deploy and Share",
      description:
        "You can use it to share your project by just giving your URL along with the port number.",
    },
    {
      id: 3,
      icon: "/assets/images/icons/wifi.png",
      title: "Hyper fast internet",
      description: "Internet speed is much better than you expect it to be :D",
    },
  ],
  gallery: [
    {
      id: 1,
      image: "/assets/images/features/privacy.png",
      title: "Privacy",
      desc: "Only to you and only you.",
    },
    {
      id: 2,
      image: "/assets/images/features/deployment.png",
      title: "Sharing is Caring",
      desc: "Just share your URL after running your app",
    },
    {
      id: 3,
      image: "/assets/images/features/speed.png",
      title: "Speed-That's what matters",
      desc: "Ultra Fast internet speed so that you never face any issue",
    },
  ],
};

const FeaturedSpace = () => {
  const isPause = useRef(false);
  const swiperRef = useRef(null);
  const [togglePlay, setTogglePlay] = useState(false);
  const [currentWidth, setCurrentWidth] = useState(0);

  let time = 3;
  let tick, percentTime;

  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    tick = setInterval(interval, 10);
  }

  function interval() {
    if (isPause.current === false) {
      percentTime += 1 / (time + 0.1);
      setCurrentWidth(percentTime);
      if (percentTime >= 100) {
        swiperRef.current && swiperRef.current.swiper.slideNext();
        startProgressbar();
      }
    }
  }

  function resetProgressbar() {
    setCurrentWidth(0);
    clearTimeout(tick);
  }

  useEffect(() => {
    startProgressbar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToggle = () => {
    isPause.current = !isPause.current;
    setTogglePlay((prev) => !prev);
  };

  return (
    <Box id="feature" as="section" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.leftContent}>
            <SectionHeading
              sx={styles.heading}
              title="Features that won't let you resist yourself"
              description="We know we are not perfect, infact no one is. But, we try to be the best one at every point of time and hence, we try to give you something that you won't expect generally."
            />
            <Box sx={styles.featureWrapper}>
              {data?.feature?.map((feature) => (
                <Feature key={feature.id} data={feature} />
              ))}
            </Box>
          </Box>
          <Box sx={styles.rightContent}>
            <Progressbar
              sx={styles.progressbar}
              togglePlay={togglePlay}
              handleClick={handleToggle}
              currentWidth={currentWidth}
            />
            <Swiper
              modules={[Autoplay, Pagination, EffectFade]}
              loop={true}
              effect="fade"
              ref={swiperRef}
              spaceBetween={0}
              slidesPerView={1}
              pagination={true}
            >
              {data?.gallery?.map((item) => (
                <SwiperSlide key={item.id}>
                  <Box as="figure" sx={styles.image}>
                    <Image loading="lazy" src={item.image} alt="" />
                    <Box as="figcaption">
                      <Box>
                        <Heading as="h4">{item.title}</Heading>
                        <Text as="p">{item.desc}</Text>
                      </Box>
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedSpace;

const styles = {
  section: {
    pt: [30, null, null, null, 60],
    pb: [30, null, null, 50, 60],
  },
  contentWrapper: {
    gap: [0, 0, 0, 0, "30px"],
    display: ["flex", null, null, null, "grid"],
    alignItems: "center",
    flexDirection: ["column", null, null, null, null],
    gridTemplateColumns: ["unset", null, null, null, "repeat(2,1fr)"],
  },
  leftContent: {
    m: [0, "30px 0px 0", "30px 50px 0", 0],
  },
  heading: {
    textAlign: ["center", null, null, null, "left"],
    maxWidth: 490,
    margin: ["0 auto 40px", null, null, null, "0 0 80px"],
    h2: {
      fontSize: [22, null, null, 30, 30, 36, 46],
      lineHeight: [1.6, null, null, 1.41],
      fontWeight: [500, null, null, 400],
    },
    p: {
      fontSize: ["15px", null, null, "17px"],
      mt: [3, 3, 3, 5],
    },
  },
  featureWrapper: {
    gap: ["40px 20px", null, null, null, "30px"],
    display: "grid",
    gridTemplateColumns: [
      "repeat(2,1fr)",
      null,
      null,
      "repeat(3,180px)",
      "repeat(3,1fr)",
    ],
    justifyContent: ["unset", null, null, "center", "flex-start"],
  },
  rightContent: {
    position: "relative",
    mt: [6, 6, 6, 6, 0],
    maxWidth: "100%",
    ".swiper-pagination-bullets": {
      bottom: 20,
    },
    ".swiper-pagination-bullet": {
      backgroundColor: "rgba(255,255,255,0.5)",
      width: 10,
      height: 10,
      opacity: 1,
      mx: 5,
      ":focus": {
        outline: 0,
      },
    },
    ".swiper-pagination-bullet-active": {
      backgroundColor: "rgba(255,255,255,1)",
    },
  },
  progressbar: {
    position: "absolute",
    left: [15, 25],
    top: [82, 95],
    zIndex: 2,
  },
  progressBar: {
    position: "relative",
    mr: 4,
  },
  toggleButton: {
    backgroundColor: "transparent",
    border: 0,
    cursor: "pointer",
    display: "flex",
    padding: 0,
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    "&:focus": {
      outline: "0 none",
    },
  },
  image: {
    position: "relative",
    display: "flex",
    alignItems: "flex-start",
    "> img": {
      borderRadius: 15,
    },
    figcaption: {
      backgroundColor: "primary",
      display: "flex",
      alignItems: "center",
      position: "absolute",
      left: 0,
      top: 70,
      borderRadius: 5,
      color: "#fff",
      padding: ["20px 20px 20px 80px", "25px 25px 25px 90px"],
      h4: {
        lineHeight: 1,
        fontWeight: "bold",
        fontSize: [14, 18],
        letterSpacing: "heading",
      },
      p: {
        fontSize: [13, 16],
        fontWeight: 500,
        letterSpacing: "heading",
        color: rgba("#fff", 0.6),
        marginTop: [2],
      },
    },
  },
};
