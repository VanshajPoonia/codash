/** @jsx jsx */
import dynamic from "next/dynamic";
import { jsx, Box, Container } from "theme-ui";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeading from "components/section-heading";
const Testimonial = dynamic(() => import("components/cards/testimonial"));
// import Testimonial from 'components/cards/testimonial';
// import avatar1 from "assets/images/testimonials/1.png";
// import avatar2 from "assets/images/testimonials/2.png";
// import avatar3 from "assets/images/testimonials/3.png";
// import avatar4 from "assets/images/testimonials/4.png";
// import avatar5 from "assets/images/testimonials/5.png";
// import avatar6 from "assets/images/testimonials/6.png";
// import avatar7 from "assets/images/testimonials/7.png";
// import avatar8 from "assets/images/testimonials/8.png";
import avatar from "assets/images/testimonials/user.png";

const data = [
  [
    {
      id: 1,
      avatar: avatar,
      name: "Ravi Kumar",
      username: "@ravikumar",
      text: `I personally believe that the best way to learn is by doing and that's exactly what I did. I started with a simple idea and I was able to build a website in just a few days with codash as I didn't have any good machine to run the fancy Code editors. I'm really happy with the result and I'm really excited for the future.`,
    },
    {
      id: 2,
      avatar: avatar,
      name: "Chetan Rathi",
      username: "@hello.chetan",
      text: `I had provided Codash IDE to my employees when we were working on our site and it was really easy to manage all the stuff.`,
    },
  ],
  [
    {
      id: 3,
      avatar: avatar,
      name: "Sneha Shah",
      username: "@shah.sneha",
      text: `Its been 2 weeks that I have been using Codash Beta Version. I am really happy and satisfied with the result. It was never this easy to sync my code on different devices.`,
    },
    {
      id: 4,
      avatar: avatar,
      name: "Confidence Cokoghenun",
      username: "@cokoghenun",
      text: `I have started using Codash and the results are quite satisfactory as now I don't have to use github everytime to take my code to other machine.`,
    },
  ],
  [
    {
      id: 5,
      avatar: avatar,
      name: "Dharam Singh",
      username: "@dharamsingh",
      text: `I got Blaze plan for myself and the uptime is very good. It was never down for me till now and I haven't faced any problem in compiling the code till now. At this price, I really think that it is worth it. Even if you have a powerful machine, I would recommend you to use Codash as it can be used for coding in teams and that's how I personally used it.`,
    },
    {
      id: 6,
      avatar: avatar,
      name: "Nitish Kumar",
      username: "@nitish.kumar",
      text: `Codash is a great tool for me as it helps me to write the code on any device that I have given that it is touch screen. I personally liek the setup process that you don't have to do much stuff while it up. Just go rent a server and start programming.`,
    },
  ],
  [
    {
      id: 7,
      avatar: avatar,
      name: "Harshita Joshi",
      username: "@harshitajoshi",
      text: ``,
    },
    {
      id: 8,
      avatar: avatar,
      name: "Vinay Arora",
      username: "@vinay.me",
      text: `Its been 3 days that I have been using Kelvin in its beta testing. I really loved it as it was very easy to use. Also, you don't have to worry about saving the stuff, even if you quit the code editor, it caches that into your storage automatically.`,
    },
  ],
  [
    {
      id: 9,
      avatar: avatar,
      name: "Lallan Kumar Sharma",
      username: "@lallannn",
      text: `Ah man! Thanks a lot for providing me with such a great tool. I no longer have to worry about those noisy fans running when I tried to compile my code on my old PC.`,
    },
    {
      id: 10,
      avatar: avatar,
      name: "Himanhi Sharma",
      username: "@sharmahimanhi",
      text: `I was looking for a tool that would allow me to run my code on my phone and my PC. I found Codash and it was a great software. Another thing that I liked about codash is that you can install it too only your machine if you don't always want to open a browser first.`,
    },
  ],
  // [
  //   {
  //     id: 11,
  //     avatar: avatar3,
  //     name: "Vinay Arora",
  //     username: "@vinay.me",
  //     text: `Its been 3 days that I have been using Kelvin in its beta testing. I really loved it as it was very easy to use. Also, you don't have to worry about saving the stuff, even if you quit the code editor, it caches that into your storage automatically.`,
  //   },
  //   {
  //     id: 12,
  //     avatar: avatar4,
  //     name: "Thais Carballal",
  //     username: "@myself.thais",
  //     text: `For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend`,
  //   },
  // ],
];

const Testimonials = () => {
  const options = {
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      1366: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <section id="testimonials" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="What client say about us"
          description="Customer testimonial"
        />
      </Container>
      <Swiper sx={styles.carousel} {...options}>
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            {item.map((slide) => (
              <Testimonial key={slide.id} data={slide} />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <Box sx={styles.testimonials}></Box> */}
    </section>
  );
};

export default Testimonials;

const styles = {
  section: {
    backgroundColor: "#FFFCF7",
    pt: [10, null, null, , 1, 1, 1],
    pb: [7, null, null, 0, 0, 0, 0],
  },
  heading: {
    mb: [7, null, 1, 1],
    h2: {
      fontSize: [6, null, null, 8],
    },
    p: {
      color: "#858B91",
      fontSize: 3,
      m: ["10px auto", null, "20px auto", "10px auto"],
    },
  },
  carousel: {
    "&.swiper-container": {
      pb: [2, 2, 2, 30], //last number is the bottom padding of the testimonials section.
      pl: [2, 2, 2, 2],
      pr: [2, 2, 2, 2],
    },
  },
};
