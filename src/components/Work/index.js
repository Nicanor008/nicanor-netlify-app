import { Flex, Text, Button, Link } from '@chakra-ui/react'
import Project from './Project'
import FA from '../../assets/images/fa.png'
import Futr from '../../assets/images/futr.svg'
import Heroes4Change from '../../assets/images/heroes4change.jpeg'

const Work = () => {
  return (
    <Flex flexDir="column" w="100%" h="auto" alignSelf="center">
      <Flex flexDir="row" display={["block", "flex"]} mt={[14, 20]}>
        <Flex flexDir="column" w={['100%', '50%']} pr={[2, 12]} alignSelf="center" alignItems="center">
          <Text fontSize={['36px', '50px']} fontWeight={700} fontFamily="Inter">WORK & PROJECTS</Text>
          {/* TODO: update projects description */}
          {/* <Text pt={4}>
            The following are some of the projects I've been involved in.
          </Text> */}
          <Link
            href="/portfolio"
            _hover={{ textDecoration: 'none'}}
            width={['100%', '62%']}
          >
            <Button
              width="100%"
              border="2px solid #9DB1FB"
              borderRadius="50px"
              bg="white"
              mt={4}
              variant="solid"
              colorScheme="white"
              color="black"

            >
              View All Projects
            </Button>
          </Link>
        </Flex>
        <Project
          link="https://futr.ai"
          title="Futr.ai Chatbot Solution"
          role="Frontend Developer"
          tools={['TypeScipt', 'React.JS', 'Context API', 'Chakra-ui', 'React Testing Library']}
          pl={10}
          pr={10}
          description="
          This is a dynamic customisable data driven chatbot SAAS plugin. I was involved in rewriting the entire
           application to use socket communication with a responsive interactive user interface interface.
          "
          image={Futr}
          imageAlt="Futr.ai"
          width="50%"
        />
      </Flex>
      <Flex flexDir="row" display={["block", "flex"]} mt={[14, 20]}>
        <Project
          link="https://lendxs.com/"
          title="Financial Access"
          role="Software Engineer"
          tools={['JavaScript', 'React.JS', 'Redux', 'Material UI', 'Python']}
          pl={0}
          // pr={12}
          description="
            This is a SAAS solution for loan origination that includes digital data collection, workflow management, credit scoring and impact monitoring. 
            I was involved in frontend development of interactive user interface and integration with different microservices.
            I also did translate the site to Mandarin and french languages.
          "
          image={FA}
          imageAlt="financial access"
        /> 
        <Project
          link="https://heroes4change.com/"
          title="Heroes For Change"
          role="Frontend Developer"
          tools={['JavaScript', 'React.JS', 'Redux', 'Material UI']}
          pl={10}
          pr={0}
          description="
            Heroes for Change is a for-profit, service-based organization harnessing the power of purpose-driven youth volunteers
             who have the resource of time, social capital and trust, who will deliver scalable social impact programmes in their own communities.
            I was part of the the frontend team that implemented the dashboard to manage the heroes for different programmes.
          "
          image={Heroes4Change}
          imageAlt="Heroes"
        />
        <Project
          link="https://heroes4change.com/"
          title="Heroes For Change"
          role="Frontend Developer"
          tools={['JavaScript', 'React.JS', 'Redux', 'Material UI']}
          pl={10}
          pr={0}
          description="
            Heroes for Change is a for-profit, service-based organization harnessing the power of purpose-driven youth volunteers
             who have the resource of time, social capital and trust, who will deliver scalable social impact programmes in their own communities.
            I was part of the the frontend team that implemented the dashboard to manage the heroes for different programmes.
          "
          image={Heroes4Change}
          imageAlt="Heroes"
        />
      </Flex>
    </Flex>
  )
}

export default Work
