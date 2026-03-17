import React from "react";
import { Box } from "theme-ui";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BlockTitle from "components/block-title";
import TestimonialsCard from "components/cards/testimonial-card";

SwiperCore.use([Autoplay]);

const avatar = "/assets/images/testimonials/user.png";

const TESTIMONIALS_DATA = [
  [
    {
      id: 1,
      image: avatar,
      name: "Ravi Kumar",
      username: "@ravikumar",
      text: `I personally believe that the best way to learn is by doing and that's exactly what I did. I started with a simple idea and I was able to build a website in just a few days with codash as I didn't have any good machine to run the fancy Code editors. I'm really happy with the result and I'm really excited for the future.`,
    },
    {
      id: 2,
      image: avatar,
      name: "Chetan Rathi",
      username: "@hello.chetan",
      text: `I had provided Codash IDE to my employees when we were working on our site and it was really easy to manage all the stuff.`,
    },
  ],
  [
    {
      id: 3,
      image: avatar,
      name: "Sneha Shah",
      username: "@shah.sneha",
      text: `Its been 2 weeks that I have been using Codash Beta Version. I am really happy and satisfied with the result. It was never this easy to sync my code on different devices.`,
    },
    {
      id: 4,
      image: avatar,
      name: "Confidence Cokoghenun",
      username: "@cokoghenun",
      text: `I have started using Codash and the results are quite satisfactory as now I don't have to use github everytime to take my code to other machine.`,
    },
  ],
  [
    {
      id: 5,
      image: avatar,
      name: "Dharam Singh",
      username: "@dharamsingh",
      text: `I got Blaze plan for myself and the uptime is very good. It was never down for me till now and I haven't faced any problem in compiling the code till now. At this price, I really think that it is worth it. Even if you have a powerful machine, I would recommend you to use Codash as it can be used for coding in teams and that's how I personally used it.`,
    },
    {
      id: 6,
      image: avatar,
      name: "Nitish Kumar",
      username: "@nitish.kumar",
      text: `Codash is a great tool for me as it helps me to write the code on any device that I have given that it is touch screen. I personally like the setup process that you don't have to do much stuff while it up. Just go rent a server and start programming.`,
    },
  ],
  [
    {
      id: 7,
      image: avatar,
      name: "Harshita Joshi",
      username: "@harshitajoshi",
      text: `Works just fine! It good to have a second IDE in my main workflow cuz it makes it easier to work on multiple projects simultaneously.`,
    },
    {
      id: 8,
      image: avatar,
      name: "Vinay Arora",
      username: "@vinay.me",
      text: `Its been 3 days that I have been using Kelvin in its beta testing. I really loved it as it was very easy to use. Also, you don't have to worry about saving the stuff, even if you quit the code editor, it caches that into your storage automatically.`,
    },
  ],
  [
    {
      id: 9,
      image: avatar,
      name: "Lallan Kumar Sharma",
      username: "@lallannn",
      text: `Ah man! Thanks a lot for providing me with such a great tool. I no longer have to worry about those noisy fans running when I tried to compile my code on my old PC.`,
    },
    {
      id: 10,
      image: avatar,
      name: "Himanhi Sharma",
      username: "@sharmahimanhi",
      text: `I was looking for a tool that would allow me to run my code on my phone and my PC. I found Codash and it was a great software. Another thing that I liked about codash is that you can install it too only your machine if you don't always want to open a browser first.`,
    },
  ],
];

const Testimonials = () => {
  const testimonialCarousel = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    centeredSlides: true,
    autoHeight: true,
    autoplay: {
      waitForTransition: false,
      delay: 4000,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  };
  return (
    <Box as="section" id="testimonials" sx={styles.testimonials}>
      <BlockTitle
        title="What clients say about us"
        text="Customer testimonial"
      />
      <Swiper {...testimonialCarousel}>
        {TESTIMONIALS_DATA.map((item, index) => (
          <SwiperSlide key={index}>
            {item.map(({ image, text, name, username }, _index) => (
              <TestimonialsCard
                image={image}
                text={text}
                name={name}
                key={_index}
                username={username}
              />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Testimonials;

const styles = {
  testimonials: {
    backgroundColor: "#FFFFFF",
    pt: ["50px", null, null, null, "50px", null, "50px"],
    pb: ["50px", null, null, null, "50px", null, "50px"],
  },
};
