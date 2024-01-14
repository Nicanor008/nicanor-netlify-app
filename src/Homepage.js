import { ChakraProvider, Box, VStack, Grid, theme } from '@chakra-ui/react';
import About from './components/About';
import Intro from './components/Intro';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import OverTheYears from './components/OverTheYears';
import GuideToWork from './components/GuideToWork';

function Homepage() {
  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="md" bg="#233554" color="white">
        <Grid minH="100vh" py={3} maxW="100vw">
          <NavBar />
          <VStack spacing={8}>
            {/* <Flex> */}
            <Intro />

            {/* scroll
              <Box mt="1rem" bg="red">
                <svg width="36" height="70" viewBox="0 0 36 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="34" height="68" rx="17" fill="white" stroke="#9DB1FB" strokeWidth="2"/>
                  <circle cx="18.7042" cy="17.3582" r="3" stroke="#9DB1FB" strokeWidth="2"/>
                </svg>
              </Box> */}
            {/* </Flex> */}
          </VStack>
        </Grid>

        {/* about me */}
        <About />

        {/* <Work /> */}
        <Grid minH="100vh" py={3} mx={['2rem', '6rem']}>
          <VStack spacing={8}>
            <OverTheYears />
          </VStack>
        </Grid>

        <GuideToWork />
      </Box>
      <Footer />
    </ChakraProvider>
  );
}

export default Homepage;
