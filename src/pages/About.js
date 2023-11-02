import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        We strive to offer an authentic culinary journey through the vibrant and diverse flavors of India. Established with a passion for delivering an unparalleled dining experience, we are dedicated to bringing the essence of Indian culture and cuisine to your table.
        </p>
        <br/>
        <p>
        Our journey began with a vision to create a space where every guest feels the warmth of Indian hospitality and indulges in the rich tapestry of Indian flavors, crafted with love and tradition. Through our carefully curated menu, we aim to showcase the depth and variety of Indian culinary traditions, from the robust spices of the North to the delicate flavors of the South, and everything in between.
        </p>
        <br />
        <p>
        We take pride in sourcing the freshest ingredients and spices, ensuring that each dish reflects the true essence of Indian gastronomy. Our team of expert chefs, with their deep-rooted understanding of regional cuisines, continuously strive to create a symphony of tastes that transport you to the heart of India.
        <br/>
        Beyond just a dining experience, we aim to foster a sense of community and togetherness, welcoming every guest as a part of our extended family. Whether you're a seasoned connoisseur of Indian cuisine or exploring its delights for the first time, we invite you to embark on a memorable journey with us, where every bite tells a story and every meal creates cherished memories.
        </p>
        <br />
        <p>
        Join us as we celebrate the heritage and flavors of India, one plate at a time.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
