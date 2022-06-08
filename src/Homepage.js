import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Flex
} from '@chakra-ui/react';
import About from './components/About';
import Intro from './components/Intro';
import NavBar from './components/NavBar';

function Homepage() {
  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl">
        <Grid minH="100vh" py={3} mx={["2rem", "6rem"]}>
          <NavBar />
          <VStack spacing={8}>
            <Flex w="100%" flexDir="column" alignItems="center">
              <Intro />

              {/* scroll */}
              <Box mt="6rem">
                <svg width="36" height="70" viewBox="0 0 36 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="34" height="68" rx="17" fill="white" stroke="#9DB1FB" strokeWidth="2"/>
                  <circle cx="18.7042" cy="17.3582" r="3" stroke="#9DB1FB" strokeWidth="2"/>
                </svg>
              </Box>
            </Flex>

            <About />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default Homepage;
