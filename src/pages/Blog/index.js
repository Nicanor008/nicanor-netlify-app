import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Flex
} from '@chakra-ui/react';
import { BlogArticle } from '../../components/BlogAndTimeline/BlogArticle';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

const Blog = () => {
  return (
    <ChakraProvider theme={theme}>
    <Box fontSize="md">
      <Grid minH="100vh" py={3} mx={["2rem", "6rem"]}>
        <NavBar />
        <VStack spacing={8}>
          <Flex flexDir="column" justifyContent="center" w={['100%', '60%']}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((blog) => (
              <BlogArticle
                key={blog}
                title="Title One"
                link="#"
                description="Qui incididunt sint voluptate velit laboris esse.sint voluptate velit laboris esse.uptate velit laboris esse.sint voluptate velit laboris esse.uptate velit laboris esse.sint voluptate velit laboris esse.dsd"
              />
            ))}
          </Flex>
        </VStack>
      </Grid>
    </Box>
    <Footer />
  </ChakraProvider>
  )
}

export default Blog
