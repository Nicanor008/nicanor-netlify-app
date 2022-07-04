import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Flex
} from '@chakra-ui/react';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import Futr from '../../assets/images/futr.svg'
import FA from '../../assets/images/fa.png'
import Heroes4Change from '../../assets/images/heroes4change.jpeg'
import Incentro from '../../assets/images/incentro.png'
import IncentroCareers from '../../assets/images/incentro-careers.png'
import FollowtheBeat from '../../assets/images/followthebeat.png'
import PortfolioProject from './PortfolioProject';

const data = [
  {
    link: "https://futr.ai",
    title: "Futr.ai Chatbot Solution",
    role: "Frontend Developer",
    tools: ['TypeScipt', 'React', 'Chakra-ui', 'GraphQL'],
    image: Futr,
    imageAlt: "Futr.ai",
    description: `This is a dynamic customisable data driven chatbot SAAS plugin. I was involved in rewriting the entire
    application to use socket communication with a responsive interactive user interface interface.`
  },
  {
    link: "https://lendxs.com/",
    title: "Financial Access",
    role: "Software Engineer",
    tools: ['JS', 'React', 'Redux', 'Material UI', 'Python'],
    image: FA,
    imageAlt: "Financial Access",
    description: `This is a SAAS solution for loan origination that includes digital data collection, workflow management, credit scoring and impact monitoring. 
      I was involved in frontend development of interactive user interface and integration with different microservices.
      I also did translate the site to Mandarin and french languages.`
  },
  {
    link: "https://heroes4change.com/",
    title: "Heroes For Change",
    role: "Frontend Developer",
    tools: ['JS', 'React', 'Redux', 'Material UI'],
    description: `Heroes for Change is a for-profit, service-based organization harnessing the power of purpose-driven youth volunteers
      who have the resource of time, social capital and trust, who will deliver scalable social impact programmes in their own communities.
    I was part of the the frontend team that implemented the dashboard to manage the heroes for different programmes.`,
    image: Heroes4Change,
    imageAlt: "Heroes"
  },
  {
    link: "https://incentro.com/",
    title: "Incentro",
    role: "Frontend Developer",
    tools: ['JS', 'React', 'Gatsby', 'GraphQL', 'Contentful'],
    description: `I was involved in the maintenance of the company website. This mostly included, implemented feedback and new features from the client and stackholders`,
    image: Incentro,
    imageAlt: "incentro"
  },
  {
    link: "https://careers.incentro.com/",
    title: "Incentro Careers",
    role: "Frontend Developer",
    tools: ['JS', 'React', 'Gatsby', 'GraphQL', 'Contentful', ],
    description: `I did translate the current platform to spanish and added new filter options on the vacancies.`,
    image: IncentroCareers,
    imageAlt: "incentro"
  },
  {
    link: "https://followthebeat.nl/",
    title: "Follow The Beat",
    role: "Frontend Developer",
    tools: ['JavaScript', 'React', 'Firebase'],
    description: `Developed one the most streamed platform during the 2020 new year celebration. About 600, 000 active views were streamed on the platform simulateneously.`,
    image: FollowtheBeat,
    imageAlt: "incentro"
  }
]

const Portfolio = () => {
  return (
    <ChakraProvider theme={theme}>
    <Box fontSize="md">
      <NavBar />
      <Grid py={3} px={["2rem", "3rem"]}>
        <Flex flexDir="column">
          <Flex display={["block", "inline-grid"]} gridTemplateColumns="repeat(3, 1fr)">
            {data.map((portfolio, i) => (
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
            ))}
          </Flex>
        </Flex>
      </Grid>
    </Box>
    <Footer />
  </ChakraProvider>
  )
}

export default Portfolio
