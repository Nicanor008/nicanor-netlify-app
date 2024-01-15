import { ChakraProvider, Box, Grid, theme, Flex } from '@chakra-ui/react';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import Futr from '../../assets/images/futr.svg';
import FA from '../../assets/images/fa.png';
import Heroes4Change from '../../assets/images/heroes4change.jpeg';
import Incentro from '../../assets/images/incentro.png';
import IncentroCareers from '../../assets/images/incentro-careers.png';
import FollowtheBeat from '../../assets/images/followthebeat.png';
import PortfolioProject from './PortfolioProject';

const data = [
  {
    link: 'https://futr.ai',
    title: 'Futr.ai Chatbot Solution',
    role: 'Frontend Developer',
    tools: ['TS', 'React', 'Chakra-ui'],
    image: Futr,
    imageAlt: 'Futr.ai',
    description: `Dynamic customisable B2B data driven chatbot solution`,
  },
  {
    link: 'https://lendxs.com/',
    title: 'Financial Access',
    role: 'Software Engineer',
    tools: ['JS', 'React', 'MUI', 'Python'],
    image: FA,
    imageAlt: 'Financial Access',
    description: `B2B SAAS solution for loan origination`,
  },
  {
    link: 'https://heroes4change.com/',
    title: 'Heroes For Change',
    role: 'Frontend Developer',
    tools: ['JS', 'React', 'Redux', 'MUI'],
    description: `harnessing the power of purpose-driven youth volunteers`,
    image: Heroes4Change,
    imageAlt: 'Heroes',
  },
  {
    link: 'https://incentro.com/',
    title: 'Incentro',
    role: 'Frontend Developer',
    tools: ['JS', 'React', 'Gatsby'],
    description: `Incentro Company website`,
    image: Incentro,
    imageAlt: 'incentro',
  },
  {
    link: 'https://careers.incentro.com/',
    title: 'Incentro Careers',
    role: 'Frontend Developer',
    tools: ['JS', 'Gatsby', 'Contentful'],
    description: `Incentro company careers website`,
    image: IncentroCareers,
    imageAlt: 'incentro',
  },
  {
    link: 'https://followthebeat.nl/',
    title: 'Follow The Beat',
    role: 'Frontend Developer',
    tools: ['JS', 'React', 'Firebase'],
    description: `End year live streams with about 600, 000 active users`,
    image: FollowtheBeat,
    imageAlt: 'FollowtheBeat',
  },
];

const Portfolio = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="md" bg="#233554">
        <NavBar />
        <Grid py={3} w="100%" justifyItems="center">
          <Flex
            w={['98%', '80%']}
            flexDir={['column', 'row']}
            flexWrap="wrap"
            justifyContent="center"
          >
            {data.map((portfolio, i) => (
              <PortfolioProject
                key={i}
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
            ))}
          </Flex>
        </Grid>
      </Box>
      <Footer />
    </ChakraProvider>
  );
};

export default Portfolio;
