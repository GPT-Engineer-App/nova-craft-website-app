import { Link } from "react-router-dom";
import { Box, Flex, Button } from "@chakra-ui/react";

function Navigation() {
  return (
    <Box bg="gray.100" p={4}>
      <Flex justify="space-around">
        <Button as={Link} to="/">
          Home
        </Button>
        <Button as={Link} to="/services">
          Services
        </Button>
        <Button as={Link} to="/portfolio">
          Portfolio
        </Button>
        <Button as={Link} to="/about-us">
          About Us
        </Button>
        <Button as={Link} to="/contact-us">
          Contact Us
        </Button>
      </Flex>
    </Box>
  );
}

export default Navigation;
