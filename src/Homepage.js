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
            {/* <Text>Intro</Text>
            <Text>About ME</Text>
            <Text>Work | Projects</Text>
            <Text>Blog | Timeline</Text> */}
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default Homepage;
