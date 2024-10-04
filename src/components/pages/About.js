import React from "react";
import { Container, Typography, Paper, Box, Fade } from "@mui/material";
import { styled } from "@mui/system";

const AboutPageContainer = styled(Container)({
  backgroundColor: "#f4f4f4",
  padding: "40px 0",
  textAlign: "center",
});

const Section = styled(Box)({
  marginBottom: "40px",
});

const StyledImage = styled("img")({
  width: "100%",
  height: "auto",
  borderRadius: "8px",
});

const StyledPaper = styled(Paper)({
  padding: "24px",
  margin: "16px 0",
});

const AboutPage = () => {
  return (
    <AboutPageContainer>
      <Fade in timeout={1000}>
        <StyledPaper elevation={3}>
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
            About Our Sneaker Show
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Welcome to the world of sneakers! Our sneaker show is a celebration
            of the art, culture, and passion that surrounds these iconic
            footwear pieces. We're here to take you on a journey through the
            history, innovation, and style that make sneakers more than just
            shoes.
          </Typography>
          <StyledImage
            src="https://img.ltwebstatic.com/images3_pi/2021/09/24/163246799387532d7b616650654dac66ae42b030b0_thumbnail_720x.webp"
            alt="Sneaker Show"
          />
        </StyledPaper>
      </Fade>

      <Fade in timeout={1000} style={{ transitionDelay: "500ms" }}>
        <StyledPaper elevation={3}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Our Passion
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            At our sneaker show, we're more than just enthusiasts; we're
            sneakerheads. Our team is dedicated to curating a collection of the
            most iconic, rare, and unique sneakers from around the globe. We
            believe that sneakers are more than just a fashion statement; they
            tell stories, represent moments in time, and bridge generations.
          </Typography>
          <StyledImage
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5dAZ6UyNUQ1gLdQCA2f2QrVh9JibNKHFNdzOJQzll1-azv4R78Dk-Ftz0B0uQLbqMWyQ&usqp=CAU"
            alt="Passion for Sneakers"
          />
        </StyledPaper>
      </Fade>

      <Fade in timeout={1000} style={{ transitionDelay: "1000ms" }}>
        <StyledPaper elevation={3}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Our Mission
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Our mission is to share the love and culture of sneakers with the
            world. We strive to provide a platform where sneaker enthusiasts can
            connect, discover new releases, and learn about the rich history of
            their favorite kicks. Through our exhibitions, events, and online
            community, we aim to foster a sense of belonging and appreciation
            for the sneaker culture.
          </Typography>
          <StyledImage
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO3hA5_E8KBqsgMSq_mDKMJFD_p4zOVxPc62nfLmvALndsNh6PW-WZe14UNEWgwx5wzUs&usqp=CAU"
            alt="Our Mission"
          />
        </StyledPaper>
      </Fade>
    </AboutPageContainer>
  );
};

export default AboutPage;
