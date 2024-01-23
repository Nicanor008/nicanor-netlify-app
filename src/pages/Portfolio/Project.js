import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import Futr from '../../assets/images/futr.svg';
import PortfolioProject from './PortfolioProject';

const portfolio = {
  link: 'https://futr.ai',
  title: 'Futr.ai Chatbot Solution',
  role: 'Frontend Developer',
  tools: ['TS', 'React', 'Chakra-ui'],
  image: Futr,
  imageAlt: 'Futr.ai',
  description: `Dynamic customisable B2B data driven chatbot solution`,
};

const SingleProject = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="md" bg="#233554" color="#fff">
        <NavBar />
        <Grid py={3} w="100%" justifyItems="center" minH="90vh">
          <PortfolioProject
            link={portfolio.link}
            title={portfolio.title}
            role={portfolio.role}
            tools={portfolio.tools}
            pl={10}
            pr={0}
            description={portfolio.description}
            image={portfolio.image}
            imageAlt={portfolio.imageAlt}
          />
        </Grid>
      </Box>
      <Footer />
    </ChakraProvider>
  );
};

export default SingleProject;
