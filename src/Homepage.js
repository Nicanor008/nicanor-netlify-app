import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';
import Intro from './components/Intro';
import NavBar from './components/NavBar';

function Homepage() {
  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl">
        <Grid minH="100vh" py={3} mx={["2rem", "6rem"]}>
          <NavBar />
          <VStack spacing={8}>
            <Intro />

            {/* scroll */}
            <Box bottom={10} position="absolute">
              <svg width="36" height="70" viewBox="0 0 36 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="34" height="68" rx="17" fill="white" stroke="#9DB1FB" stroke-width="2"/>
                <circle cx="18.7042" cy="17.3582" r="3" stroke="#9DB1FB" stroke-width="2"/>
              </svg>
            </Box>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default Homepage;
