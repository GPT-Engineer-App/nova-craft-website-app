import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { ChakraProvider, Box, Container, VStack, HStack, Text, Button, IconButton, Image } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

// Placeholder images
const logoUrl = "https://images.unsplash.com/photo-1496200186974-4293800e2c20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwbG9nb3xlbnwwfHx8fDE3MTg4NzA0ODJ8MA&ixlib=rb-4.0.3&q=80&w=1080";
const homeImageUrl = "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxob21lJTIwcGFnZSUyMGJhbm5lcnxlbnwwfHx8fDE3MTg4NzA0ODN8MA&ixlib=rb-4.0.3&q=80&w=1080";
const servicesImageUrl = "https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzZXJ2aWNlc3xlbnwwfHx8fDE3MTg4NzA0ODN8MA&ixlib=rb-4.0.3&q=80&w=1080";
const portfolioImageUrl = "https://images.unsplash.com/photo-1545665277-5937489579f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW98ZW58MHx8fHwxNzE4ODcwNDgzfDA&ixlib=rb-4.0.3&q=80&w=1080";
const aboutUsImageUrl = "https://images.unsplash.com/photo-1563906267088-b029e7101114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhYm91dCUyMHVzfGVufDB8fHx8MTcxODg3MDQ4NHww&ixlib=rb-4.0.3&q=80&w=1080";
const contactUsImageUrl = "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwdXN8ZW58MHx8fHwxNzE4ODcwNDg0fDA&ixlib=rb-4.0.3&q=80&w=1080";

// Home Page
const Home = () => (
  <Container centerContent>
    <Image src={homeImageUrl} alt="Home Banner" />
    <Text fontSize="2xl" mt={4}>
      Welcome to Nova Craft Media
    </Text>
    <Text mt={2}>We craft media solutions that elevate your brand.</Text>
  </Container>
);

// Services Page
const Services = () => (
  <Container centerContent>
    <Image src={servicesImageUrl} alt="Services" />
    <Text fontSize="2xl" mt={4}>
      Our Services
    </Text>
    <Text mt={2}>We offer a wide range of media services to meet your needs.</Text>
  </Container>
);

// Portfolio Page
const Portfolio = () => (
  <Container centerContent>
    <Image src={portfolioImageUrl} alt="Portfolio" />
    <Text fontSize="2xl" mt={4}>
      Our Portfolio
    </Text>
    <Text mt={2}>Check out some of our recent projects.</Text>
  </Container>
);

// About Us Page
const AboutUs = () => (
  <Container centerContent>
    <Image src={aboutUsImageUrl} alt="About Us" />
    <Text fontSize="2xl" mt={4}>
      About Us
    </Text>
    <Text mt={2}>Learn more about our company and team.</Text>
  </Container>
);

// Contact Us Page
const ContactUs = () => (
  <Container centerContent>
    <Image src={contactUsImageUrl} alt="Contact Us" />
    <Text fontSize="2xl" mt={4}>
      Contact Us
    </Text>
    <Text mt={2}>Get in touch with us for any inquiries.</Text>
  </Container>
);

// Navigation Bar
const NavBar = () => (
  <HStack spacing={4} p={4} bg="blue.500" color="white">
    <Image src={logoUrl} alt="Logo" boxSize="50px" />
    <Link to="/">
      <Button variant="link" color="white">
        Home
      </Button>
    </Link>
    <Link to="/services">
      <Button variant="link" color="white">
        Services
      </Button>
    </Link>
    <Link to="/portfolio">
      <Button variant="link" color="white">
        Portfolio
      </Button>
    </Link>
    <Link to="/about-us">
      <Button variant="link" color="white">
        About Us
      </Button>
    </Link>
    <Link to="/contact-us">
      <Button variant="link" color="white">
        Contact Us
      </Button>
    </Link>
  </HStack>
);

// Footer
const Footer = () => (
  <HStack spacing={4} p={4} bg="gray.700" color="white" justifyContent="center">
    <IconButton aria-label="Facebook" icon={<FaFacebook />} />
    <IconButton aria-label="Twitter" icon={<FaTwitter />} />
    <IconButton aria-label="Instagram" icon={<FaInstagram />} />
    <Text>&copy; {new Date().getFullYear()} Nova Craft Media</Text>
  </HStack>
);

const App = () => (
  <ChakraProvider>
    <Router>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <NavBar />
        <Box flex="1">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  </ChakraProvider>
);

export default App;
