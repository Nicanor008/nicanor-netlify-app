import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Flex
} from '@chakra-ui/react';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import Project from '../../components/Work/Project';

const Portfolio = () => {
  return (
    <ChakraProvider theme={theme}>
    <Box fontSize="md">
      <Grid minH="100vh" py={3} mx={["2rem", "6rem"]}>
        <NavBar />
        <VStack spacing={8}>
          <Flex flexDir="column">
            <Flex flexDir="row" display={["block", "flex"]}>
              {[1, 2, 3].map((portfolio, i) => (
                <Project
                  link="https://futr.ai"
                  title="Futr.ai Chatbot Solution"
                  role="Frontend Developer"
                  tools={['TypeScipt', 'React.JS', 'Context API', 'Chakra-ui']}
                  pl={i === 0 ? 0 : 10}
                  pr={i === 0 ? 4 : 0}
                  pt={18}
                  key={portfolio}
                />
              ))}
            </Flex>
            <Flex flexDir="row" display={["block", "flex"]} mt={[0, 20]}>
              {[1, 2, 3].map((portfolio, i) => (
                <Project
                  link="https://futr.ai"
                  title="Futr.ai Chatbot Solution"
                  role="Frontend Developer"
                  tools={['TypeScipt', 'React.JS', 'Context API', 'Chakra-ui']}
                  pl={i === 0 ? 0 : 10}
                  pr={i === 0 ? 4 : 0}
                  key={portfolio}
                />
              ))}
            </Flex>
            <Flex flexDir="row" display={["block", "flex"]} mt={[0, 20]} mb={[10, 16]}>
              {[1, 2, 3].map((portfolio, i) => (
                <Project
                  link="https://futr.ai"
                  title="Futr.ai Chatbot Solution"
                  role="Frontend Developer"
                  tools={['TypeScipt', 'React.JS', 'Context API', 'Chakra-ui']}
                  pl={i === 0 ? 0 : 10}
                  pr={i === 0 ? 4 : 0}
                  key={portfolio}
                />
              ))}
            </Flex>
          </Flex>
        </VStack>
      </Grid>
    </Box>
    <Footer />
  </ChakraProvider>
  )
}

export default Portfolio
