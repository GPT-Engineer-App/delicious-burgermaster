import React from "react";
import { Box, Heading, Button, Text, VStack, Image, Grid, GridItem } from "@chakra-ui/react";
import { FaHamburger, FaShoppingCart, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading display="inline-block" as="h2" size="2xl" bgGradient="linear(to-r, teal.400, teal.600)" backgroundClip="text">
        Chud Burger
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Delicious burgers for every taste!
      </Text>
      <Text color={"gray.500"} mb={4}>
        Enjoy the best gourmet burgers in town. Made with love and the freshest ingredients.
      </Text>

      <Image src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjByZXN0YXVyYW50fGVufDB8fHx8MTcxMDI4OTIyNnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Chud Burger" borderRadius="md" boxSize="300px" objectFit="cover" m="auto" my={5} />

      <Grid templateColumns="repeat(3, 1fr)" gap={6} mt={5}>
        <GridItem w="100%">
          <Button leftIcon={<FaHamburger />} colorScheme="teal" variant="solid">
            Our Menu
          </Button>
        </GridItem>
        <GridItem w="100%">
          <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="outline">
            Order Online
          </Button>
        </GridItem>
        <GridItem w="100%">
          <Button leftIcon={<FaInfoCircle />} colorScheme="teal" variant="ghost">
            About Us
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Index;
