import { Flex, Text, Button } from '@chakra-ui/react'
import Project from './Project'

const Work = () => {
  return (
    <Flex flexDir="column" w="100%" h="auto" alignSelf="center">
      <Flex flexDir="row" display={["block", "flex"]} mt={[14, 20]}>
        <Flex flexDir="column" w={['100%', '50%']} pr={[2, 12]}>
          <Text fontSize={['36px', '50px']} fontWeight={700} fontFamily="Inter">WORK & PROJECTS</Text>
          <Text pt={4} textAlign="justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla nisl eget quisque in sit venenatis ultricies.
            Fermentum, placerat ultrices purus consectetur. Pharetra, felis volutpat metus consectetur nisl nullam ornare.
            Et euismod commodo lectus luctus eu id elementum a.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            nulla nisl eget quisque in sit venenatis ultricies. Fermentum, placerat ultrices purus consectetur. Pharetra, felis 
            volutpat metus consectetur nisl nullam ornare. Et euismod commodo lectus luctus eu id elementum a.eget quisque in sit 
            venenatis ultricies. Fermentum, placerat ultrices purus consectetur. Pharetra, felis volutpat metus consectetur nisl 
            nullam ornare. Et euismod commodo lectus luctus eu id elementum a.
          </Text>
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
        </Flex>
        <Project
          link="https://futr.ai"
          title="Futr.ai Chatbot Solution"
          role="Frontend Developer"
          tools={['TypeScipt', 'React.JS', 'Context API', 'Chakra-ui']}
          pl={10}
          pr={0}
        />
      </Flex>
      <Flex flexDir="row" display={["block", "flex"]} mt={[14, 20]}>
        <Project
          link="https://futr.ai"
          title="Futr.ai Chatbot Solution"
          role="Frontend Developer"
          tools={['TypeScipt', 'React.JS', 'Context API', 'Chakra-ui']}
          pl={0}
          pr={12}
        /> 
        <Project
          link="https://futr.ai"
          title="Futr.ai Chatbot Solution"
          role="Frontend Developer"
          tools={['TypeScipt', 'React.JS', 'Context API', 'Chakra-ui']}
          pl={10}
          pr={0}
        />
      </Flex>
    </Flex>
  )
}

export default Work
